import React from 'react';
import styled from 'styled-components';
import { Checkbox as ReakitCheckbox, useCheckboxState } from 'reakit';
import tokens from '../../../../tokens';
import InlineStyle from './styles/Input.Inline.style';
import { Icon } from '../../../Icon/Icon';

const InlineField = styled(InlineStyle)(
	({ theme }) => `
	span:before,
	span:after {
		border-radius: ${tokens.radii.inputBorderRadius};
	}
	label {
		position: relative;
	}
	.tc-svg-icon {
		position: absolute;
		top: 1px;
		left: 1px;
		width: 1rem;
	}
	input:checked + .tc-svg-icon,
	input[aria-checked="mixed"] + .tc-svg-icon {
		background-color: ${theme.colors.inputBackgroundColor};
	}
`,
);

function Checkbox({ label, indeterminate, checked, ...rest }) {
	const checkbox = useCheckboxState({ state: (indeterminate && 'indeterminate') || checked });

	return (
		<InlineField>
			<label>
				<ReakitCheckbox {...rest} {...checkbox} /> <span>{label}</span>
				{checkbox.state ? (
					<Icon name="talend-check" />
				) : (
					<Icon name="talend-minus-circle" />
				)}
			</label>
		</InlineField>
	);
}

export default Checkbox;
