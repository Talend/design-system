import React from 'react';
import styled from 'styled-components';
import { unstable_useId as useId } from 'reakit';

import { InputProps } from './Input';
import { InlineStyle } from '../Field.style';

import tokens from '../../../../tokens';

export const SRadio = styled(InlineStyle)<{
	readOnly: boolean;
	checked: boolean;
	disabled: boolean;
}>`
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
