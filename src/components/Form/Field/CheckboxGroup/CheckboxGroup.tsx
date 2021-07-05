import React from 'react';
import { useCheckboxState, Checkbox as ReakitCheckbox } from 'reakit/Checkbox';

import Fieldset from '../../Fieldset';
import Checkbox from '../Input/Input.Checkbox';

export type CheckboxGroupProps = {
	defaultValues?: string[];
	label: string;
	required?: boolean;
	disabled?: boolean;
	readOnly?: boolean;
	values?: string[];
};

const CheckboxGroup = React.forwardRef(
	(
		{
			defaultValues,
			disabled,
			label,
			readOnly,
			values = [],
			required,
			...rest
		}: CheckboxGroupProps,
		ref,
	) => {
		const checkbox = useCheckboxState({ state: defaultValues });
		return (
			values && (
				// @ts-ignore
				<Fieldset legend={`${label}${required ? '*' : ''}`} {...rest} ref={ref}>
					{
						// @ts-ignore
						values.map((v: string) => (
							// @ts-ignore
							<ReakitCheckbox
								as={Checkbox}
								{...checkbox}
								label={v}
								value={v}
								disabled={disabled}
								readOnly={readOnly}
							/>
						))
					}
				</Fieldset>
			)
		);
	},
);

export default CheckboxGroup;
