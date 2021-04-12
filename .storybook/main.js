const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	stories: [
		'../src/Welcome.stories.@(js|tsx|mdx)',
		'../src/GettingStarted.stories.@(js|tsx|mdx)',
		'../src/Status.stories.@(js|tsx|mdx)',
		'../src/Catalog.stories.@(js|tsx|mdx)',
		'../src/tokens/docs/*.stories.@(js|tsx|mdx)',
		'../src/content/docs/*.stories.@(js|tsx|mdx)',
		'../src/themes/docs/Light.stories.@(js|tsx|mdx)',
		'../src/themes/docs/*.stories.@(js|tsx|mdx)',
		'../src/components/**/*.stories.@(js|tsx|mdx)',
		'../src/templates/**/*.stories.@(js|tsx|mdx)',
		'../src/pages/**/*.stories.@(js|tsx|mdx)',
	],
	reactOptions: {
		fastRefresh: true,
		strictMode: true,
	},
	addons: [
		{
			name: '@storybook/addon-docs',
			options: {
				transcludeMarkdown: true,
				sourceLoaderOptions: {
					prettierConfig: {
						arrowParens: 'avoid',
						printWidth: 100,
						singleQuote: true,
						trailingComma: 'all',
						semi: true,
						useTabs: true,
						overrides: [
							{
								files: '**/*.json',
								options: {
									tabWidth: 2,
									useTabs: false,
								},
							},
							{
								files: '**/*.scss',
								options: {
									printWidth: 1000,
								},
							},
						],
					},
				},
			},
		},
		'@storybook/addon-controls',
		'@storybook/addon-a11y',
		'@storybook/addon-actions',
		'@storybook/addon-backgrounds',
		'@storybook/addon-viewport',
		'@storybook/addon-toolbars',
		'@storybook/addon-links',
		'storybook-addon-pseudo-states',
		'storybook-addon-mdx-embed',
	],
	features: {
		postcss: false,
	},
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: prop => {
				if (prop.parent) {
					// filter inherited props
					return !prop.parent.fileName.includes('node_modules');
				}

				// filter inherited styled-components props
				return !['theme', 'as', 'forwardedAs', 'ref'].includes(prop.name);
			},
		},
	},
	webpackFinal: async config => {
		config.entry.unshift('core-js');
		config.plugins.push(
			new BrowserSyncPlugin({
				host: 'localhost',
				port: 3002,
				proxy: 'http://localhost:6006/',
			}),
		);
		return config;
	},
};
