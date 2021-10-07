import React, { useEffect, useRef } from 'react';
import Input, { InputProps } from './Input';

import useRevealPassword from './hooks/useRevealPassword';

const Password = React.forwardRef<React.InputHTMLAttributes<HTMLInputElement>, InputProps>(
	(props, ref) => {
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
			<Input
				{...props}
				type={currentType}
				ref={inputRef}
				onBlur={event => {
					if (props.onBlur) {
						props.onBlur(event);
					}
					inputRef.current = null;
					onReset();
				}}
				// @ts-ignore
				after={<RevealPasswordButton />}
			/>
		);
	},
);

export default Password;
