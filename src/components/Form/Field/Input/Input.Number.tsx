import React from 'react';
import InputBase, { InputProps } from './InputBase';

const Number = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <InputBase {...props} type="number" ref={ref} />;
});

export default Number;
