import React from 'react';
import classnames from 'classnames';
import { unstable_useId as useId } from 'reakit';

import Loading from '../../Loading';
import VisuallyHidden from '../../VisuallyHidden';
import InlineMessage from '../../InlineMessage';

import * as S from './Field.style';

export type FieldProps = (
	| React.InputHTMLAttributes<HTMLInputElement>
	| React.TextareaHTMLAttributes<HTMLTextAreaElement>
	| React.SelectHTMLAttributes<HTMLSelectElement>
) & {
	as?: React.ElementType;
	label: string;
	before?: React.ReactNode;
	after?: React.ReactNode;
	type?: string | undefined;
	indeterminate?: boolean;
	multiple?: boolean;
	loading?: boolean;
	link?: React.ReactNode;
	hasError?: boolean;
	hasWarning?: boolean;
	hasSuccess?: boolean;
	hasInformation?: boolean;
	hideLabel?: boolean;
	description?: string;
};

const Field = React.forwardRef(
	(
		{
			as = 'input',
			className = '',
			label,
			hideLabel,
			before,
			after,
			id,
			loading,
			link,
			hasError,
			hasWarning,
			hasSuccess,
			hasInformation,
			description,
			required,
			disabled,
			...rest
		}: FieldProps,
		ref: React.Ref<HTMLElement>,
	) => {
		const { id: reakitId } = useId();
		const fieldId = id || `field--${reakitId}`;
		const fieldDescriptionId = `field__description--${id || reakitId}`;
		const { multiple, type = '' } = rest;
		const inline = ['checkbox', 'radio'].includes(type);

		const Label = () => (
			<S.FieldLabel className="c-field__label" htmlFor={fieldId} disabled={!!disabled}>
				{label}
				{required && '*'}
			</S.FieldLabel>
		);

		const WrappedLabel = () => hideLabel ? <VisuallyHidden><Label /></VisuallyHidden> : <Label />;

		const Description = () => {
			const descProps = {
				small: true,
				description,
			};
			if (hasError) {
				return <InlineMessage.Destructive {...descProps} />;
			}
			if (hasWarning) {
				return <InlineMessage.Warning {...descProps} />;
			}
			if (hasSuccess) {
				return <InlineMessage.Success {...descProps} />;
			}
			if (hasInformation) {
				return <InlineMessage.Information {...descProps} />;
			}
			return <InlineMessage {...descProps} />;
		};

		return (
			<S.Field className={`c-field ${typeof as === 'string' ? `c-field--${as}` : ''}`}>
				{!inline && label && <WrappedLabel />}
				<S.FieldGroup
					className={classnames(
						'c-field__group',
						{ [`c-field__group--${as}`]: typeof as === 'string' },
						{
							'c-field__group--multiple': multiple,
							'c-field__group--loading': loading,
							'c-field__group--has-error': hasError,
							'c-field__group--has-warning': hasWarning,
							'c-field__group--has-information': hasInformation,
						},
					)}
					after={after}
				>
					{before}
					<S.FieldControl
						{...rest}
						as={as}
						id={fieldId}
						className={classnames(className, 'c-field__control', {
							[`c-field__control--${as}`]: typeof as === 'string',
							// @ts-ignore
							'c-input--read-only': rest.readOnly,
							// @ts-ignore
							'c-input--checked': rest.checked,
							// @ts-ignore
							'c-input--disabled': rest.disabled,
						})}
						aria-describedby={description && fieldDescriptionId}
						disabled={disabled}
						ref={ref}
					/>
					{loading && <Loading className="c-field__loading" />}
					{after}
				</S.FieldGroup>
				{link}
				{inline && label && <WrappedLabel />}
				{description && (
					<div id={fieldDescriptionId} className="c-field__description">
						<Description />
					</div>
				)}
			</S.Field>
		);
	},
);

export default Field;
