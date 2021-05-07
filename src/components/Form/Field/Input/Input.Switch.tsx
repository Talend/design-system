import React from 'react';
import { useCheckboxState, Checkbox } from 'reakit';
import { InputProps } from './Input';

import * as S from './Input.Inline.style';

function Switch({ id = `switch--${Date.now()}`, label, checked, readOnly, ...rest }: InputProps) {
	const checkbox = useCheckboxState({ state: checked });
	return (
		<S.Switch readOnly={readOnly} checked={checkbox.state}>
			<label htmlFor={id}>
				{!readOnly && (
					// @ts-ignore
					<Checkbox id={id} {...rest} {...checkbox} />
				)}
				<span>{label}</span>
			</label>
		</S.Switch>
	);
}

export default Switch;
