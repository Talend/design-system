import React from 'react';
import styled from 'styled-components';

import Label from '../Label';

import tokens from '../../../tokens';

export type FieldControlProps = { as: string; type: string; multiple: boolean };

export const FieldControl = styled.input`
	padding: ${tokens.space.none} ${tokens.space.s};
	width: 100%;
	color: ${({ theme }) => theme.colors.inputColor};
	font-size: ${tokens.fontSizes.normal};
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	background: ${({ theme }) => theme.colors.inputBackgroundColor};
	border: 1px solid ${({ theme }) => theme.colors.inputBorderColor};
	border-radius: ${tokens.radii.inputBorderRadius};

	${({ as, type, multiple }: FieldControlProps) =>
		['input', 'select'].includes(as) &&
		!['radio', 'checkbox'].includes(type) &&
		!multiple &&
		`height: ${tokens.sizes.xxl};`}

	&::placeholder {
		font-size: ${tokens.fontSizes.normal};
		color: ${({ theme }) => theme.colors.inputPlaceholderColor};
	}

	&:hover {
		border-color: ${({ theme }) => theme.colors.inputHoverBorderColor};
	}

	&:focus {
		border-width: 2px;
		border-color: ${({ theme }) => theme.colors.inputFocusBorderColor};
	}

	&:disabled {
		opacity: ${tokens.opacity.disabled};
		cursor: not-allowed;
	}

	&.c-input--read-only {
		border-color: ${({ theme }) => theme.colors.inputReadOnlyBorderColor};
		background: ${({ theme }) => theme.colors.inputReadOnlyBackgroundColor};
	}
`;

export const FieldLabel = Label;

export const Field = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	min-width: 8rem;
	color: ${({ theme }) => theme.colors.textColor};

	.c-field__label {
		margin-bottom: ${tokens.space.xs};
	}

	.c-field__description {
		margin: ${tokens.space.xs} ${tokens.space.none} ${tokens.space.m};
	}

	.c-field__group--loading {
		.c-field__control {
			padding-right: ${tokens.sizes.xxl};
		}

		.c-field__loading {
			position: absolute;
			top: 0;
			right: 0;
			left: auto;
			width: ${tokens.sizes.xxl};
			height: ${tokens.sizes.xxl};
		}
	}

	.c-field__group--has-warning {
		${FieldControl} {
			border-width: 2px;
			border-color: ${({ theme }) => theme.colors.warningColor[500]};
		}
	}

	.c-field__group--has-error {
		${FieldControl} {
			border-width: 2px;
			border-color: ${({ theme }) => theme.colors.destructiveColor[500]};
		}
	}

	select[multiple] {
		padding: 1rem;
	}

	.field__label,
	.link {
		order: -1;
	}

	.link {
		align-self: flex-end;
		margin-top: -2rem;
		margin-bottom: 0.5rem;
	}
