import React from 'react';
import styled from 'styled-components';
import InlineEditing, { InlineEditingProps } from '../InlineEditing';


const InlineEditingSingle: React.FC<InlineEditingProps> = styled(InlineEditing).attrs({
	className: 'c-inline-editing--text',
	renderAs: 'span',
	mode: 'single',
})``;

InlineEditingSingle.displayName = 'InlineEditing.Single';

export default InlineEditingSingle;
