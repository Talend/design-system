import React from 'react';
import {
	useRadioState,
	Radio as ReakitRadio,
	RadioGroup as ReakitRadioGroup,
	RadioGroupProps as ReakitRadioGroupProps,
} from 'reakit';

import Fieldset from '../../Fieldset';
import Radio from '../Input/Input.Radio';

export type RadioValue = string | number | undefined;

export type RadioGroupProps = React.PropsWithRef<any> &
	ReakitRadioGroupProps & {
		label?: string;
		values?: RadioValue[];
		value?: RadioValue;
		defaultValue?: RadioValue;
		readOnly: boolean;
		onChange?: (value: RadioValue) => void;
	};

const RadioGroup = React.forwardRef<React.ReactElement, RadioGroupProps>(
	(
		{ label, values, disabled, defaultValue, readOnly, value, onChange, ...rest }: RadioGroupProps,
		ref,
	) => {
		const radio = useRadioState({ state: value || defaultValue });
		React.useEffect(() => {
			if (onChange) {
				onChange(radio.state);
			}
		}, [radio.state]);
		return (
			values && (
				<ReakitRadioGroup as={Fieldset} legend={label} {...radio} {...rest} ref={ref}>
					{values.map((v: RadioValue) => (
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
