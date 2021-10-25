import React from 'react';
import styled from 'styled-components';
import { unstable_useId as useId } from 'reakit';

import { InputProps } from './Input';
import { InlineStyle } from '../Field.style';

export const SRadio = styled(InlineStyle)<{
	readOnly: boolean;
	checked: boolean;
	disabled: boolean;
}>`
	input[type='radio'] {
		&::before,
		&::after,
		+ *::before,
		+ *::after {
			transition: 240ms;
			width: 1.4rem;
			height: 1.4rem;
			border-radius: 50%;
		}

		&::before,
		+ *::before {
			transform: scale(0);
			background-color: var(--t-form-background-color);
			z-index: 1;
		}

		&::after,
		+ *::after {
			background-color: var(--t-form-background-color);
			border: 1px solid var(--t-form-border-color);
		}

		&:checked {
			&::before,
			+ *::before {
				transform: scale(0.5);
				background-color: var(--t-form-border-color--focus);
			}

			&::after,
			+ *::after {
				border-color: var(--t-form-border-color--focus);
			}
		}

		&:disabled {
			&:checked::before,
			&:checked + *::before {
				background-color: var(--t-form-border-color--disabled);
			}

			&::after,
			+ *::after,
			&:checked::after,
			&:checked + *::after {
				border-color: var(--t-form-border-color--disabled);
			}
		}
	}

	&.c-input--read-only input[type='radio'] {
		&::after,
		+ *::after {
			background-color: var(--t-form-background-color--readonly);
			border-color: var(--t-form-border-color--readonly);
		}
	}

	&.c-input--read-only.c-input--checked input[type='radio'] {
		&::before,
		+ *::before {
			background-color: var(--t-form-color--readonly);
		}
	}
`;

const Radio = React.forwardRef(
	(
		{
			id,
			label,
			defaultChecked,
			checked,
			readOnly,
			disabled,
			required,
			children,
			...rest
		}: InputProps,
		ref: React.Ref<HTMLInputElement>,
	) => {
		const { id: reakitId } = useId();
		const radioId = `radio--${id || reakitId}`;

		const radioProps: {
			onClick?: (e: MouseEvent) => void;
			onKeyDown?: (e: KeyboardEvent) => void;
		} = {};

		if (readOnly) {
			radioProps.onClick = e => {
				e.preventDefault();
			};
			radioProps.onKeyDown = e => {
				if (e.keyCode === 32) {
					e.preventDefault();
				}
			};
		}

		return (
			<SRadio readOnly={!!readOnly} checked={!!checked} disabled={!!disabled}>
				<label htmlFor={radioId}>
					{/*
					// @ts-ignore */}
					<input
						type="radio"
						id={radioId}
						checked={defaultChecked || checked}
						disabled={disabled}
						readOnly={readOnly}
						{...rest}
						{...radioProps}
						ref={ref}
					/>
					<span>
						{label || children}
						{required && '*'}
					</span>
				</label>
			</SRadio>
		);
	},
);

export default Radio;
