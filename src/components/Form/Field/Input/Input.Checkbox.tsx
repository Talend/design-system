import React from 'react';
import { Checkbox as ReakitCheckbox, unstable_useId as useId } from 'reakit';
import styled from 'styled-components';

import useCheckboxState from './hooks/useCheckboxState';

import { InputProps } from './Input';

import { InlineStyle } from '../Field.style';

export const SCheckbox = styled(InlineStyle)<{
	readOnly: boolean;
	checked: boolean;
	disabled: boolean;
}>`
	input[type='checkbox'] {
		&::before,
		&::after,
		+ *::before,
		+ *::after {
			width: 1.4rem;
			height: 1.4rem;
		}

		&::before,
		+ *::before {
			background-color: var(--t-form-background-color);
			border: 1px solid var(--t-form-border-color);
			border-radius: 0.2rem;
		}

		&::after,
		+ *::after {
			background-size: contain;
		}

		// Indeterminate Checkboxes style
		&[aria-checked='mixed'] {
			&::before,
			+ *::before {
				background-color: var(--t-form-border-color--focus);
				border-color: var(--t-form-border-color--checked);
			}

			&::after,
			+ *::after {
				margin: 0;
				width: 1.4rem;
				height: 1.4rem;
				background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMTIgMTIiPgogIDxyZWN0IHg9IjMiIHk9IjUiIHdpZHRoPSI2IiBoZWlnaHQ9IjIiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K');
			}
		}

		&[aria-checked='true'] {
			&::before,
			+ *::before {
				background-color: var(--t-form-border-color--focus);
				border-color: var(--t-form-border-color--checked);
			}

			&::after,
			+ *::after {
				margin: 0.1rem;
				width: calc(1.4rem - 2 * 0.1rem);
				height: calc(1.4rem - 2 * 0.1rem);
				background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImZpbGw6IHdoaXRlIj4KCTxwYXRoIGQ9Ik02IDE0TDAgOGwxLjktMS45TDYgMTAuMiAxNC4xIDIgMTYgMy45eiI+PC9wYXRoPgo8L3N2Zz4=');
			}
		}

		&:disabled {
			&::before,
			+ *::before {
				border-color: var(--t-form-border-color--disabled);
			}

			&[aria-checked='mixed']::before,
			&[aria-checked='mixed'] + *::before {
				background-color: var(--t-form-border-color--disabled);
				border-color: var(--t-form-border-color--disabled);
			}

			&[aria-checked='true']::before,
			&[aria-checked='true'] + *::before {
				background-color: var(--t-form-border-color--disabled);
				border-color: var(--t-form-border-color--disabled);
			}
		}
	}

	&.c-input--read-only input {
		&::before,
		+ *::before {
			background-color: var(--t-form-background-color--readonly);
			border-color: var(--t-form-border-color--readonly);
		}
	}

	&.c-input--read-only.c-input--checked input:checked {
		&::before,
		+ *::before {
			background-color: var(--t-form-background-color--readonly);
			border-color: var(--t-form-border-color--readonly);
		}

		&::after,
		+ *::after {
			mask-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImZpbGw6IHdoaXRlIj4KCTxwYXRoIGQ9Ik02IDE0TDAgOGwxLjktMS45TDYgMTAuMiAxNC4xIDIgMTYgMy45eiI+PC9wYXRoPgo8L3N2Zz4=');
			background: var(--t-form-color--readonly);
		}
	}
`;

export type CheckboxProps = InputProps & {
	checked: boolean | 'indeterminate' | (string | number)[];
};

const Checkbox = React.forwardRef(
	(
		{
			id,
			label,
			indeterminate,
			defaultChecked,
			checked,
			readOnly,
			disabled,
			required,
			children,
			...rest
		}: CheckboxProps,
		ref: React.Ref<HTMLInputElement>,
	) => {
		const { id: reakitId } = useId();
		const checkboxId = id || `checkbox--${reakitId}`;
		const checkbox = useCheckboxState({
			state: (indeterminate && 'indeterminate') || defaultChecked || checked,
			readOnly,
		});

		const icon =
			checkbox.state === 'indeterminate' ? (
				<Icon name="talend-minus-circle" />
			) : (
				checkbox.state && <Icon name="talend-check" />
			);

		return (
			<SCheckbox readOnly={!!readOnly} checked={!!checkbox.state} disabled={!!disabled}>
				<label htmlFor={checkboxId} style={readOnly ? { pointerEvents: 'none' } : {}}>
					{/*
					// ReakitCheckbox is not based on HTMLInputElement despite working like one
					// @ts-ignore */}
					<ReakitCheckbox
						id={checkboxId}
						disabled={disabled}
						readOnly={readOnly}
						required={required}
						{...rest}
						{...checkbox}
						ref={ref}
					/>
					<span>
						{label || children}
						{required && '*'}
					</span>
				</label>
			</SCheckbox>
		);
	},
);

export default Checkbox;
