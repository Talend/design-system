import React from 'react';
import i18n from 'i18next';
import styled from 'styled-components';
import Status from '../Status';

const StyledStatus = styled(Status).attrs({
	icon: 'talend-block',
	className: 'status--canceled',
	label: i18n.t('CANCELED', 'Canceled'),
})`
	--t-status-color: ${({ theme }) => theme.colors?.statusCanceledColor};
`;

export default React.memo(StyledStatus);
