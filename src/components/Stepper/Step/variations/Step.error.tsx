import React from 'react';
import styled from 'styled-components';
import Step from '../Step';
import tokens from '../../../../tokens';

const size = 2;

const StepError = styled(Step).attrs({
	icon: 'talend-cross-circle',
	className: 'step--error',
})`
	.step__icon,
	.step__icon > .tc-svg-icon {
		fill: ${tokens.colors.coral[500]};
		height: ${size}rem;
		width: ${size}rem;
	}
`;

export default React.memo(StepError);
