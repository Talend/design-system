import React, { PropsWithChildren } from 'react';
import { IconName } from '@talend/icons';
import { Icon } from '../../Icon/Icon';

import * as S from './Stepper.style';

export type StepperProps = PropsWithChildren<any> & {
	// /** The title of the step */
	// title: string;
	// /** The index displayed in front of the step */
	// index: string;
	// /** The icon element to display */
	// icon: IconName;
};

/**
 Steps are the main elements for the stepper.
 @link https://inclusive-components.design/ ???
 * */

const Stepper: React.FC<StepperProps> = ({ children, ...rest }) => {
	return (
		<S.Stepper>
			{React.Children.map(children, (child, index) => {
				return (
					<>
						<div className="line" />
						{React.cloneElement(child, { index: index + 1 })}
					</>
				);
			})}
		</S.Stepper>
	);

	// return (
	// 	<S.Stepper role="status" aria-live="polite" {...rest} className={`step ${className || ''}`}>
	// 		<span className="step__index">{index}</span>
	// 		<span className="step__title">{title}</span>
	// 		<span className="step__icon">{icon && <Icon name={icon} />}</span>
	// 	</S.Stepper>
	// );
};

export default Stepper;

//				<li key={index}>{React.cloneElement(child, { 'data-step-indicator': index + 1 })}</li>
