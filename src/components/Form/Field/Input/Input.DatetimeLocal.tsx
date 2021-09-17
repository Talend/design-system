import React from 'react';
import InputBase, { InputProps } from './InputBase';

const DatetimeLocal = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <InputBase {...props} type="datetime-local" ref={ref} />;
});

export default DatetimeLocal;
