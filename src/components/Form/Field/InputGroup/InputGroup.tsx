import React from 'react';
import { isElement } from 'react-is';

import * as S from './InputGroup.style';

export type InputGroupProps = React.PropsWithChildren<any> & {
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
};

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
	({ label, prefix, suffix, children }, ref) => {
		const fieldRef = React.useRef<HTMLInputElement>(ref);
		const labelId = `input-group--${Date.now()}`;
		function focusField() {
			return fieldRef.current?.focus();
		}
		return (
			<S.InputGroup
				className={`input-group ${prefix ? 'input-group--has-prefix' : ''} ${
					suffix ? 'input-group--has-suffix' : ''
				}`}
				aria-labelledby={labelId}
			>
				<S.InputGroupLabel id={labelId} onClick={focusField}>
					{label}
				</S.InputGroupLabel>
				<S.InputGroupRow>
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
			</S.InputGroup>
		);
	},
);

export default InputGroup;