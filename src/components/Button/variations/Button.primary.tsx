import React from 'react';
import styled from 'styled-components';
import ButtonBase from './Button.base';
import { ButtonProps } from '../Button';

const ButtonPrimary: React.FC<ButtonProps> = styled(ButtonBase).attrs({
	className: 'btn--primary',
})`
	--button-color: ${({ theme }) => theme.colors?.buttonPrimaryColor};
	--button-background-color: ${({ theme }) => theme.colors?.buttonPrimaryBackgroundColor};
	--button-border-color: ${({ theme }) => theme.colors?.buttonPrimaryBackgroundColor};

	&:hover {
		--button-background-color: ${({ theme }) => theme.colors?.buttonPrimaryHoverBackgroundColor};
		--button-border-color: ${({ theme }) => theme.colors?.buttonPrimaryHoverBackgroundColor};
	}

	&:active {
		--button-background-color: ${({ theme }) => theme.colors?.buttonPrimaryActiveBackgroundColor};
		--button-border-color: ${({ theme }) => theme.colors?.buttonPrimaryActiveBackgroundColor};
	}
`;

export default ButtonPrimary;
