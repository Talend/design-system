import React from 'react';
import { useRadioState, Radio as ReakitRadio, RadioGroup as ReakitRadioGroup } from 'reakit';

import Fieldset from '../../Fieldset';
import Radio from '../Input/Input.Radio';

const RadioGroup = React.forwardRef(({ label, values, disabled, defaultValue, ...rest }, ref) => {
	const radio = useRadioState({ state: defaultValue });
	return (
		values && (
			<ReakitRadioGroup as={Fieldset} legend={label} {...radio} {...rest} ref={ref}>
				{values.map(value => (
					<ReakitRadio as={Radio} {...radio} label={value} disabled={disabled} value={value} />
				))}
			</ReakitRadioGroup>
		)
	);
});

export default RadioGroup;
