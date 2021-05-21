import React from 'react';
import { useCopyToClipboard } from 'react-use';
import Button from '../../../Button';
import InputGroup from '../InputGroup';
import Text from './Input.Text';
import { InputProps } from './Input';

const InputCopy = React.forwardRef<HTMLInputElement, InputProps>(
	({ label, value, disabled, readOnly, ...rest }, ref) => {
		const [text, setText] = React.useState(value);
		const [state, copyToClipboard] = useCopyToClipboard();

		return (
			<InputGroup
				label={label}
				suffix={
					!readOnly && (
						<Button.Icon
							icon="talend-files-o"
							onClick={() => copyToClipboard(text)}
							disabled={disabled}
						>
							Copy to clipboard
						</Button.Icon>
					)
				}
				readOnly={!disabled}
				disabled={disabled}
				hasError={state.error}
				hasSuccess={state.value}
				description={state.error ? state.error.message : state.value && 'Copied to clipboard'}
			>
				<Text
					label="Copy to clipboard"
					value={text}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
					{...rest}
					ref={ref}
				/>
			</InputGroup>
		);
	},
);

export default InputCopy;
