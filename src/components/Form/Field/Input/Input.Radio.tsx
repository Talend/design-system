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
	input {
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

		&:hover,
		+ *:hover {
			&,
			&:checked {
				&::after,
				+ *::after {
					border-color: var(--t-form-border-color--focus);
				}
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

	&.c-input--checked input {
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

	&.c-input--read-only span:after {
		background-color: ${({ theme }) => theme.colors.inputReadOnlyBackgroundColor};
		border-color: ${({ theme }) => theme.colors.inputReadOnlyBorderColor};
	}
	&.c-input--read-only.c-input--checked span:before {
		background-color: ${({ theme }) => theme.colors.inputColor};
	}
`;

const Radio = React.forwardRef(
	(
		{ id, label, checked, readOnly, disabled, required, children, ...rest }: InputProps,
		ref: React.Ref<HTMLInputElement>,
	) => {
		const { id: reakitId } = useId();
		const radioId = `radio--${id || reakitId}`;
		return (
			<SRadio readOnly={!!readOnly} checked={!!checked} disabled={!!disabled}>
				<label htmlFor={radioId}>
					{readOnly ? (
						// @ts-ignore
						<input type="hidden" id={radioId} {...rest} ref={ref} />
					) : (
						// @ts-ignore
						<input
							type="radio"
							id={radioId}
							checked={checked}
							disabled={disabled}
							{...rest}
							ref={ref}
						/>
					)}{' '}
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
