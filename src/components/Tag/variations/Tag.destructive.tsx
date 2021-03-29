import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag';

const StyledTag = styled(Tag).attrs({
	className: 'tag--destructive',
})`
	--tag-color: ${({ theme }) => theme.colors?.tagDestructiveColor};
	--tag-background-color: ${({ theme }) => theme.colors?.tagDestructiveBackgroundColor};
`;

export default React.memo(StyledTag);
