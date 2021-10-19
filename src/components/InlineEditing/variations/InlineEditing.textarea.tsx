import React from 'react';
import styled from 'styled-components';
import InlineEditing, { InlineEditingProps } from '../InlineEditing';

export type InlineEditingMultiProps = InlineEditingProps;


const InlineEditingMulti: React.FC<InlineEditingMultiProps> = styled(InlineEditing).attrs({
	className: 'c-inline-editing--textarea',
	renderAs: 'p',
	mode: 'multi',
})`
	.c-inline-editing--editing__field__actions {
		padding-top: 1rem;
		height: 2.2rem;
	}

	.c-inline-editing--editing__field textarea {
		padding: 1rem;
		padding-right: 4rem;
	}

	.c-inline-editing--static__field__value {
		white-space: inherit;
	}
`;

InlineEditingMulti.displayName = 'InlineEditing.Textarea';

export default InlineEditingMulti;
