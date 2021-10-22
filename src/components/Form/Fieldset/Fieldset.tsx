import React from 'react';
import { isElement } from 'react-is';
import * as S from './Fieldset.style';

export type FieldsetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> & {
	legend?: string;
	required?: boolean;
	disabled?: boolean;
	readOnly?: boolean;
};

const Fieldset = React.forwardRef(
	(
		{ legend, children, disabled, readOnly, required, ...rest }: FieldsetProps,
		ref: React.Ref<HTMLFieldSetElement>,
	) => {
		const childrenProps: { disabled?: boolean; readOnly?: boolean } = {};
		if (disabled) childrenProps.disabled = true;
		if (readOnly) childrenProps.readOnly = true;

		return (
			<S.Fieldset className="c-fieldset" {...rest} ref={ref}>
				{legend && (
					<S.Legend className="c-fieldset__legend">
						{legend}
						{required && '*'}
					</S.Legend>
				)}
				{React.Children.toArray(children).map((child, key: number) =>
					isElement(child)
						? React.cloneElement(child, {
								...childrenProps,
								key: `fieldset-${key}`,
						  })
						: child,
				)}
			</S.Fieldset>
		);
	},
);

export default Fieldset;
