import React from 'react';
import Input, { InputProps } from './Input';

function Color(props: InputProps) {
	return <Input {...props} type="color" />;
}

export default Color;
