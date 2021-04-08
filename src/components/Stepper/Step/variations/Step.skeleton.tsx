import * as React from 'react';
import styled from 'styled-components';
import Skeleton from '../../../Skeleton';

const StepSkeleton = styled(Skeleton)`
	height: 2rem;
	width: 11.5rem;
`;

export default React.memo(StepSkeleton);
