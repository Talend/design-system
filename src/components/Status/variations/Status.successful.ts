import React from 'react';
import styled from 'styled-components';
import Status from '../Status';

const StyledStatus = styled(Status).attrs({
	icon: 'talend-check-circle',
	className: 'status--successful',
})`
	--t-status-color: ${({ theme }) => theme.colors?.statusSuccessColor};
`;

export default React.memo(StyledStatus);
