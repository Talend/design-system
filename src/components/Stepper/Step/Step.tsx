import React, { PropsWithChildren } from 'react';
import { IconName } from '@talend/icons';
import { Icon } from '../../Icon/Icon';

import * as S from './Step.style';

export type StepProps = PropsWithChildren<any> & {
	/** The title of the step */
	title: string;
	/** The index displayed in front of the step */
	index: string;
	/** The icon element to display */
	icon: IconName;
};

/**
 Steps are the main elements for the stepper.
 @link https://inclusive-components.design/ ???
 * */
const Step = React.forwardRef(
	({ icon, index, title, className = '', ...rest }: StepProps, ref) => {
		return (
			<S.Step
				role="status"
				aria-live="polite"
				{...rest}
				className={`step ${className || ''}`}
				ref={ref}
			>
				<span className="step__index">{index}</span>
				<span className="step__title">{title}</span>
				<span className="step__icon">{icon && <Icon name={icon} />}</span>
			</S.Step>
		);
	},
);

export default Step;
