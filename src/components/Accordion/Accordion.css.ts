import { style } from '@vanilla-extract/css';
import tokens from '../../tokens';
import theme from '../../themes/default.theme.css';

export const accordion = style({
	display: 'flex',
	flexDirection: 'column',
});

export const item = style({
	margin: `${tokens.space.m} 0`,
	minWidth: '25rem',
	border: `1px solid ${theme.colors.accordionBorderColor}`,
	borderRadius: tokens.radii.rectRadius,

	':hover': {
		borderColor: tokens.colors.gray[200],
	},

	':active': {
		borderColor: tokens.colors.gray[300],
	},
});

export const header = style({
	display: 'flex',
	alignItems: 'center',
	padding: tokens.space.m,
	maxHeight: '5rem',
	flex: 1,
	cursor: 'pointer',
	borderRadius: `${tokens.radii.rectRadius} ${tokens.radii.rectRadius} 0 0`,
	background: theme.colors.accordionBackgroundColor,
	selectors: {
		'&.isVisible': {
			borderRadius: tokens.radii.rectRadius,
		},
	},
});

export const arrow = style({
	flex: 0,
	marginLeft: 'auto',
});

const wideScreen = `(min-width: ${tokens.breakpoints.l})`;

export const contents = style({
	padding: 0,
	height: 0,
	borderRadius: `0 0 ${tokens.radii.rectRadius} ${tokens.radii.rectRadius}`,
	transition: `opacity ${tokens.transitions.slow}`,
	opacity: 0,
	maxHeight: '37rem',
	overflow: 'auto',

	selectors: {
		'&[data-enter]': {
			padding: tokens.space.m,
			height: 'auto',
			opacity: 1,
		},
	},

	'@media': {
		[wideScreen]: {
			maxHeight: '37rem',
			overflow: 'auto',
		},
	},
});
