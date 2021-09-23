import React from 'react';
import ButtonBase, { ButtonProps } from '../private/ButtonPrimitive';

const ButtonTertiary = React.forwardRef(
	(props: Omit<ButtonProps, 'variant'>, ref: React.Ref<any>) => {
		return <ButtonBase variant="tertiary" {...props} ref={ref} />;
	},
);

ButtonTertiary.displayName = 'Button.Tertiary';

export default ButtonTertiary;
