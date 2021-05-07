import React from 'react';
import Input, { InputProps } from './Input';

function Week(props: InputProps) {
	return <Input {...props} type="week" />;
}

export default Week;
