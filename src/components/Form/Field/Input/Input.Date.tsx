import React from 'react';
import Input, { InputProps } from './Input';

function Date(props: InputProps) {
	return <Input {...props} type="date" />;
}

export default Date;
