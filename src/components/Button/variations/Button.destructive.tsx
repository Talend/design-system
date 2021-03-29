import React from 'react';
import styled from 'styled-components';
import ButtonPrimary from './Button.primary';
import { ButtonProps } from '../Button';

const ButtonDestructive: React.FC<ButtonProps> = styled(ButtonPrimary).attrs({
	className: 'btn--destructive',
})`
	--button-background-color: ${({ theme }) => theme.colors?.buttonDestructiveBackgroundColor};
	--button-border-color: ${({ theme }) => theme.colors?.buttonDestructiveBackgroundColor};

	&:hover {
		--button-background-color: ${({ theme }) =>
			theme.colors?.buttonDestructiveHoverBackgroundColor};
		--button-border-color: ${({ theme }) => theme.colors?.buttonDestructiveHoverBackgroundColor};
	}

	&:active {
		--button-background-color: ${({ theme }) =>
			theme.colors?.buttonDestructiveActiveBackgroundColor};
		--button-border-color: ${({ theme }) => theme.colors?.buttonDestructiveActiveBackgroundColor};
	}
`;

export default ButtonDestructive;
