import React, { useEffect, useRef } from 'react';
import InputBase, { InputProps } from './InputBase';

import useRevealPassword from './hooks/useRevealPassword';

const Password = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { currentType, onReset, RevealPasswordButton } = useRevealPassword();
	const isInitialMount = useRef<boolean>(true);
	// @ts-ignore
	const inputRef = useRef<HTMLInputElement | null>(ref);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else if (inputRef.current) {
			inputRef.current.focus();
		}
	});

	return (
		<InputBase
			{...props}
			type={currentType}
			ref={inputRef}
			onBlur={() => {
				inputRef.current = null;
				onReset();
			}}
			// @ts-ignore
			after={<RevealPasswordButton />}
		/>
	);
});

export default Password;
