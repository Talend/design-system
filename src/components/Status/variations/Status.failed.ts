import React from 'react';
import i18n from 'i18next';
import styled from 'styled-components';
import Status from '../Status';

const StyledStatus = styled(Status).attrs({
	icon: 'talend-error',
	className: 'status--failed',
	label: i18n.t('FAILED', 'Failed'),
})`
	--t-status-color: ${({ theme }) => theme.colors?.statusFailedColor};
`;

export default React.memo(StyledStatus);
