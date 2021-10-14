import React from 'react';
import i18n from 'i18next';
import styled from 'styled-components';
import Status from '../Status';

const StyledStatus = styled(Status).attrs({
	icon: 'talend-warning',
	className: 'status--warning',
	label: i18n.t('WARNING', 'Warning'),
})`
	--t-status-color: ${({ theme }) => theme.colors?.statusWarningColor};
`;

export default React.memo(StyledStatus);
