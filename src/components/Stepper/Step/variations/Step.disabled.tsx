import React from 'react';
import styled from 'styled-components';
import Step from '../Step';
import tokens from '../../../../tokens';

const size = 2;

const StepDisabled = styled(Step).attrs({ className: 'step--disabled' })`
	.step__index,
	.step__title {
		color: ${tokens.colors.gray[900]};
		opacity: ${tokens.opacity.disabled};
	}

	.step__icon {
		display: block;
		height: ${size}rem;
		width: ${size}rem;
		background: radial-gradient(
			${size}rem ${size}rem at ${size / 2}rem ${size / 2}rem,
			${tokens.colors.gray[100]} 50%,
			transparent 50%
		);
	}
`;

export default React.memo(StepDisabled);
