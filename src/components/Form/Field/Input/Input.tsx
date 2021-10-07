import React, { InputHTMLAttributes } from 'react';
import Field, { FieldProps } from '../Field';

export type InputProps = FieldProps;

const Input = React.forwardRef(
	(props: InputProps, ref: React.Ref<InputHTMLAttributes<HTMLInputElement>> | undefined) => {
		return <Field {...props} as="input" ref={ref} />;
	},
);

export default Input;
