import styled from 'styled-components';
import { Composite as ReakitComposite, DisclosureContent as ReakitDisclosureContent } from 'reakit';

import tokens from '../../tokens';

export const Accordion = styled(ReakitComposite)`
	display: flex;
	flex-direction: column;
`;

export const AccordionItem = styled.div`
	margin: ${tokens.space.m} 0;
	min-width: 25rem;
	border: 1px solid ${({ theme }) => theme.colors.accordionBorderColor};
	border-radius: ${tokens.radii.rectRadius};
	overflow: hidden;

	&:hover {
		border-color: ${tokens.colors.gray[200]};
	}

	&:active {
		border-color: ${tokens.colors.gray[300]};
	}
`;

export const DisclosureHeading = styled.div<{ visible: boolean }>`
	display: flex;
	align-items: center;
	padding: ${tokens.space.m};
	max-height: 5rem;
	flex: 1;
	cursor: pointer;
	border-radius: ${props =>
		props.visible
			? `${tokens.radii.rectRadius} ${tokens.radii.rectRadius} 0 0`
			: tokens.radii.rectRadius};
	background: ${({ theme }) => theme.colors.accordionBackgroundColor};
`;

export const DisclosureArrow = styled.span`
	flex: 0;
	margin-left: auto;
`;

export const DisclosureContent = styled(ReakitDisclosureContent)`
	position: relative;
	padding: ${tokens.space.m};
	transition: max-height 500ms linear;
	border-radius: 0 0 ${tokens.radii.rectRadius} ${tokens.radii.rectRadius};

	&[data-enter] {
		max-height: 37rem;
	}

	&:not([data-enter]) {
		max-height: 0;
	}

	@media (min-width: ${tokens.breakpoints.l}) {
		max-height: 37rem;
		overflow: autoyarn;
	}
`;
