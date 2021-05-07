import React from 'react';
import { Checkbox as ReakitCheckbox, useCheckboxState } from 'reakit';
import * as S from './Input.Inline.style';
import { Icon } from '../../../Icon/Icon';

export type CheckboxProps = HTMLInputElement & {
	label: string;
};

const Checkbox = ({
	id = `checkbox--${Date.now()}`,
	label,
	indeterminate,
	checked,
	readOnly,
	...rest
}: CheckboxProps) => {
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
						<ReakitCheckbox id={id} {...rest} {...checkbox} />
					</>
				)}
				<span>{label}</span>
				{icon}
			</label>
		</S.Checkbox>
	);
};

export default Checkbox;
