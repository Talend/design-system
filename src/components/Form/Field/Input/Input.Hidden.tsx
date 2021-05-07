import React from 'react';
import Input, { InputProps } from './Input';

function Hidden(props: InputProps) {
	return <Input {...props} type="hidden" />;
}

export default Hidden;
