import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { addParameters } from '@storybook/react';
import { withTableOfContents } from 'storybook-docs-toc';
import 'focus-outline-manager';

import light, { dark } from '../src/themes';
import ThemeProvider from '../src/components/ThemeProvider';

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Choose a theme to apply to the design system',
		toolbar: {
			icon: 'mirror',
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

const GlobalStyle = ThemeProvider.createGlobalStyle(
	({ theme }) => `
		${ThemeProvider.globalStyle};
	
		.sbdocs .sbdocs-preview {
			background: ${theme.colors.backgroundColor};
		}
	`,
);

const withThemeProvider = (Story, context) => {
	const theme = getTheme(context.globals.theme);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Story {...context} />
		</ThemeProvider>
	);
};
export const decorators = [withThemeProvider];

addParameters(withTableOfContents());
