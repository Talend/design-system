import React from 'react';
import Input, { InputProps } from './Input';

function Month(props: InputProps) {
	return <Input {...props} type="month" />;
}

export default Month;
