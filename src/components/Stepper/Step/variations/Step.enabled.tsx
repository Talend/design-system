import React from 'react';
import styled from 'styled-components';
import Step from '../Step';
import tokens from '../../../../tokens';

const StepEnabled = styled(Step).attrs({ className: 'step--enabled' })`
	.step__icon {
		display: block;
		height: ${tokens.space.l};
		width: ${tokens.space.l};
		background: radial-gradient(
			${tokens.sizes.s} ${tokens.sizes.s} at ${tokens.space.s} ${tokens.space.s},
			${({ theme }) => theme.colors?.activeColor[100]} 50%,
			transparent 50%
		);
	}
`;

export default React.memo(StepEnabled);
