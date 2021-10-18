import React from 'react';
import styled from 'styled-components';
import InlineEditing, { InlineEditingProps } from '../InlineEditing';

export type InlineEditingMultiProps = InlineEditingProps;


const InlineEditingMulti: React.FC<InlineEditingMultiProps> = styled(InlineEditing).attrs({
	className: 'edit-inline--textarea',
	renderAs: 'p',
	mode: 'multi',
})`
	.edit-inline--editing__field__actions {
		padding-top: 1rem;
		height: 2.2rem;
	}

	.edit-inline--editing__field textarea {
		padding: 1rem;
		padding-right: 4rem;
	}

	.edit-inline--static__field__value {
		white-space: inherit;
	}
`;

InlineEditingMulti.displayName = 'InlineEditing.Multi';

export default InlineEditingMulti;
