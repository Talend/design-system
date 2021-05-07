import React from 'react';
import Input, { InputProps } from './Input';

function Email(props: InputProps) {
	return <Input {...props} type="email" />;
}

export default Email;
