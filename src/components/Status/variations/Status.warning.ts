import React from 'react';
import styled from 'styled-components';
import Status from '../Status';

const StyledStatus = styled(Status).attrs({
	icon: 'talend-warning',
	className: 'status--warning',
})`
	--t-status-color: ${({ theme }) => theme.colors?.statusWarningColor};
`;

export default React.memo(StyledStatus);
