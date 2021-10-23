import React from 'react';
import styled from 'styled-components';
import { useCheckboxState, Checkbox } from 'reakit';

import { CheckboxProps } from './Input.Checkbox';
import tokens from '../../../../tokens';
import { InlineStyle } from '../Field.style';

const SSwitch = styled(InlineStyle)<{ readOnly: boolean; checked: boolean; disabled: boolean }>`
	&& {
		label {
			padding: 0;
		}

		input {
			position: absolute;
			margin-left: -9999px;

			+ * {
				position: relative;
				padding: 0 0 0 calc(1rem + 3.2rem);
				cursor: pointer;
			}

			+ *::before,
			+ *::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				border: none;
				// stylelint-disable-next-line declaration-property-value-disallowed-list
				transition: all 250ms ease-in-out;
				border-radius: 9999px;
			}

			+ *::before {
				width: 3.2rem;
				height: 1.6rem;
				background: ${tokens.colors.gray[75]};
				box-shadow: inset 0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.25);
			}

			+ *::after {
				margin: calc((1.2rem - 0.8rem) / 2);
				width: 1.2rem;
				height: 1.2rem;
				background-color: ${tokens.colors.gray[0]};
			}

			&:disabled {
				+ * {
					opacity: 0.54;
					pointer-events: none;
				}
			}

			&:not(:disabled):hover {
				+ *::before {
					background: ${tokens.colors.gray[200]};
				}
			}
		}

		&.c-input--checked input + *::before {
			background: ${tokens.colors.lochmara[500]};
		}

		&.c-input--checked input + *::after {
			transform: translate(1.5rem, 0);
		}

		&.c-input--checked input:not(:disabled):hover + *::before {
			background: ${tokens.colors.lochmara[600]};
		}

		&.c-input--read-only span:before {
			background: ${({ theme }) => theme.colors.inputReadOnlyBackgroundColor};
			box-shadow: none;
		}

		&.c-input--read-only span:after {
			background: ${({ theme }) => theme.colors.inputBackgroundColor};
		}

		&.c-input--read-only.c-input--checked span:after {
			background: ${({ theme }) => theme.colors.inputColor};
		}
	}
`;

const Switch = React.forwardRef(
	(
		{ id, label, checked, readOnly, disabled, ...rest }: CheckboxProps,
		ref: React.Ref<HTMLInputElement>,
	) => {
		const checkbox = useCheckboxState({ state: checked });

		React.useEffect(() => {
			checkbox.setState(checked);
		}, [checked]);

		return (
			<SSwitch readOnly={!!readOnly} checked={!!checkbox.state} disabled={!!disabled}>
				<label htmlFor={id}>
					{/*
				// @ts-ignore */}
					<Checkbox
						id={id}
						disabled={disabled}
						readOnly={readOnly}
						{...rest}
						{...checkbox}
						ref={ref}
					/>
					<span>{label}</span>
				</label>
			</SSwitch>
		);
	},
);

export default Switch;
