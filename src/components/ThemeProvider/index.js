import React, { useContext, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Switch from '../Switch';
import defaultTheme, { dark, light } from '../../themes';
import tokens from '../../tokens';

import './reset';
import Fonts from './fonts';

const GlobalStyle = createGlobalStyle`  
	html {
		/* 1rem = 10px */
		font-size: 62.5%;
	}
	
	body {
		margin: 0;
		padding: 0;
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
		color: ${({ theme }) => theme.colors.textColor};
		background: ${({ theme }) => theme.colors.backgroundColor};
	}

	a {
		text-decoration: none;
	}
	
	.focus-outline-hidden *:focus {
		outline: none;
	}

	::selection {
		color: ${tokens.colors.gray[900]};
		background-color: ${tokens.colors.coral[100]};
	}
`;

const ThemeContext = React.createContext({});

const TalendThemeProvider = ({ theme = defaultTheme, children }) => {
	const [selectedTheme, setSelectedTheme] = useState(theme);
	React.useEffect(() => {
		setSelectedTheme(theme);
	}, [theme]);
	const switchTheme = newTheme => setSelectedTheme(newTheme);
	return (
		<ThemeContext.Provider value={{ switchTheme, theme: selectedTheme }}>
			<Fonts />
			<ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

const ThemeSwitcher = () => {
	const { switchTheme } = useContext(ThemeContext);
	function toggle(event, value) {
		switchTheme(value === light.id ? light : dark);
	}
	return <Switch onChange={toggle} values={[light.id, dark.id]} />;
};

TalendThemeProvider.createGlobalStyle = createGlobalStyle;
TalendThemeProvider.GlobalStyle = GlobalStyle;
TalendThemeProvider.ThemeSwitcher = ThemeSwitcher;

export default TalendThemeProvider;
