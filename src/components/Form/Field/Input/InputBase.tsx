import React from 'react';
import Field, { FieldProps } from '../Field';

export type InputProps = FieldProps;

const InputBase = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => {
	return <Field {...props} as="input" ref={ref} />;
});

export default InputBase;
