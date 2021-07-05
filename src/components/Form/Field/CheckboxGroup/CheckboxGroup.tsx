import React from 'react';
import { useCheckboxState, Checkbox as ReakitCheckbox } from 'reakit';

import Fieldset from '../../Fieldset';
import Checkbox from '../Input/Input.Checkbox';

export type CheckboxGroupProps = {
	label?: string;
	required?: boolean;
	values?: string[];
	defaultValues?: string[];
	disabled?: boolean;
	readOnly?: boolean;
};

const CheckboxGroup = React.forwardRef<React.ReactElement, React.PropsWithChildren<any>>(
	// @ts-ignore
	(
		{ defaultValues, disabled, label, readOnly, values, required, ...rest }: CheckboxGroupProps,
		ref,
	) => {
		const checkbox = useCheckboxState({ state: defaultValues });
		return (
			values && (
				// @ts-ignore
				<Fieldset legend={`${label}${required ? '*' : ''}`} {...rest} ref={ref}>
					{values.map(v => (
						<ReakitCheckbox
							as={Checkbox}
							{...checkbox}
							label={v}
							value={v}
							disabled={disabled}
							readOnly={readOnly}
						/>
					))}
				</Fieldset>
			)
		);
	},
);

export default CheckboxGroup;
