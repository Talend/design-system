import React from 'react';
import styled from 'styled-components';
import { tint } from 'polished';
import InlineMessage from '../InlineMessage';

const InlineMessageDestructive = styled(InlineMessage).attrs({
	className: 'c-inline-message--destructive',
	icon: 'talend-error',
})`
	--c-inline-message--icon-color: ${({ theme }) => theme.colors?.destructiveColor[500]};
	--c-inline-message-background: ${({ withBackground, theme }) =>
		withBackground && tint(0.95, theme.colors?.destructiveColor[500])};
	--c-inline-message-box-shadow: ${({ withBackground, theme }) =>
		withBackground && `0 1px 2px ${tint(0.75, theme.colors?.destructiveColor[500])}`};
`;

export default React.memo(InlineMessageDestructive);
