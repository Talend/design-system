import React from 'react';
import styled from 'styled-components';
import Status from '../Status';

const StyledStatus = styled(Status).attrs({
	icon: 'talend-error',
	className: 'status--failed',
})`
	--t-status-color: ${({ theme }) => theme.colors?.statusFailedColor};
`;

export default React.memo(StyledStatus);
