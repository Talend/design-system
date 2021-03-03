import React from 'react';
import { addParameters } from '@storybook/react';
import { withTableOfContents } from 'storybook-docs-toc';
import 'focus-outline-manager';

import light, { dark } from '../src/themes';
import ThemeProvider from '../src/components/ThemeProvider';
import { IconsProvider } from '../src/components/IconsProvider';

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Choose a theme to apply to the design system',
		toolbar: {
			icon: 'paintbrush',
			items: [
				{ value: 'light', left: '⚪️', title: 'Default theme' },
				{ value: 'dark', left: '⚫️', title: 'Dark theme' },
			],
		},
	},
};

const getTheme = themeKey => {
	if (themeKey === 'dark') return dark;
	return light;
};

const StorybookGlobalStyle = ThemeProvider.createGlobalStyle(
	({ theme }) => `
	.sb-show-main.sb-main-padded {
		padding: 0;
	}
	
	.sbdocs .sbdocs-preview {
		color: ${theme.colors.textColor};
		background: ${theme.colors.backgroundColor};
	}
	`,
);

const withThemeProvider = (Story, context) => {
	const theme = getTheme(context.globals.theme);
	return (
		<ThemeProvider theme={theme}>
			<IconsProvider bundles={['https://unpkg.com/@talend/icons/dist/svg-bundle/all.svg']} />
			<ThemeProvider.GlobalStyle />
			<StorybookGlobalStyle />
			<Story {...context} />
		</ThemeProvider>
	);
};
export const decorators = [withThemeProvider];

addParameters(withTableOfContents());
