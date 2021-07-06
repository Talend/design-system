import React from 'react';
import { useCheckboxState, Checkbox as ReakitCheckbox } from 'reakit';

import Fieldset from '../../Fieldset';
import Checkbox from '../Input/Input.Checkbox';

export type CheckboxGroupValues = (string | number)[];

export type CheckboxGroupProps = React.PropsWithRef<any> & {
	label?: string;
	required?: boolean;
	values?: CheckboxGroupValues;
	defaultValues?: CheckboxGroupValues;
	onChange?: (values: CheckboxGroupValues) => void;
	disabled?: boolean;
	readOnly?: boolean;
};

const CheckboxGroup = React.forwardRef<React.ReactElement, CheckboxGroupProps>(
	(
		{
			defaultValues,
			disabled,
			label,
			readOnly,
			values,
			required,
			onChange,
			...rest
		}: CheckboxGroupProps,
		ref,
	) => {
		const checkbox = useCheckboxState({ state: defaultValues });

		React.useEffect(() => {
			if (onChange && Array.isArray(checkbox.state)) {
				onChange(checkbox.state);
			}
		}, [checkbox.state]);

		return (
			values && (
				<Fieldset legend={`${label}${required ? '*' : ''}`} {...rest} ref={ref}>
					{values.map((v: string | number) => (
						// @ts-ignore
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
