import React from 'react';
import Input, { InputProps } from './Input';

function Number(props: InputProps) {
	return <Input {...props} type="number" />;
}

export default Number;
