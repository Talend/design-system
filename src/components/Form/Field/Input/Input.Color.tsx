import React from 'react';
import InputBase, { InputProps } from './InputBase';

const Color = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <InputBase {...props} type="color" ref={ref} />;
});

export default Color;
