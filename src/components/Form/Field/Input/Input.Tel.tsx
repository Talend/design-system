import React from 'react';
import InputBase, { InputProps } from './InputBase';

const Tel = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <InputBase {...props} type="tel" ref={ref} />;
});

export default Tel;
