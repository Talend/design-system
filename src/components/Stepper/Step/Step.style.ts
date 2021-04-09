import styled from 'styled-components';

import tokens from '../../../tokens';

export const Step = styled.li`
	display: inline-flex;
	max-width: 20rem;

	.step__index {
		&::after {
			content: '.';
		}
		margin-right: ${tokens.space.xxs};
	}
	.step__title {
		margin-right: ${tokens.space.s};
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;
