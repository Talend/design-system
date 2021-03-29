import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag';

const StyledTag = styled(Tag).attrs({
	className: 'tag--information',
})`
	--tag-color: ${({ theme }) => theme.colors?.tagInformationColor};
	--tag-background-color: ${({ theme }) => theme.colors?.tagInformationBackgroundColor};
`;

export default React.memo(StyledTag);
