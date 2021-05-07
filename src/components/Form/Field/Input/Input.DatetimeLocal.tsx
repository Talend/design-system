import React from 'react';
import Input, { InputProps } from './Input';

function DatetimeLocal(props: InputProps) {
	return <Input {...props} type="datetime-local" />;
}

export default DatetimeLocal;
