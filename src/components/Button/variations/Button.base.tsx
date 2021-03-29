import React from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '../Button';
import tokens from '../../../tokens';

const ButtonBase: React.FC<ButtonProps> = styled(Button)`
	padding: ${tokens.space.none} ${tokens.space.m};
	min-height: ${tokens.sizes.xxl};
	border: ${tokens.borders.normal};
	border-radius: ${tokens.radii.rectRadius};
	transition: ${tokens.transitions.fast};
	color: var(--button-color, ${({ theme }) => theme.colors?.textColor});
	background: var(--button-background-color);
	border-color: var(--button-border-color);

	&[aria-busy='true'],
	&[aria-disabled='true'] {
		opacity: ${tokens.opacity.disabled};
	}

	&[aria-busy='true'] {
		cursor: progress;
	}

	&[aria-disabled='true'] {
		cursor: not-allowed;
	}

	&.btn--small {
		min-height: ${tokens.sizes.xl};

		.btn__loading,
		.btn__icon {
			+ .btn__text {
				margin-left: ${tokens.space.xs};
			}
		}

		&.btn--has-text {
			padding: ${tokens.space.none} ${tokens.space.s};
		}
	}
`;

export default ButtonBase;
