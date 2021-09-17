import React from 'react';
import InputBase, { InputProps } from './InputBase';

const Time = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <InputBase {...props} type="time" ref={ref} />;
});

export default Time;
