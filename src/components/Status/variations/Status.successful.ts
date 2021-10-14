import React from 'react';
import i18n from 'i18next';
import styled from 'styled-components';
import Status from '../Status';

const StyledStatus = styled(Status).attrs({
	icon: 'talend-check-circle',
	className: 'status--successful',
	label: i18n.t('SUCCESSFUL', 'Successful'),
})`
	--t-status-color: ${({ theme }) => theme.colors?.statusSuccessColor};
`;

export default React.memo(StyledStatus);
