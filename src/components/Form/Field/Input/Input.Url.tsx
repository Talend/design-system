import React from 'react';
import Input, { InputProps } from './Input';

const Url = React.forwardRef(
	(props: InputProps, ref: React.Ref<React.InputHTMLAttributes<HTMLInputElement>>) => {
		return <Input {...props} type="url" ref={ref} />;
	},
);

export default Url;
