import React from 'react';
import Field, { FieldProps } from '../Field';

export type InputProps = FieldProps & {
	label: string;
	before?: any;
	after?: any;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <Field as="input" ref={ref} {...props} />;
});

export default Input;
