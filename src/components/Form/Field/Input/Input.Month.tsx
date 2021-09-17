import React from 'react';
import InputBase, { InputProps } from './InputBase';

const Month = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <InputBase {...props} type="month" ref={ref} />;
});

export default Month;
