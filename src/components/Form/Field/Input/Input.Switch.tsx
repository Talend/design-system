import React from 'react';
import { useCheckboxState, Checkbox } from 'reakit';
import { InputProps } from './Input';

import * as S from './Input.Inline.style';

const Switch = React.forwardRef<HTMLInputElement, InputProps>(
	({ id = `switch--${Date.now()}`, label, checked, readOnly, ...rest }, ref) => {
		const checkbox = useCheckboxState({ state: checked });
		return (
			<S.Switch readOnly={readOnly} checked={checkbox.state} ref={ref}>
				<label htmlFor={id}>
					{!readOnly && (
						// @ts-ignore
						<Checkbox id={id} {...rest} {...checkbox} />
					)}
					<span>{label}</span>
				</label>
			</S.Switch>
		);
	},
);

export default Switch;
