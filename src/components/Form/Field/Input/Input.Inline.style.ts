import styled from 'styled-components';
import { shade } from 'polished';

import tokens from '../../../../tokens';

const InlineStyle = styled.div.attrs<{ readOnly: boolean; checked: boolean }>(
	({ readOnly, checked }) => ({
		className: `${readOnly ? 'input--read-only' : ''} ${checked ? 'input--checked' : ''}`,
	}),
)`
	margin-bottom: ${tokens.space.xs};

	input {
		position: absolute;
		margin-left: -9999px;
	}

	span {
		position: relative;
		padding: 0 ${tokens.space.l};
		font-size: ${tokens.fontSizes.normal};
		color: ${({ theme }) => theme.colors.textColor};
		cursor: pointer;
	}

	span:before,
	span:after {
		content: '';
		position: absolute;
		top: 0.3rem;
		left: 0;
		background: ${({ theme }) => theme.colors.inputBackgroundColor};
		transition: ${tokens.transitions.fast};
	}

	span:before {
		width: ${tokens.sizes.s};
		height: ${tokens.sizes.s};
		box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.inputBorderColor};
	}

	span:after {
		margin: calc((${tokens.sizes.s} - ${tokens.sizes.xs}) / 2);
		width: ${tokens.sizes.xs};
		height: ${tokens.sizes.xs};
	}

	input:not(:disabled) + span:hover,
	input:focus:not(:disabled) + span {
		&:before {
			box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.inputFocusBorderColor};
		}
	}

	input:focus:not(:disabled) + span {
		outline: 0.3rem solid ${({ theme }) => theme.colors.focusColor[500]};
	}

	[aria-checked='true'] + span:before,
	[aria-checked='mixed'] + span:before {
		background: ${({ theme }) => theme.colors.activeColor[500]};
		box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.inputCheckedBorderColor};
	}

	input:disabled + span,
	input:disabled + span:before,
	input:disabled + span:after {
		opacity: ${tokens.opacity.disabled};
		cursor: not-allowed;
	}

	&.input--read-only span:before,
	&.input--read-only span:after {
		color: ${({ theme }) => theme.colors.inputReadOnlyColor};
		background: ${({ theme }) => theme.colors.inputReadOnlyBackgroundColor};
		box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.inputReadOnlyBorderColor};
	}
`;

export const Checkbox = styled(InlineStyle)<{ readOnly: boolean; checked: boolean }>`
	span:before,
	span:after {
		border-radius: ${tokens.radii.inputBorderRadius};
	}

	span:after {
		background-color: transparent;
	}

	label {
		position: relative;
	}

	svg {
		position: absolute;
		top: 1px;
		left: 1px;
		width: 1rem;
		cursor: pointer;
	}

	// FIXME
	svg {
		circle {
			display: none;
		}

		path {
			fill: ${({ readOnly, theme }) => (readOnly ? 'currentColor' : theme.colors.backgroundColor)};
		}
	}
`;

export const Radio = styled(InlineStyle)<{ readOnly: boolean; checked: boolean }>`
	span:before,
	span:after {
		border-radius: ${tokens.radii.circleRadius};
	}

	input:checked + span:before {
		background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
	}

	input:checked + span:after {
		background-color: ${({ theme }) => theme.colors.activeColor[500]};
	}

	&.input--read-only.input--checked span:after {
		background-color: ${({ theme }) => theme.colors.inputColor};
	}
`;

export const Switch = styled(InlineStyle)<{ readOnly: boolean; checked: boolean }>`
	span {
		padding-left: calc(1rem + ${tokens.sizes.xxl});
	}

	span:before,
	span:after {
		top: 0;
		border-radius: ${tokens.radii.roundedRadius};
	}

	span:before {
		width: ${tokens.sizes.xxl};
		height: 1.6rem;
		background: ${({ theme }) => theme.colors.inputRadioBackgroundColor};
		box-shadow: inset 0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.25);
	}

	span:after {
		height: 1.2rem;
		width: 1.2rem;
		transition: transform ${tokens.transitions.normal};
	}

	input:not(:disabled) + span:hover:before,
	input:not(:disabled):focus + span:before {
		background: ${({ theme }) => shade(0.25, theme.colors.inputRadioBackgroundColor)};
		box-shadow: inset 0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.25);
	}

	input:not(:disabled):checked + span:hover:before,
	input:not(:disabled):checked:focus + span:before {
		background: ${({ theme }) => shade(0.25, theme.colors.activeColor[500])};
	}

	&.input--checked span:before {
		background: ${({ theme }) => theme.colors.activeColor[500]};
		box-shadow: inset 0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.25);
	}

	&.input--checked span:after {
		transform: translateX(1.5rem);
	}

	&.input--read-only span:before {
		background: ${({ theme }) => theme.colors.inputReadOnlyBackgroundColor};
		box-shadow: none;
	}

	&.input--read-only span:after {
		background: ${({ theme }) => theme.colors.inputBackgroundColor};
	}

	&.input--read-only.input--checked span:after {
		background: ${({ theme }) => theme.colors.inputColor};
	}
`;
