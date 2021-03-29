import styled from 'styled-components';
import Button from '../Button';

export const Toggle = styled(Button.Icon)`
	&.btn--is-active {
		--button-color: ${({ theme }) => theme.colors?.buttonPrimaryColor};
		--button-background-color: ${({ theme }) => theme.colors?.buttonPrimaryBackgroundColor};
		--button-border-color: ${({ theme }) => theme.colors?.buttonPrimaryBackgroundColor};

		&:hover,
		&:active {
			--button-color: ${({ theme }) => theme.colors?.buttonPrimaryColor};
		}

		&:hover {
			--button-background-color: ${({ theme }) => theme.colors?.buttonPrimaryHoverBackgroundColor};
			--button-border-color: ${({ theme }) => theme.colors?.buttonPrimaryHoverBackgroundColor};
		}

		&:active {
			--button-background-color: ${({ theme }) => theme.colors?.buttonPrimaryActiveBackgroundColor};
			--button-border-color: ${({ theme }) => theme.colors?.buttonPrimaryActiveBackgroundColor};
		}

		&[aria-disabled='true'] {
			--button-color: ${({ theme }) => theme.colors?.buttonDisabledBackgroundColor};
			--button-background-color: ${({ theme }) => theme.colors?.buttonDisabledColor};
			--button-border-color: ${({ theme }) => theme.colors?.buttonDisabledColor};
		}
	}
`;
