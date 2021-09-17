import React from 'react';
import InputBase, { InputProps } from './InputBase';

const Date = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <InputBase {...props} type="date" ref={ref} />;
});

export default Date;
