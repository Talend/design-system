import React from 'react';
import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';

import { DocsContainer } from '@storybook/addon-docs';
import { TableOfContents, BackToTop } from 'storybook-docs-toc';
import { useLocalStorage } from 'react-use';

import 'focus-outline-manager';

import Divider from '../src/components/Divider';
import Form from '../src/components/Form';
import ThemeProvider from '../src/components/ThemeProvider';
import { IconsProvider } from '../src/components/IconsProvider';

import light, { dark } from '../src/themes';

const StorybookGlobalStyle = ThemeProvider.createGlobalStyle(
	({ hasFigmaIframe }) =>
		`
	.sb-show-main.sb-main-padded {
		padding: 0;
	}
	
	.sbdocs .figma-iframe--light,
	.sbdocs .figma-iframe--dark {
		position: ${hasFigmaIframe ? 'relative' : 'absolute'};
		left:  ${hasFigmaIframe ? 'auto' : '-9999rem'};
	}
	
	.sbdocs.sbdocs-preview .innerZoomElementWrapper {
		text-align: center;
	}
	
	.sbdocs.sbdocs-preview .innerZoomElementWrapper > * {
		width: 100%;
		border: 0 !important;
	}
	
	.themes {
		display: flex;
		flex-direction: row;
		height: 100vh;
	}
	
	.sbdocs .themes {
		height: auto;
	}
	
	.themes--full-width {
		flex-direction: column;
	}
	
	.theme {
		flex: 0 0 50%;
		padding: 1rem;
		text-align: start;
		overflow: hidden;
	}
	
	.theme--light {
		color: ${light.colors.textColor};
		background: ${light.colors.backgroundColor};
	}
	
	.theme--dark {
		color: ${dark.colors.textColor};
		background: ${dark.colors.backgroundColor};
	}
	`,
);

export const parameters = {
	docs: {
		container: props => {
			const [hasFigmaIframe, setFigmaIframe] = useLocalStorage('coral--has-figma-iframe', false);

			return (
				<ThemeProvider>
					<IconsProvider bundles={['https://unpkg.com/@talend/icons/dist/svg-bundle/all.svg']} />
					<ThemeProvider.GlobalStyle />
					<StorybookGlobalStyle hasFigmaIframe={hasFigmaIframe} />
					<TableOfContents>
						{['component', 'template', 'page'].find(term =>
							props.context.kind.split('/')[0].toLocaleLowerCase().includes(term),
						) && (
							<>
								<Divider />
								<Form.Switch
									label={'Figma'}
									onChange={() => setFigmaIframe(!hasFigmaIframe)}
									checked={!!hasFigmaIframe}
								/>
							</>
						)}
					</TableOfContents>
					<DocsContainer {...props} />
					<BackToTop />
				</ThemeProvider>
			);
		},
		source: {
			state: 'open',
		},
		transformSource: input => {
			const format = source =>
				prettier.format(source, {
					parser: 'babel',
					plugins: [prettierBabel],
				});
			// remove code snippet with selector since is redundant
			if (input?.includes('WithSelector')) {
				return ' ';
			}
			try {
				// if wrapped into an arrow function
				if (input?.trim().startsWith('(')) {
					const body = input.replace(/\((.*)\) => {((.|\n)*)}/gm, '$2');
					return format(body).trim();
				}
				// try to format JSX
				// remove last semicolon added by Prettier
				return format(input).trim().slice(0, -1);
			} catch (e) {
				// otherwise, return the same string
				return input;
			}
		},
	},
	options: {
		storySort: {
			order: [
				'Welcome',
				'Getting Started',
				'Component catalog',
				'Design Tokens',
				'Themes',
				'Content',
				'Components',
				[
					'Accordion',
					'Button',
					'Combobox',
					'Divider',
					'Drawer',
					'Dropdown',
					'Form',
					['Form', 'Form Fieldset', 'Form Field', 'Form Field Group', 'Fields', 'Form Buttons'],
					'HeaderBar',
					'Icon',
					'Inline Editing',
					'Inline Message',
					'Layout',
					'Link',
					'Loading',
					'Menu',
					'Modal',
					'Popover',
					'Skeleton',
					'Stepper',
					['Stepper', 'Step'],
				],
			],
		} /**/,
	},
};

export const decorators = [
	(Story, context) => {
		const isDocsMode = context.viewMode === 'docs';
		const isFullWidth = !!context.parameters.full;
		return (
			<>
				{!isDocsMode && (
					<>
						<IconsProvider bundles={['https://unpkg.com/@talend/icons/dist/svg-bundle/all.svg']} />
						<ThemeProvider.GlobalStyle />
						<StorybookGlobalStyle />
					</>
				)}
				<div className={`themes ${isFullWidth ? 'themes--full-width' : ''}`}>
					<div className="theme theme--light">
						<ThemeProvider theme={light}>
							<Story {...context} />
						</ThemeProvider>
					</div>
					<div className="theme theme--dark">
						<ThemeProvider theme={dark}>
							<Story {...context} />
						</ThemeProvider>
					</div>
				</div>
			</>
		);
	},
];
