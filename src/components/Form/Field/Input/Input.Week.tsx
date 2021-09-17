import React from 'react';
import InputBase, { InputProps } from './InputBase';

const Week = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <InputBase {...props} type="week" ref={ref} />;
});

export default Week;
