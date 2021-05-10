import React from 'react';
import { Checkbox as ReakitCheckbox, useCheckboxState } from 'reakit';

import { InputProps } from './Input';

import { Icon } from '../../../Icon/Icon';

import * as S from './Input.Inline.style';

const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(
	({ id = `checkbox--${Date.now()}`, label, indeterminate, checked, readOnly, ...rest }, ref) => {
		const checkbox = useCheckboxState({ state: (indeterminate && 'indeterminate') || checked });

		const icon =
			checkbox.state === 'indeterminate' ? (
				<Icon name="talend-minus-circle" />
			) : (
				checkbox.state && <Icon name="talend-check" />
			);

		return (
			<S.Checkbox readOnly={readOnly} checked={checked}>
				<label htmlFor={id}>
					{!readOnly && (
						<>
							{/*
						// @ts-ignore */}
							<ReakitCheckbox id={id} {...rest} {...checkbox} ref={ref} />
						</>
					)}
					<span>{label}</span>
					{icon}
				</label>
			</S.Checkbox>
		);
	},
);

export default Checkbox;
