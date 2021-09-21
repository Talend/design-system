import React from 'react';
import ButtonBase, { ButtonProps } from '../Button';

const ButtonDestructive = React.forwardRef(
	(props: Omit<ButtonProps, 'variant'>, ref: React.Ref<any>) => {
		return <ButtonBase variant="destructive" {...props} ref={ref} />;
	},
);

ButtonDestructive.displayName = 'Button.Destructive';

export default ButtonDestructive;
