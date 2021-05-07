import React from 'react';
import Input, { InputProps } from './Input';

function Url(props: InputProps) {
	return <Input {...props} type="url" />;
}

export default Url;
