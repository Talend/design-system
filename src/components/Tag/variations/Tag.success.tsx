import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag';

const StyledTag = styled(Tag).attrs({
	className: 'tag--success',
})`
	--tag-color: ${({ theme }) => theme.colors?.tagSuccessColor};
	--tag-background-color: ${({ theme }) => theme.colors?.tagSuccessBackgroundColor};
`;

export default React.memo(StyledTag);
