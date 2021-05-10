import React, { useEffect, useRef } from 'react';
import Input, { InputProps } from './Input';

import useRevealPassword from './hooks/useRevealPassword';

const Password = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { currentType, onReset, RevealPasswordButton } = useRevealPassword();
	const isInitialMount = useRef(true);
	const inputRef = useRef(ref);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else if (inputRef.current) {
			inputRef.current.focus();
		}
	});

	return (
		<Input
			{...props}
			type={currentType}
			ref={inputRef}
			onBlur={() => {
				inputRef.current = null;
				onReset();
			}}
			after={<RevealPasswordButton />}
		/>
	);
});

export default Password;
