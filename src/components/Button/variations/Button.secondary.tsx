import React from 'react';
import styled from 'styled-components';
import ButtonPrimary from './Button.primary';
import { ButtonProps } from '../Button';

const ButtonSecondary: React.FC<ButtonProps> = styled(ButtonPrimary).attrs({
	className: 'btn--secondary',
})`
	--button-color: ${({ theme }) => theme.colors?.buttonPrimaryBackgroundColor};
	--button-background-color: none;

	&:hover {
		--button-color: ${({ theme }) => theme.colors?.buttonPrimaryHoverBackgroundColor};
		--button-background-color: ${({ theme }) => theme.colors?.buttonSecondaryHoverBackgroundColor};
	}

	&:active {
		--button-color: ${({ theme }) => theme.colors?.buttonPrimaryActiveBackgroundColor};
		--button-background-color: ${({ theme }) => theme.colors?.buttonSecondaryActiveBackgroundColor};
	}
`;

export default ButtonSecondary;
