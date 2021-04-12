import React from 'react';
import styled from 'styled-components';
import Step from '../Step';
import tokens from '../../../../tokens';

const size = 2;
const gap = 0.8;

const StepEnabled = styled(Step).attrs({ className: 'step--enabled' })`
	.step__icon {
		display: block;
		height: ${size}rem;
		width: ${size}rem;
		background: radial-gradient(
				${size - gap}rem ${size - gap}rem at ${size / 2}rem ${size / 2}rem,
				${tokens.colors.gray[0]} 50%,
				transparent 50%
			),
			radial-gradient(
				${size}rem ${size}rem at ${size / 2}rem ${size / 2}rem,
				${tokens.colors.lochmara[500]} 50%,
				transparent 50%
			);
	}
`;

export default React.memo(StepEnabled);
