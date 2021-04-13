import React from 'react';
import { IconName } from '@talend/icons';
import { Icon } from '../../Icon/Icon';

import * as S from './Step.style';

export type StepProps = {
	/** The title of the step */
	title: string;
	/** The optionnal class name */
	className?: string;
	/** The icon element to display */
	icon?: IconName;
};

/**
 Steps are the main elements for the stepper.
 * */

const Step: React.FC<StepProps> = ({ icon, title, className = '', ...rest }: StepProps) => {
	return (
		<S.Step role="status" aria-live="polite" {...rest} className={`step ${className || ''}`}>
			<span className="step__title">{title}</span>
			<span className="step__icon">{icon && <Icon name={icon} />}</span>
		</S.Step>
	);
};

export default Step;
