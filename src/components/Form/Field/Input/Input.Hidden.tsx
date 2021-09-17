import React from 'react';
import InputBase, { InputProps } from './InputBase';

const Hidden = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <InputBase {...props} type="hidden" ref={ref} />;
});

export default Hidden;
