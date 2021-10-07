import React from 'react';
import Input, { InputProps } from './Input';

const Number = React.forwardRef(
	(props: InputProps, ref: React.Ref<React.InputHTMLAttributes<HTMLInputElement>>) => {
		return <Input {...props} type="number" ref={ref} />;
	},
);

export default Number;
