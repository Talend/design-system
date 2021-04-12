import React from 'react';
import styled from 'styled-components';
import Step from '../Step';
import tokens from '../../../../tokens';

const size = 2;

const StepValidated = styled(Step).attrs({
	icon: 'talend-check-circle',
	className: 'step--validated',
})`
	.step__icon,
	.step__icon > .tc-svg-icon {
		fill: ${tokens.colors.lochmara[500]};
		height: ${size}rem;
		width: ${size}rem;
	}
`;

export default React.memo(StepValidated);
