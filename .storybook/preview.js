import React from 'react';
import { I18nextProvider } from 'react-i18next';
import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';

import { DocsContainer } from '@storybook/addon-docs';
import { TableOfContents, BackToTop } from 'storybook-docs-toc';
import { useLocalStorage } from 'react-use';

import 'focus-outline-manager';

import i18n from './i18n';

import Divider from '../src/components/Divider';
import Form from '../src/components/Form';
import ThemeProvider from '../src/components/ThemeProvider';
import { IconsProvider } from '../src/components/IconsProvider';

import light, { dark } from '../src/themes';

export const globalTypes = {
	locale: {
		name: 'Locale',
		defaultValue: 'en',
		toolbar: {
			icon: 'globe',
			items: [
				{ value: 'zh', title: 'Chinese' },
				{ value: 'en', title: 'English' },
				{ value: 'fr', title: 'French' },
				{ value: 'de', title: 'German' },
				{ value: 'ja', title: 'Japanese' },
			],
		},
	},
};

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
	
	.sbdocs .docs-story {
		background: linear-gradient(to right, 
									${light.colors.backgroundColor} 0%, 
									${light.colors.backgroundColor} 50%, 
									${dark.colors.backgroundColor} 50%, 
									${dark.colors.backgroundColor} 100%);
	}
	
	.sbdocs.sbdocs-wrapper--full-width-stories .docs-story {
		background: linear-gradient(to bottom, 
									${light.colors.backgroundColor} 0%, 
									${light.colors.backgroundColor} 50%, 
									${dark.colors.backgroundColor} 50%, 
									${dark.colors.backgroundColor} 100%);
	}
	
	.sbdocs .themes {
		display: flex;
		flex-direction: row;
	}
	
	.sbdocs .themes.themes--full-width {
		flex-direction: column;
	}
	
	.sbdocs .theme {
		flex: 0 0 50%;
		padding: 1rem;
		text-align: start;
		overflow: hidden;
	}
	
	.sbdocs .theme.theme--light {
		color: ${light.colors.textColor};
		background: ${light.colors.backgroundColor};
	}
	
	.sbdocs .theme.theme--dark {
		color: ${dark.colors.textColor};
		background: ${dark.colors.backgroundColor};
	}
	`,
);

const channel = addons.getChannel();

export const parameters = {
	docs: {
		container: props => {
			const [hasFigmaIframe, setFigmaIframe] = useLocalStorage('coral--has-figma-iframe', false);
			const [hasDarkMode, setDarkMode] = useLocalStorage('coral--has-dark-mode', false);
			const [hasBootstrapStylesheet, setBootstrapStylesheet] = useLocalStorage(
				'coral--has-bootstrap-stylesheet',
				true,
			);

			const isFullWidth = props.context?.parameters?.full;

			React.useEffect(() => {
				channel.emit(UPDATE_GLOBALS, {
					globals: { theme: hasDarkMode ? 'dark' : 'light' },
				});
			}, [hasDarkMode]);

			React.useEffect(() => {
				const { theme } = props.context.globals;
				const hasDarkModeFromToolbar = theme === 'dark';
				if (hasDarkModeFromToolbar != hasDarkMode) {
					setDarkMode(hasDarkModeFromToolbar);
				}
			}, [props.context.globals.theme]);

			React.useEffect(() => {
				document
					.querySelectorAll('#bootstrap-theme')
					.forEach(link => (link.disabled = !hasBootstrapStylesheet));
			}, [hasBootstrapStylesheet]);

			return (
				<ThemeProvider>
					<IconsProvider bundles={['https://unpkg.com/@talend/icons/dist/svg-bundle/all.svg']} />
					<ThemeProvider.GlobalStyle />
					<StorybookGlobalStyle hasFigmaIframe={hasFigmaIframe} />
					<TableOfContents>
						{['component', 'template', 'page'].find(term =>
							props.context.title?.split('/')[0].toLocaleLowerCase().includes(term),
						) && (
							<ThemeProvider>
								<Divider />
								<Form.Switch
									label={'Dark mode'}
									onChange={() => {
										setDarkMode(!hasDarkMode);
									}}
									checked={hasDarkMode}
								/>
								<Form.Switch
									label={'Bootstrap stylesheet'}
									onChange={() => setBootstrapStylesheet(!hasBootstrapStylesheet)}
									checked={!!hasBootstrapStylesheet}
								/>
								{/*
								<Form.Switch
									label={'Figma'}
									onChange={() => setFigmaIframe(!hasFigmaIframe)}
									checked={!!hasFigmaIframe}
								/>
							</>
						)}
					</TableOfContents>
					<div className={isFullWidth ? 'sbdocs sbdocs-wrapper--full-width-stories' : ''}>
						<DocsContainer {...props} />
					</div>
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
					const body = input.replace(/\((.*)\) => {?((.|\n)*)?}?/gm, '$2');
					return format(body).trim().replace(/;$/, '');
				}
				// try to format JSX
				// remove last semicolon added by Prettier
				return format(input).trim().replace(/;$/, '');
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
		i18n.changeLanguage(context.globals?.locale);
		const isDocsMode = context.viewMode === 'docs';
		const isFullWidth = !!context.parameters.full;
		return (
			<I18nextProvider i18n={i18n}>
				{isDocsMode ? (
					<div className={`themes ${isFullWidth ? 'themes--full-width' : ''}`}>
						<div className="theme theme--light">
							<ThemeProvider theme={light}>
								<React.Suspense fallback={null}>
									<Story {...context} />
								</React.Suspense>
							</ThemeProvider>
						</div>
						<div className="theme theme--dark">
							<ThemeProvider theme={dark}>
								<React.Suspense fallback={null}>
									<Story {...context} />
								</React.Suspense>
							</ThemeProvider>
						</div>
					</div>
				) : (
					<ThemeProvider>
						<IconsProvider bundles={['https://unpkg.com/@talend/icons/dist/svg-bundle/all.svg']} />
						<ThemeProvider.GlobalStyle />
						<StorybookGlobalStyle />
						<React.Suspense fallback={null}>
							<Story {...context} />
						</React.Suspense>
					</ThemeProvider>
				)}
			</I18nextProvider>
		);
	},
];
