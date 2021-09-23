import React from 'react';

import ButtonPrimitive, { ButtonProps } from './private/ButtonPrimitive';
import ButtonPrimary from './variations/Button.primary';
import ButtonSecondary from './variations/Button.secondary';
import ButtonDestructive from './variations/Button.destructive';
import ButtonTertiary from './variations/Button.tertiary';
import ButtonIcon from './variations/Button.icon';

function Button(props: ButtonProps) {
	return <ButtonPrimitive {...props} />;
}

Button.Primary = ButtonPrimary;
Button.Secondary = ButtonSecondary;
Button.Tertiary = ButtonTertiary;
Button.Destructive = ButtonDestructive;
Button.Icon = ButtonIcon;

export default Button;
