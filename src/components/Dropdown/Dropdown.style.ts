import {
	Menu as ReakitMenu,
	MenuButton as ReakitMenuButton,
	MenuItem as ReakitMenuItem,
	MenuSeparator as ReakitMenuSeparator,
} from 'reakit';
import styled from 'styled-components';
import { Icon } from '../Icon';
import tokens from '../../tokens';

export const Button = ReakitMenuButton;

export const ButtonIcon = styled(Icon).attrs({
	className: 'dropdown__icon',
	currentColor: true,
})`
	&.dropdown__icon {
		display: inline-flex;
		margin-left: 1rem;
		height: ${tokens.sizes.xs};
		width: ${tokens.sizes.xs};
		vertical-align: middle;
		transition: transform ${tokens.transitions.fast};

		[aria-expanded='true'] & {
			transform: rotate(-180deg);
		}

		[role='menuitem'] & {
			margin-left: auto;
			transform: rotate(-90deg);
		}

		[role='menuitem'][aria-expanded='true'] & {
			transform: rotate(90deg);
		}
	}
`;

export const Menu = styled(ReakitMenu)`
	z-index: ${tokens.zIndices.dropdown};
`;

export const AnimatedMenu = styled.div`
	max-height: 32rem;
	overflow: auto;
	padding: ${tokens.space.xs} ${tokens.space.none};
	min-width: 15rem;
	max-width: 25rem;
	background: ${({ theme }) => theme.colors.dropdownBackgroundColor};
	border-radius: ${tokens.radii.rectRadius};
	border: 0;
	box-shadow: ${tokens.shadows.above};
	opacity: ${tokens.opacity.transparent};
	transition: opacity ${tokens.transitions.normal};

	[data-enter] & {
		opacity: ${tokens.opacity.opaque};
	}
`;

export const MenuSeparator = styled(ReakitMenuSeparator)`
	margin: 0;
	width: 100%;
	border-left: none;
	border-top: none;
	border-color: ${tokens.colors.gray[75]};
`;

export const MenuItem = styled(ReakitMenuItem)`
	width: 100%;
	display: flex;
	min-height: 3rem;
	padding: 0;
	padding: ${tokens.space.s} ${tokens.space.m};
	color: ${({ theme }) => theme.colors.dropdownColor};
	text-align: start;
	cursor: pointer;
	align-items: center;

	.link__text {
		border: none !important;
	}

	svg.tc-svg-icon.tc-icon {
		margin: 0;
	}

	span.link__text, .btn__icon + span.btn__text {
		margin-left: ${tokens.space.xs};
	}

	&:hover, &:focus {
		color: ${({ theme }) => theme.colors.dropdownColor};
		background-color: ${({ theme }) => theme.colors.dropdownHoverBackgroundColor};
	}

	&:active {
		background-color:  ${({ theme }) => theme.colors.dropdownActiveBackgroundColor};
	}
`;
