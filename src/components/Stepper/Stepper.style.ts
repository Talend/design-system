import styled from 'styled-components';
import tokens from '../../tokens';

// import tokens from '../../../tokens';

export type StepperProps = {};

export const Stepper = styled.ol<StepperProps>`
	width: 20rem;
	display: flex;
	list-style: none;
	align-items: flex-end;
	flex-direction: column;

	> li:first-of-type ~ div.line:not(:last-child) {
		height: 5rem;
		width: 0.2rem;
		margin-right: 0.9rem;
		background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23d2d2d2' stroke-width='4' stroke-dasharray='0%25%2c40%25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
	}

	> li:first-of-type ~ :not(.in-progress ~ *):not(.in-progress):not(li) {
		border-left: 2px solid ${tokens.colors.lochmara[500]};
	}
`;
