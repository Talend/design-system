import React from 'react';
import Input, { InputProps } from './Input';

function Time(props: InputProps) {
	return <Input {...props} type="time" />;
}

export default Time;
