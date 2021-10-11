import React from 'react';
import styled from 'styled-components';
import InlineEditing, { InlineEditingProps } from '../InlineEditing';

export type InlineEditingSingleProps = InlineEditingProps;

const InlineEditingSingle: React.FC<InlineEditingSingleProps> = styled(InlineEditing).attrs({
	renderAs: 'p',
	mode: 'single',
})``;

InlineEditingSingle.displayName = 'InlineEditing.Single';

export default InlineEditingSingle;
