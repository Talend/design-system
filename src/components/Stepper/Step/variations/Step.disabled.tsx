import React from 'react';
import styled from 'styled-components';
import Step from '../Step';
import tokens from '../../../../tokens';


const StepDisabled = styled(Step).attrs({ className: 'step--disabled' })`
	::before,
	.step__title {
		color: ${tokens.colors.gray[900]};
		opacity: ${tokens.opacity.disabled};
	}

	.step__icon {
		display: block;
		height: ${tokens.space.l};
		width: ${tokens.space.l};
		background: radial-gradient(
			${tokens.space.l} ${tokens.space.l} at ${tokens.space.s} ${tokens.space.s},
			${tokens.colors.gray[100]} 50%,
			transparent 50%
		);
	}
`;

export default React.memo(StepDisabled);
