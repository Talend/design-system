import styled from 'styled-components';
import tokens from '../../tokens';

export const Status = styled.span.attrs({
	className: 'status',
})`
	font-weight: ${tokens.fontWeights.semiBold};
	color: var(--t-status-color);
`;