`;

export const InlineStyle = styled.div.attrs<{
	readOnly: boolean;
	checked: boolean;
	disabled: boolean;
}>(({ readOnly, checked, disabled }) => ({
	className: `${readOnly ? 'c-input--read-only' : ''} ${checked ? 'c-input--checked' : ''} ${
		disabled ? 'c-input--disabled' : ''
	}`,
}))`
	margin-top: 0;

	--t-form-color: ${tokens.colors.gray[900]};
	--t-form-background-color: ${tokens.colors.gray[0]};
	--t-form-border-color: ${tokens.colors.gray[500]};
	--t-form-border-color--hover: ${tokens.colors.gray[900]};
	--t-form-border-color--focus: ${tokens.colors.lochmara[500]};
	--t-form-border-color--checked: ${tokens.colors.lochmara[600]};
	--t-form-border-color--disabled: ${tokens.colors.gray[300]};

	--t-form-color--readonly: ${tokens.colors.gray[600]};
	--t-form-background-color--readonly: ${tokens.colors.gray[50]};
	--t-form-border-color--readonly: transparent;

	--t-form-placeholder-color: ${tokens.colors.gray[500]};

	--t-form-radio-background-color: ${tokens.colors.gray[100]};

	--t-form-group-color: ${tokens.colors.gray[700]};
	--t-form-group-background-color: ${tokens.colors.gray[75]};
	--t-form-group-interactive-color: ${tokens.colors.lochmara[600]};
	--t-form-group-interactive-background-color: ${tokens.colors.lochmara[100]};
	--t-form-group-interactive-color--hover: ${tokens.colors.paleCyan[700]};
	--t-form-group-interactive-background-color--hover: ${tokens.colors.paleCyan[200]};
	--t-form-group-interactive-color--active: ${tokens.colors.lochmara[800]};
	--t-form-group-interactive-background-color--active: ${tokens.colors.paleCyan[300]};

	label {
		display: inline-block;
		position: relative;
		padding-left: calc(1.4rem + ${tokens.space.s});
		margin-bottom: ${tokens.space.xs};
		font-size: 1.4rem;
		font-weight: 400;

		&,
		> * {
			line-height: 1.5rem;
			min-height: 1.5rem;
		}
	}

	&.c-input--disabled label {
		opacity: 0.54;
	}

	input {
		margin: 0;
		appearance: none;

		&,
		+ * {
			display: inline-block;
		}

		&,
		&::before,
		&::after,
		+ *::before,
		+ *::after {
			position: absolute;
			top: 0;
			left: 0;
		}

		&::before,
		&::after,
		+ *::before,
		+ *::after {
			content: '';
		}
	}

	+ & {
		margin: 0;
	}

	&.c-input--disabled label {
		opacity: 0.54;
	}

	input:not(:disabled) + span:hover,
	input:focus:not(:disabled) + span {
		&:before {
			box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.inputFocusBorderColor};
		}
	}

	input:focus:not(:disabled) + span {
		// Safari
		outline: 0.3rem solid ${({ theme }) => theme.colors.focusColor[500]};
	}
	input:focus:not(:focus-visible):not(:disabled) + span {
		// Reset for others than Safari
		outline: none;
	}
	input:focus-visible:not(:disabled) + span {
		// For others than Safari
		outline: 0.3rem solid ${({ theme }) => theme.colors.focusColor[500]};
	}

	.c-input--disabled input,
	.c-input--disabled input + *::before,
	.c-input--disabled input + *::after {
		opacity: ${tokens.opacity.disabled};
		cursor: not-allowed;
	}

	&.c-input--read-only input + *::before,
	&.c-input--read-only input + *::after {
		color: ${({ theme }) => theme.colors.inputReadOnlyColor};
		background: ${({ theme }) => theme.colors.inputReadOnlyBackgroundColor};
		border: none;
		box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.inputReadOnlyBorderColor};
	}
`;

export const FieldGroup = styled.div<{ after: React.ReactNode }>`
	position: relative;
	display: inline-flex;
	align-items: center;
	width: 100%;

	${({ after }) =>
		after
			? ` input {
	padding-right: 3.6rem;
  }`
			: ''}

	svg, 
  button {
		position: absolute;
		padding: 0;
		height: ${tokens.sizes.l};
		z-index: ${tokens.zIndices.above};
	}

	svg {
		left: 0;
		margin: ${tokens.space.none} ${tokens.space.s};
		fill: ${tokens.colors.gray[500]};
		pointer-events: none;

		+ input {
			padding-left: 3.6rem;
		}
	}

	button {
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		min-height: auto;
		border: none;

		svg {
			position: static;
		}

		&:hover {
			svg {
				fill: ${({ theme }) => theme.colors.activeColor[500]};
			}
		}
	}

	@media all and (-ms-high-contrast: none) {
		input {
			padding-right: inherit;
		}

		button,
		*::-ms-backdrop,
		button {
			display: none;
		}
	}
`;
