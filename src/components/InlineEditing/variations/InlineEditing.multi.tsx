import React from 'react';
import styled from 'styled-components';
import InlineEditing, { InlineEditingProps } from '../InlineEditing';

export type InlineEditingMultiProps = InlineEditingProps;


const InlineEditingMulti: React.FC<InlineEditingMultiProps> = styled(InlineEditing).attrs({
	renderAs: 'p',
	mode: 'multi',
})`
	.edit-inline--editing__field  textarea {
		padding: 0;
		padding-right: 4rem;
	}
`;

InlineEditingMulti.displayName = 'InlineEditing.Multi';

export default InlineEditingMulti;
