import React from 'react';
import ButtonBase, { ButtonProps } from '../private/ButtonPrimitive';

const ButtonPrimary = React.forwardRef(
	(props: Omit<ButtonProps, 'variant'>, ref: React.Ref<any>) => {
		return <ButtonBase variant="primary" {...props} ref={ref} />;
	},
);

ButtonPrimary.displayName = 'Button.Primary';

export default ButtonPrimary;
