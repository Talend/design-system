import * as React from 'react';
import styled from 'styled-components';
import Step from '../Step';
import tokens from '../../../../tokens';

const size = 2;

const StepEnabled = styled(Step).attrs({
	icon: 'talend-cross-circle',
})(
	() => `
	  .step__icon, .step__icon > svg {
	  		fill: ${tokens.colors.coral[500]};
	  		height: ${size}rem;
	  		width: ${size}rem;
	  	}
 `,
);

export default React.memo(StepEnabled);
