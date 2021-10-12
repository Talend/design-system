import React, { useRef } from 'react';
import Input, { InputProps } from './Input';

import useRevealPassword from './hooks/useRevealPassword';

const Password = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => {
	const { currentType, onReset, RevealPasswordButton } = useRevealPassword();
	const inputRef = useRef<HTMLInputElement | null>(null);
	const fromClickRef = useRef<boolean>(false);

	React.useEffect(() => {
		if (fromClickRef.current) {
			inputRef.current?.focus();
			const valueLength = inputRef.current?.value.length || 0;
			inputRef.current?.setSelectionRange(valueLength, valueLength);
		}
	}, [currentType]);

	return (
		<div ref={ref}>
			<Input
				{...props}
				type={currentType}
				ref={inputRef}
				onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
					fromClickRef.current = false;
					onReset();
					if (props.onBlur) {
						props.onBlur(event);
					}
				}}
				// @ts-ignore
				after={
					<RevealPasswordButton
						onClick={() => {
							fromClickRef.current = true;
						}}
					/>
				}
			/>
		</div>
	);
});

export default Password;
