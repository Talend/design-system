import React from 'react';
import { StyledProps } from 'styled-components';

import Loading from '../../Loading';
import InlineMessage from '../../InlineMessage';

import * as S from './Field.style';

export type FieldProps = StyledProps<any> & {
	label?: string;
	before?: React.ReactNode;
	after?: React.ReactNode;
	loading: boolean;
	errorMessage?: string;
	required: boolean;
};

const Field = React.forwardRef<React.ReactNode, FieldProps>(
	(
		{
			as = 'input',
			className = '',
			label,
			before,
			after,
			loading,
			errorMessage,
			required,
			disabled,
			...rest
		},
		ref,
	) => {
		const { multiple, type } = rest;
		const inline = ['checkbox', 'radio'].includes(type);

		const Label = () => (
			<S.FieldLabel className="field__label" htmlFor={label} disabled={disabled}>
				{label}
				{required && '*'}
			</S.FieldLabel>
		);

		return (
			<S.Field className={`field ${typeof as === 'string' ? `field--${as}` : ''}`}>
				{!inline && label && <Label />}
				<S.FieldGroup
					className={`field__group ${typeof as === 'string' ? `field__group--${as}` : ''} ${
						multiple ? 'field__group--multiple' : ''
					} ${loading ? 'field__group--loading' : ''} ${
						errorMessage ? 'field__group--has-error' : ''
					}`}
					after={after}
				>
					{before}
					<S.FieldControl
						{...rest}
						as={as}
						id={label}
						className={`${className} field__control ${
							typeof as === 'string' ? `field__control--${as}` : ''
						}`}
						disabled={disabled}
						ref={ref}
					/>
					{loading && <Loading className="field__loading" />}
					{after}
				</S.FieldGroup>
				{inline && label && <Label />}
				{errorMessage && <InlineMessage.Destructive small description={errorMessage} />}
			</S.Field>
		);
	},
);

export default Field;
