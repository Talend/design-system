import React from 'react';
import { Radio as ReakitRadio } from 'reakit';

import { InputProps } from './Input';

import * as S from './Input.Inline.style';

const Radio = React.forwardRef<HTMLInputElement, InputProps>(
	({ id = `radio--${Date.now()}`, label, checked, readOnly, ...rest }, ref) => (
		<S.Radio readOnly={readOnly} checked={checked}>
			<label htmlFor={id}>
				{!readOnly && (
					// @ts-ignore
					<ReakitRadio id={id} checked={checked} {...rest} ref={ref} />
				)}{' '}
				<span>{label}</span>
			</label>
		</S.Radio>
	),
);

export default Radio;
