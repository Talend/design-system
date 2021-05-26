import styled from 'styled-components';

import tokens from '../../tokens';

export type InlineMessageProps = {
	small?: boolean;
	withBackground?: boolean;
};

export const InlineMessage = styled.div<InlineMessageProps>`
	display: ${({ withBackground }) => (withBackground ? 'inline-flex' : 'inline')};
	margin-bottom: ${tokens.space.m};
	${({ withBackground }) =>
		withBackground ? `padding: ${tokens.space.xs} ${tokens.space.s};` : ''}
	font-family: ${tokens.fonts.sansSerif};
	${({ small }) => (small ? `font-size: ${tokens.fontSizes.small};` : '')}
	border-radius: ${tokens.radii.inputBorderRadius};

	.inline-message__icon {
		padding-right: ${tokens.space.xs};

		svg {
			height: ${({ small }) => (small ? tokens.sizes.s : tokens.sizes.l)};
			width: ${({ small }) => (small ? tokens.sizes.s : tokens.sizes.l)};
			vertical-align: middle;
		}

		path {
			fill: currentColor;
		}
	}

	p {
		display: inline;
	}

	.inline-message__title {
		font-weight: ${tokens.fontWeights.semiBold};
	}

	.inline-message__title,
	.inline-message__description {
		color: ${({ withBackground, theme }) =>
			withBackground ? tokens.colors.gray[900] : theme.colors.textColor};
	}

	.inline-message__title,
	.inline-message__description,
	.inline-message__link {
		vertical-align: middle;
	}
`;
