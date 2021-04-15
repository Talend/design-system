import React, { PropsWithChildren } from 'react';

import * as S from './Stepper.style';

export type StepperProps = PropsWithChildren<any> & {
	orientation: 'horizontal' | 'vertical';
	loading?: boolean;
};

const Stepper: React.FC<StepperProps> = React.forwardRef(
	({ children, orientation, loading, ...rest }: StepperProps, ref) => {
		const isInProgress = (child: React.ReactNode) =>
			// @ts-ignore
			child.type.type.displayName.includes('InProgress');
		const lastIndex = React.Children.toArray(children)
			.map((child: React.ReactNode) => isInProgress(child))
			.lastIndexOf(true);
		const valuenow = lastIndex + 1;
		const valuemax = React.Children.count(children);
		const ProgressBar =
			orientation === 'vertical' ? S.StepperProgressBar.Vertical : S.StepperProgressBar.Horizontal;
		return (
			<S.Stepper {...rest} ref={ref}>
				<ProgressBar valuenow={valuenow} valuemax={valuemax} />
				<S.StepperSteps>
					{children &&
						React.Children.map(children, (child, index) => (
							// @ts-ignore
							<S.StepperStep key={index} aria-current={isInProgress(child) ? 'step' : null}>
								{React.cloneElement(child, { 'data-index': index + 1 })}
							</S.StepperStep>
						))}
				</S.StepperSteps>
			</S.Stepper>
		);
	},
);

export default Stepper;
