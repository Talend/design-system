import React from 'react';
import { Checkbox as ReakitCheckbox, useCheckboxState, unstable_useId as useId } from 'reakit';

import styled from 'styled-components';

import { InputProps } from './Input';

import { InlineStyle } from '../Field.style';

export const SCheckbox = styled(InlineStyle)<{
	readOnly: boolean;
	checked: boolean;
	disabled: boolean;
}>`
	input {
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
		&[data-checked='1'] {
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

		&:checked {
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

		&:hover,
		+ *:hover {
			&,
			&:checked {
				&::before,
				+ *::before {
					border-color: var(--t-form-border-color--hover);
				}
			}
		}

		&:disabled {
			&::before,
			+ *::before {
				border-color: var(--t-form-border-color--disabled);
			}

			&[data-checked='1']::before,
			&[data-checked='1'] + *::before {
				background-color: var(--t-form-border-color--disabled);
				border-color: var(--t-form-border-color--disabled);
			}

			&:checked::before,
			&:checked + *::before {
				background-color: var(--t-form-border-color--disabled);
				border-color: var(--t-form-border-color--disabled);
			}
		}
	}

	&.c-input--read-only.c-input--checked input {
		&::after,
		+ *::after {
			mask-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImZpbGw6IHdoaXRlIj4KCTxwYXRoIGQ9Ik02IDE0TDAgOGwxLjktMS45TDYgMTAuMiAxNC4xIDIgMTYgMy45eiI+PC9wYXRoPgo8L3N2Zz4=');
			background: black;
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
		const checkboxId = `checkbox--${id || reakitId}`;
		const checkbox = useCheckboxState({ state: (indeterminate && 'indeterminate') || checked });

		React.useEffect(() => {
			checkbox.setState((indeterminate && 'indeterminate') || checked);
		}, [indeterminate, checked]);

		let dataChecked = 0;
		if (indeterminate) dataChecked = 1;
		if (checked) dataChecked = 2;

		return (
			<SCheckbox readOnly={!!readOnly} checked={!!checked} disabled={!!disabled}>
				<label htmlFor={checkboxId}>
					{readOnly ? (
						// @ts-ignore
						<input
							type="hidden"
							id={checkboxId}
							data-checked={dataChecked}
							{...rest}
							{...checkbox}
							ref={ref}
						/>
					) : (
						// @ts-ignore
						<ReakitCheckbox
							id={checkboxId}
							data-checked={dataChecked}
							disabled={disabled}
							{...rest}
							{...checkbox}
							ref={ref}
						/>
					)}
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
