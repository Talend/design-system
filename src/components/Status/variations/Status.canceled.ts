import React from 'react';
import styled from 'styled-components';
import Status from '../Status';

const StyledStatus = styled(Status).attrs({
	icon: 'talend-block',
	className: 'status--canceled',
})`
	--t-status-color: ${({ theme }) => theme.colors?.statusCanceledColor};
`;

export default React.memo(StyledStatus);
