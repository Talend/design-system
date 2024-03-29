import React from 'react';
import { isElement } from 'react-is';

import * as S from './Row.style';

type RowProps = React.HTMLAttributes<HTMLDivElement> & {
	disabled?: boolean;
	readOnly?: boolean;
};

const Row = React.forwardRef(
	({ children, disabled, readOnly, ...rest }: RowProps, ref: React.Ref<HTMLDivElement>) => {
		const childrenProps: { disabled?: boolean; readOnly?: boolean } = {};
		if (disabled) childrenProps.disabled = true;
		if (readOnly) childrenProps.readOnly = true;

		return (
			<S.Row className="c-form__row" {...rest} ref={ref}>
				{React.Children.toArray(children).map(child =>
					isElement(child) ? React.cloneElement(child, childrenProps) : child,
				)}
			</S.Row>
		);
	},
);

export default Row;
