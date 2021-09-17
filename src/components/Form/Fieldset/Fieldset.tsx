import React from 'react';
import * as S from './Fieldset.style';

export type FieldsetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> & {
	legend?: string;
	required?: boolean;
	disabled?: boolean;
	readOnly?: boolean;
};

const Fieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>(
	({ legend, children, required, ...rest }: FieldsetProps, ref) => {
		return (
			<S.Fieldset {...rest} ref={ref}>
				{legend && (
					<S.Legend>
						{legend}
						{required && '*'}
					</S.Legend>
				)}
				{children}
			</S.Fieldset>
		);
	},
);

export default Fieldset;
