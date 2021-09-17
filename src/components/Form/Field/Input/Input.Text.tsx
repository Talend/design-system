import React from 'react';
import InputBase, { InputProps } from './InputBase';

const Text = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <InputBase {...props} type="text" ref={ref} />;
});

export default Text;
