import styled from 'styled-components';

import Skeleton from '../Skeleton';

type ButtonSkeletonTypes = {
	small?: boolean;
};

const ButtonSkeleton = styled(Skeleton).attrs(({ small = false }: ButtonSkeletonTypes) => ({
	className: 'btn btn--skeleton',
	small,
}))<ButtonSkeletonTypes>`
	height: ${({ small }) => (small ? '2rem' : '3rem')};
	width: ${({ small }) => (small ? '8rem' : '10rem')};
`;

export default ButtonSkeleton;
