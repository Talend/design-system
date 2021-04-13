import React, { PropsWithChildren } from 'react';
import * as S from './Stepper.style';

export type StepperProps = PropsWithChildren<any>;

const Stepper: React.FC<StepperProps> = ({ children, ...rest }: StepperProps) => (
	<S.Stepper {...rest}>
		{children &&
			React.Children.map(children, (child, index) => [
				<div className="stepper__progress-bar" />,
				<li>{React.cloneElement(child, { 'data-index': index + 1 })}</li>,
			])}
	</S.Stepper>
);

export default Stepper;
