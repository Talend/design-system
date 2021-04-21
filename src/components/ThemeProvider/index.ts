import { createGlobalStyle } from 'styled-components';

import ThemeSwitcher from './ThemeSwitcher';
import ThemeProvider from './ThemeProvider';
import useGoogleFont from './useGoogleFont';

import { GlobalStyle } from './ThemeProvider.style';

const TalendThemeProvider = ThemeProvider as typeof ThemeProvider & {
	createGlobalStyle: typeof createGlobalStyle;
	GlobalStyle: typeof GlobalStyle;
	ThemeSwitcher: typeof ThemeSwitcher;
	useGoogleFont: typeof useGoogleFont;
};

TalendThemeProvider.createGlobalStyle = createGlobalStyle;
TalendThemeProvider.GlobalStyle = GlobalStyle;
TalendThemeProvider.ThemeSwitcher = ThemeSwitcher;
TalendThemeProvider.useGoogleFont = useGoogleFont;

export default TalendThemeProvider;
