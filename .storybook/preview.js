import React from 'react';
import styled from 'styled-components';
import { useLocalStorage } from 'react-use';
import { addParameters } from '@storybook/react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { BackToTop, TableOfContents } from 'storybook-docs-toc';
import 'focus-outline-manager';

import light, { dark } from '../src/themes';
import ThemeProvider from '../src/components/ThemeProvider';
import { IconsProvider } from '../src/components/IconsProvider';
import Button from '../src/components/Button';
import VisuallyHidden from '../src/components/VisuallyHidden';

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

const ThemeSwitcher = styled(Button)`
	position: fixed;
	top: 5rem;
	left: calc(50% - 50rem);
	transform: translateX(-110%);
	border-radius: 9999rem;
`;

const hasThemeSwitcher = ({ kind }) =>
	kind.startsWith('Components') || kind.startsWith('Templates') || kind.startsWith('Pages');

addParameters({
	docs: {
		container: props => {
			const [theme, setTheme] = useLocalStorage('coral-theme', light);
			return (
				<ThemeProvider theme={theme}>
					<IconsProvider bundles={['https://unpkg.com/@talend/icons/dist/svg-bundle/all.svg']} />
					<ThemeProvider.GlobalStyle />
					<StorybookGlobalStyle />
					<TableOfContents />
					{hasThemeSwitcher(props.context) && (
						<ThemeSwitcher onClick={() => setTheme(theme.id === 'light' ? dark : light)}>
							<VisuallyHidden>Toggle</VisuallyHidden> Mode {theme.id === 'light' ? '☀️' : '🌙'}
						</ThemeSwitcher>
					)}
					<DocsContainer {...props} />
					<BackToTop />
				</ThemeProvider>
			);
		},
	},
});
