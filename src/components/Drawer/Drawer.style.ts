import { DialogDisclosure as ReakitDialogDisclosure } from 'reakit';
import styled from 'styled-components';

import tokens from '../../tokens';

export const DrawerDisclosure = ReakitDialogDisclosure;

export const Drawer = styled.div.attrs({
	className: 'c-drawer',
})`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	color: ${({ theme }) => theme.colors.textColor};
	background: ${({ theme }) => theme.colors.backgroundColor};
	box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.25);
	z-index: ${tokens.zIndices.above};
	transition: ${tokens.transitions.normal};
	transform: translateX(0);

	&[data-enter] {
		transform: translateX(-100%);
	}
`;
export const Area = styled.div`
	flex-grow: 0;
	flex-basis: 5.5rem;
	padding: 3rem;
	color: ${({ theme }) => theme.colors.textColor};
	background-color: ${({ theme }) => theme.colors.modalBackground};
`;
export const Heading = styled(Area).attrs({
	className: 'c-drawer--heading',
})`
	padding: 1.5rem 3rem;
	background: ${({ theme }) => theme.colors.modalHeadingBackground};
	border-bottom: 1px solid ${({ theme }) => theme.colors.modalHeadingBorderColor};
`;
export const Body = styled(Area).attrs({
	className: 'c-drawer--body',
})`
	flex-grow: 1;
`;
export const Footer = styled(Area).attrs({
	className: 'c-drawer--footer',
})``;
