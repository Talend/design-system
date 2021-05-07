import React from 'react';
import Field from '../Field';

export type InputProps = HTMLInputElement & {
	label: string;
	before?: any;
	after?: any;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <Field as="input" ref={ref} {...props} />;
});

export default Input;
