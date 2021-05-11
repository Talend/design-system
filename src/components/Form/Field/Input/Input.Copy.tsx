import React from 'react';
import styled from 'styled-components';
import { useCopyToClipboard } from 'react-use';
import Button from '../../../Button';
import InputGroup from '../InputGroup';
import Text from './Input.Text';
import { InputProps } from './Input';

import tokens from '../../../../tokens';

const CopyButton = styled(Button.Icon)`
	&& {
		padding: 0 ${tokens.space.s};
		height: ${tokens.sizes.xxl};
		background: ${({ theme }) => theme.colors.inputGroupInteractiveBackgroundColor};
		border-color: ${({ theme }) => theme.colors.inputBorderColor};
		border-radius: 0 ${tokens.radii.inputBorderRadius} ${tokens.radii.inputBorderRadius} 0;
	}
`;

const InputCopy = React.forwardRef<HTMLInputElement, InputProps>(
	({ label, value, disabled, readOnly, ...rest }, ref) => {
		const [text, setText] = React.useState(value);
		const [state, copyToClipboard] = useCopyToClipboard();

		return (
			<InputGroup
				label={label}
				suffix={
					!readOnly && (
						<CopyButton
							icon="talend-files-o"
							onClick={() => copyToClipboard(text)}
							disabled={disabled}
						>
							Copy to clipboard
						</CopyButton>
					)
				}
			>
				<Text
					label="Copy to clipboard"
					value={text}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
					readOnly={!disabled}
					disabled={disabled}
					{...rest}
					ref={ref}
					hasError={state.error}
					hasSuccess={state.value}
					description={state.error ? state.error.message : state.value && 'Copied to clipboard'}
				/>
			</InputGroup>
		);
	},
);

export default InputCopy;
