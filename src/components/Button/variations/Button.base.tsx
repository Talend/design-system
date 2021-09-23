import React from 'react';
import ButtonBase, { ButtonProps } from '../private/ButtonPrimitive';

const Button = React.forwardRef((props: Omit<ButtonProps, 'variant'>, ref: React.Ref<any>) => {
	return <ButtonBase variant="default" {...props} ref={ref} />;
});

Button.displayName = 'Button.Base';

export default Button;
