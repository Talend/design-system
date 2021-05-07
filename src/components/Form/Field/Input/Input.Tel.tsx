import React from 'react';
import Input, { InputProps } from './Input';

function Tel(props: InputProps) {
	return <Input {...props} type="tel" />;
}

export default Tel;
