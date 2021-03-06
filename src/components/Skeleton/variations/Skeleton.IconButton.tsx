import styled from 'styled-components';

import ButtonSkeleton from './Skeleton.Button';

import tokens from '../../../tokens';

const IconButtonSkeleton = styled(ButtonSkeleton)`
	width: 3rem;
	border-radius: ${tokens.radii.roundedRadius};
`;

export default IconButtonSkeleton;
