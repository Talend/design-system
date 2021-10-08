import React from 'react';
import styled, { StyledFunction } from 'styled-components';
import tokens from '../../../tokens';
import InlineEditing, { InlineEditingProps } from '../InlineEditing';

export type InlineEditingMultiProps = InlineEditingProps;

// const button: StyledFunction<React.FC<InlineEditingMultiProps>> = styled(ButtonSecondary);

const InlineEditingMulti: React.FC<InlineEditingMultiProps> = styled(InlineEditing).attrs({
	// className: 'btn--icon',
	// as: 'h2',
})`
	border: 1px solid purple;
`;

InlineEditingMulti.displayName = 'InlineEditing.Multi';

export default InlineEditingMulti;
