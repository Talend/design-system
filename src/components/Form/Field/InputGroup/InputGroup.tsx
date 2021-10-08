import React from 'react';
import { unstable_useId as useId } from 'reakit';
import { isElement } from 'react-is';
import classnames from 'classnames';

import InlineMessage from '../../../InlineMessage';

import * as S from './InputGroup.style';

export type InputGroupProps = HTMLInputElement & {
	label: string;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	hasError?: boolean;
	hasWarning?: boolean;
	hasSuccess?: boolean;
	hasInformation?: boolean;
	description?: string;
};

const InputGroup = React.forwardRef<React.ReactNode, InputGroupProps>(
	(
		{
			label,
			prefix,
			suffix,
			required,
			disabled,
			readOnly,
			hasError,
			hasWarning,
			hasSuccess,
			hasInformation,
			description,
			children,
		}: InputGroupProps,
		ref,
	) => {
		const fieldRef = React.useRef<HTMLInputElement>();
		const { id: reakitId } = useId();
		const labelId = `input-group--${reakitId}`;
		const descriptionId = `input-group__description--${reakitId}`;

		const focusField = () => fieldRef.current?.focus();

		const Description = () => {
			const descriptionProps = {
				small: true,
				description,
			};
			if (hasError) {
				return <InlineMessage.Destructive {...descriptionProps} />;
			}
			if (hasWarning) {
				return <InlineMessage.Warning {...descriptionProps} />;
			}
			if (hasSuccess) {
				return <InlineMessage.Success {...descriptionProps} />;
			}
			if (hasInformation) {
				return <InlineMessage.Information {...descriptionProps} />;
			}
			return <InlineMessage {...descriptionProps} />;
		};

		return (
			<S.InputGroup
				className={classnames('c-input-group', {
					'c-input-group--has-prefix': prefix,
					'c-input-group--has-suffix': suffix,
					'c-input-group--required': required,
					'c-input-group--has-information': hasInformation,
					'c-input-group--has-success': hasSuccess,
					'c-input-group--has-warning': hasWarning,
					'c-input-group--has-error': hasError,
					'c-input-group--disabled': disabled,
					'c-input-group--read-only': readOnly,
				})}
			>
				<S.InputGroupLabel id={labelId} onClick={focusField}>
					{label}
					{required && '*'}
				</S.InputGroupLabel>
				<S.InputGroupRow
					aria-labelledby={labelId}
					aria-describedby={description && descriptionId}
					// @ts-ignore
					ref={ref}
				>
					{prefix && (
						<div className="c-input-group__item c-input-group__item--prefix">
							{!isElement(prefix) ? <S.SpanPrefix>{prefix}</S.SpanPrefix> : prefix}
						</div>
					)}
					<div className="c-input-group__item c-input-group__item--input">
						{isElement(children) &&
							React.cloneElement(children, { disabled, readOnly, ref: fieldRef })}
					</div>
					{suffix && (
						<div className="c-input-group__item c-input-group__item--suffix">
							{!isElement(suffix) ? <S.SpanSuffix>{suffix}</S.SpanSuffix> : suffix}
						</div>
					)}
				</S.InputGroupRow>
				{description && (
					<div id={descriptionId}>
						<div className="c-input--group__description">
							<Description />
						</div>
					</div>
				)}
			</S.InputGroup>
		);
	},
);

export default InputGroup;
