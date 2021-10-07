import React, { useEffect, useRef } from 'react';
import Input, { InputProps } from './Input';

import useRevealPassword from './hooks/useRevealPassword';

const Password = React.forwardRef(
	(props: InputProps, ref: React.Ref<React.InputHTMLAttributes<HTMLInputElement>>) => {
		const { currentType, onReset, RevealPasswordButton } = useRevealPassword();
		const isInitialMount = useRef<boolean>(true);
		// @ts-ignore
		const inputRef = useRef<Ref<InputHTMLAttributes<HTMLInputElement>> | undefined>(ref);

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
