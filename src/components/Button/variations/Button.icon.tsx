import React from 'react';
import ButtonBase, { ButtonProps } from '../private/ButtonPrimitive';

export type ButtonIconProps = Omit<ButtonProps, 'variant' | 'hideText' | 'small'>;

const ButtonIcon = React.forwardRef((props: ButtonIconProps, ref: React.Ref<any>) => {
	return <ButtonBase variant="icon" hideText {...props} ref={ref} />;
});

ButtonIcon.displayName = 'Button.Icon';

export default ButtonIcon;
