import tokens from '../tokens';
import { tint } from 'polished';

const colors = tokens.colors;

export default {
	colors: {
		primaryColor: colors.stTropaz,
		informationColor: colors.lochmara,
		warningColor: colors.jaffa,
		successColor: colors.rioGrande,
		destructiveColor: colors.chesnutRose,

		textColor: colors.black,
		focusColor: colors.moodyPurple,
		activeColor: colors.lochmara,
		backgroundColor: colors.transparent,

		inputColor: colors.black,
		inputPlaceholderColor: colors.darkSilver,
		inputBackgroundColor: colors.white,
		inputGroupColor: colors.doveGray,
		inputGroupBackgroundColor: colors.gallery,
		inputGroupInteractiveColor: colors.lochmara,
		inputGroupInteractiveBackgroundColor: tint(0.9, colors.stTropaz),
		inputRadioBackgroundColor: colors.alto,
		inputBackgroundReadOnlyColor: colors.transparent,
		inputBorderColor: colors.darkSilver,
		inputBorderHoverColor: colors.doveGray,
		inputBorderFocusColor: colors.lochmara,
		inputBorderDisabledColor: colors.silverChalice,
		inputBorderReadOnlyColor: colors.silverChalice,
	},
	id: 'light',
};
