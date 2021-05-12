import React from 'react';
import { isElement } from 'react-is';
import classnames from 'classnames';

import * as S from './InputGroup.style';

export type InputGroupProps = React.ReactNode & {
	label: string;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
};

const InputGroup = React.forwardRef<React.ReactNode, InputGroupProps>(
	({ label, prefix, suffix, children }, ref) => {
		// @ts-ignore
		const fieldRef = React.useRef<HTMLInputElement>(ref);
		const labelId = `input-group--${Date.now()}`;
		function focusField() {
			return fieldRef.current?.focus();
		}
		return (
			<S.InputGroup
				className={classnames('input-group', {
					'input-group--has-prefix': prefix,
					'input-group--has-suffix': suffix,
				})}
			>
				<S.InputGroupLabel id={labelId} onClick={focusField}>
					{label}
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
			</S.InputGroup>
		);
	},
);

export default InputGroup;
