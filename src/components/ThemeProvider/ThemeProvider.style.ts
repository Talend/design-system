import { createGlobalStyle, css } from 'styled-components';
import { hideVisually } from 'polished';

import 'typeface-source-sans-pro';
import 'typeface-inconsolata';
import 'modern-css-reset';

import tokens from '../../tokens';

export const GlobalStyle = createGlobalStyle`  
	html {
		/* 1rem = 10px */
		font-size: 62.5%;
	}
	
	body {
		margin: 0;
		padding: 0;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 14px;
		color: ${({ theme }) => theme?.colors.textColor};
		background: ${({ theme }) => theme?.colors.backgroundColor};
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
	
	.sr-only {
		${hideVisually()}
	}
`;

export const ellipsis = css`
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;
