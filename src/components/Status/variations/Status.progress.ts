import React from 'react';
import styled from 'styled-components';
import Status from '../Status';

const StyledStatus = styled(Status).attrs({
	icon: 'talend-dataprep',
	className: 'status--in-progress',
})`
	--t-status-color: ${({ theme }) => theme.colors?.statusInProgressColor};
`;

export default React.memo(StyledStatus);
