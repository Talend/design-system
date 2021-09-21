import React from 'react';
import ButtonBase, { ButtonProps } from '../Button';

const ButtonSecondary = React.forwardRef(
	(props: Omit<ButtonProps, 'variant'>, ref: React.Ref<any>) => {
		return <ButtonBase variant="secondary" {...props} ref={ref} />;
	},
);

ButtonSecondary.displayName = 'Button.Secondary';

export default ButtonSecondary;
