import React from 'react';
import InputBase, { InputProps } from './InputBase';

const Url = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <InputBase {...props} type="url" ref={ref} />;
});

export default Url;
