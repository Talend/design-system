import { style, styleVariants } from '@vanilla-extract/css';
import tokens from '../../tokens';
import theme from '../../themes/default.theme.css';

export const clickableBase = style({
	position: 'relative',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontFamily: tokens.fonts.sansSerif,
	background: tokens.colors.transparent,
	border: 'none',
	cursor: 'pointer',

	selectors: {
		// [a11y] increase the clickable area
		'&:after': {
			content: '',
			position: 'absolute',
			inset: `-1 * ${tokens.space.xs}`,
			borderRadius: tokens.radii.rectRadius,
		},
	},
});

const baseHoverStyles = {
	color: theme.colors.textColor,
	background: `var(--t-button-background-color)`,
	borderColor: `var(--t-button-border-color)`,
	textDecoration: 'none',
};

const noOpacity = {
	opacity: tokens.opacity.disabled,
};

const defaultButton = style([
	clickableBase,
	{
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: `${tokens.space.none} ${tokens.space.m}`,
		minHeight: tokens.sizes.xxl,
		border: tokens.borders.normal,
		borderRadius: tokens.radii.rectRadius,
		transition: tokens.transitions.fast,

		selectors: {
			'&:hover': {
				...baseHoverStyles,
			},
			'&:focus': {
				...baseHoverStyles,
			},
			'&[aria-busy="true"]': {
				...noOpacity,
				cursor: 'progress',
			},
			'&[aria-disabled="true"]': {
				...noOpacity,
				cursor: 'not-allowed',
			},
		},
	},
]);

export const buttonVariant = styleVariants({
	default: [defaultButton],
	primary: [
		defaultButton,
		{
			color: theme.colors.buttonPrimaryColor,
			backgroundColor: theme.colors.buttonPrimaryBackgroundColor,
			borderColor: theme.colors.buttonPrimaryBackgroundColor,

			selectors: {
				'&:hover, &:focus': {
					color: theme.colors.buttonPrimaryColor,
					backgroundColor: theme.colors.buttonPrimaryHoverBackgroundColor,
					borderColor: theme.colors.buttonPrimaryHoverBackgroundColor,
				},
				'&:active': {
					color: theme.colors.buttonPrimaryColor,
					backgroundColor: theme.colors.buttonPrimaryActiveBackgroundColor,
					borderColor: theme.colors.buttonPrimaryActiveBackgroundColor,
				},
			},
		},
	],
	secondary: [
		defaultButton,
		{
			color: theme.colors.buttonPrimaryBackgroundColor,
			backgroundColor: theme.colors.buttonSecondaryBackgroundColor,
			borderColor: theme.colors.buttonPrimaryBackgroundColor,

			selectors: {
				'&:hover, &:focus': {
					backgroundColor: theme.colors.buttonSecondaryHoverBackgroundColor,
					color: theme.colors.buttonPrimaryHoverBackgroundColor,
					borderColor: theme.colors.buttonPrimaryHoverBackgroundColor,
				},
				'&:active': {
					backgroundColor: theme.colors.buttonSecondaryActiveBackgroundColor,
					color: theme.colors.buttonPrimaryHoverBackgroundColor,
					borderColor: theme.colors.buttonPrimaryActiveBackgroundColor,
				},
			},
		},
	],
	tertiary: [
		defaultButton,
		{
			color: theme.colors.buttonPrimaryBackgroundColor,
			backgroundColor: theme.colors.buttonSecondaryBackgroundColor,
			borderColor: tokens.colors.transparent,

			selectors: {
				'&:hover, &:focus': {
					color: theme.colors.buttonPrimaryHoverBackgroundColor,
					backgroundColor: theme.colors.buttonSecondaryHoverBackgroundColor,
					borderColor: tokens.colors.transparent,
				},
				'&:active': {
					color: theme.colors.buttonPrimaryHoverBackgroundColor,
					backgroundColor: theme.colors.buttonSecondaryActiveBackgroundColor,
					borderColor: tokens.colors.transparent,
				},
			},
		},
	],
	destructive: [
		defaultButton,
		{
			color: theme.colors.buttonPrimaryColor,
			backgroundColor: theme.colors.buttonDestructiveBackgroundColor,
			borderColor: theme.colors.buttonDestructiveBackgroundColor,

			selectors: {
				'&:hover, &:focus': {
					color: theme.colors.buttonPrimaryColor,
					backgroundColor: theme.colors.buttonDestructiveHoverBackgroundColor,
					borderColor: theme.colors.buttonDestructiveHoverBackgroundColor,
				},
				'&:active': {
					color: theme.colors.buttonPrimaryColor,
					backgroundColor: theme.colors.buttonDestructiveActiveBackgroundColor,
					borderColor: theme.colors.buttonDestructiveActiveBackgroundColor,
				},
			},
		},
	],
	icon: [
		defaultButton,
		{
			color: theme.colors.buttonPrimaryBackgroundColor,
			backgroundColor: theme.colors.buttonSecondaryBackgroundColor,
			borderColor: theme.colors.buttonPrimaryBackgroundColor,
			padding: tokens.space.xs,
			minHeight: 'unset',
			borderRadius: tokens.radii.circleRadius,

			selectors: {
				'&:hover, &:focus': {
					backgroundColor: tokens.colors.transparent,
					color: theme.colors.buttonPrimaryHoverBackgroundColor,
					borderColor: theme.colors.buttonPrimaryHoverBackgroundColor,
				},
				'&:active': {
					backgroundColor: tokens.colors.transparent,
					color: theme.colors.buttonPrimaryHoverBackgroundColor,
					borderColor: theme.colors.buttonPrimaryActiveBackgroundColor,
				},
			},
		},
	],
});

export const smallButton = style({
	minHeight: tokens.sizes.xl,
	padding: `${tokens.space.none} ${tokens.space.s}`,
});

export const buttonWithText = style({
	selectors: {
		[`${smallButton} &`]: {
			padding: 0,
		},
	},
});

export const loading = style({
	margin: 0,
	selectors: {
		[`${smallButton} &`]: {
			marginLeft: tokens.space.xs,
		},
	},
});

export const icon = style({
	flexGrow: 0,
	flexShrink: 0,
	height: tokens.sizes.l,
	maxWidth: '100%',
	margin: 0,
	selectors: {
		[`${smallButton} &`]: {
			marginLeft: tokens.space.xs,
		},
	},
});

export const iconSmall = style([
	icon,
	{
		maxHeight: tokens.sizes.s,
		maxWidth: tokens.sizes.s,
	},
]);

export const text = style({
	flex: 1,
	display: 'inline-flex',
	alignItems: 'center',
	selectors: {
		[`${loading} +&`]: {
			marginLeft: tokens.space.s,
		},
		[`${icon} +&`]: {
			marginLeft: tokens.space.s,
		},
	},
});

export const textHidden = style({
	border: 0,
	clip: 'rect(0 0 0 0)',
	height: '1px',
	margin: '-1px',
	overflow: 'hidden',
	padding: 0,
	position: 'absolute',
	whiteSpace: 'nowrap',
	width: '1px',
});
