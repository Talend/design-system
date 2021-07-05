import React from 'react';
import {
	useRadioState,
	Radio as ReakitRadio,
	RadioGroup as ReakitRadioGroup,
	RadioGroupProps as ReakitRadioGroupProps,
} from 'reakit';

import Fieldset from '../../Fieldset';
import Radio from '../Input/Input.Radio';

export type RadioGroupProps = ReakitRadioGroupProps & {
	label?: string;
	values?: string[];
	value?: string;
	defaultValue?: string;
	readOnly: boolean;
};

const RadioGroup = React.forwardRef<React.ReactElement, React.PropsWithChildren<any>>(
	// @ts-ignore
	({ label, values, disabled, defaultValue, readOnly, value, ...rest }: RadioGroupProps, ref) => {
		const radio = useRadioState({ state: value || defaultValue });
		return (
			values && (
				// @ts-ignore
				<ReakitRadioGroup as={Fieldset} legend={label} {...radio} {...rest} ref={ref}>
					{values.map(v => (
						// @ts-ignore
						<ReakitRadio
							as={Radio}
							{...radio}
							disabled={disabled}
							label={v}
							readOnly={readOnly}
							value={v}
						/>
					))}
				</ReakitRadioGroup>
			)
		);
	},
);

export default RadioGroup;
