import React from 'react';
import InputBase, { InputProps } from './InputBase';

const Email = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <InputBase {...props} type="email" ref={ref} />;
});

export default Email;
