import React from 'react';

import * as S from './Buttons.style';

type ButtonsProps = React.PropsWithChildren<any>;

const Buttons = React.forwardRef(({ children, ...rest }: ButtonsProps, ref) => {
	return (
		<S.Buttons className="c-form__buttons" {...rest} ref={ref}>
			{children}
		</S.Buttons>
	);
});

export default Buttons;
