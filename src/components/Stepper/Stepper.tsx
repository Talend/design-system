import React, { PropsWithChildren } from 'react';
import * as S from './Stepper.style';

export type StepperProps = PropsWithChildren<any>;

const Stepper: React.FC<StepperProps> = ({ children, ...rest }: StepperProps) => (
	<S.Stepper>
		{React.Children.map(children, (child, index) => [
			<div className="line" />,
			React.cloneElement(child, { index: index + 1, ...rest }),
		])}
	</S.Stepper>
);

export default Stepper;
