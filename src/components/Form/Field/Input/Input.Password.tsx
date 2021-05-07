import React, { useEffect, useRef, FormEvent } from 'react';
import Input, { InputProps } from './Input';

import useRevealPassword from './hooks/useRevealPassword';

const Password = (props: InputProps) => {
	const { currentType, onReset, RevealPasswordButton } = useRevealPassword();
	const isInitialMount = useRef(true);
	const inputRef = useRef();

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
};

export default Password;
