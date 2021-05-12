import React from 'react';
import { isElement } from 'react-is';
import classnames from 'classnames';

import InlineMessage from '../../../InlineMessage';

import * as S from './InputGroup.style';

export type InputGroupProps = React.ReactNode & {
	label: string;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	required?: boolean;
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
			hasError,
			hasWarning,
			hasSuccess,
			hasInformation,
			description,
			children,
		},
		ref,
	) => {
		// @ts-ignore
		const fieldRef = React.useRef<HTMLInputElement>(ref);
		const labelId = `input-group--${Date.now()}`;
		function focusField() {
			return fieldRef.current?.focus();
		}

		const Description = () => {
			if (hasError) {
				return <InlineMessage.Destructive small description={description} />;
			}
			if (hasWarning) {
				return <InlineMessage.Warning small description={description} />;
			}
			if (hasSuccess) {
				return <InlineMessage.Success small description={description} />;
			}
			if (hasInformation) {
				return <InlineMessage.Information small description={description} />;
			}
			return <InlineMessage small description={description} />;
		};

		return (
			<S.InputGroup
				className={classnames('input-group', {
					'input-group--has-prefix': prefix,
					'input-group--has-suffix': suffix,
				})}
			>
				<S.InputGroupLabel id={labelId} onClick={focusField}>
					{label}
					{required && '*'}
				</S.InputGroupLabel>
				<S.InputGroupRow aria-labelledby={labelId}>
					{prefix && (
						<div className="input-group__item input-group__item--prefix">
							{!isElement(prefix) ? <S.SpanPrefix>{prefix}</S.SpanPrefix> : prefix}
						</div>
					)}
					<div className="input-group__item input-group__item--input">
						{isElement(children) && React.cloneElement(children, { ref: fieldRef })}
					</div>
					{suffix && (
						<div className="input-group__item input-group__item--suffix">
							{!isElement(suffix) ? <S.SpanSuffix>{suffix}</S.SpanSuffix> : suffix}
						</div>
					)}
				</S.InputGroupRow>
				{description && <Description />}
			</S.InputGroup>
		);
	},
);

export default InputGroup;
