import React from 'react';

import * as S from './Buttons.style';

type ButtonsProps = React.HTMLAttributes<HTMLDivElement>;

const Buttons = React.forwardRef(
	({ children, ...rest }: ButtonsProps, ref: React.Ref<HTMLDivElement>) => {
		return (
			<S.Buttons className="c-form__buttons" {...rest} ref={ref}>
				{children}
			</S.Buttons>
		);
	},
);

export default Buttons;
