import React from 'react';
import styled from 'styled-components';
import Step from '../Step';
import tokens from '../../../../tokens';


const StepError = styled(Step).attrs({
	icon: 'talend-cross-circle',
	className: 'step--error',
})`
	.step__icon,
	.step__icon > .tc-svg-icon {
		fill: ${tokens.colors.coral[500]};
		height: ${tokens.space.l};
		width: ${tokens.space.l};
	}
`;

export default React.memo(StepError);
