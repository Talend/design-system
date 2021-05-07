import React from 'react';
import Input, { InputProps } from './Input';

function Text(props: InputProps) {
	return <Input {...props} type="text" />;
}

export default Text;
