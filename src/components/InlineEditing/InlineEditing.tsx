import React from 'react';
import Button from '../Button';
import Tooltip from '../Tooltip';
import Form from '../Form';
import VisuallyHidden from '../VisuallyHidden';
import { useTranslation } from 'react-i18next';

import * as S from './InlineEditing.style';

type InlineEditingProps = React.AnchorHTMLAttributes<any> & {
	/** if the inline editing is disabled */
	disabled?: boolean;
	/** if the inline editing is in editing mode */
	editing?: boolean;
	/** if the inline editing is a required field */
	required?: boolean;
	/** the inline editing label */
	label: string;
	/** the inline editing value */
	value: string;
};

export type StyledInlineEditing = {
	as?: React.ComponentType<any> | string;
} & React.PropsWithRef<InlineEditingProps>;

const InlineEditing = React.forwardRef(
	(
		{ className, disabled, editing = false, label, value, required, ...rest }: StyledInlineEditing,
		ref: React.Ref<any>,
	) => {
		const { t } = useTranslation();
		const action = t('INLINE_EDITING_EDIT', 'Edit');
		return (
			<S.InlineEditing>
				{editing ? (
					<div className="edit-inline--editing__field">
						<form>
							<Form.Text hideLabel label={label} required={required} value={value} />
							<div className="edit-inline--editing__field__actions">
								<Button.Icon icon="talend-cross-circle">{action}</Button.Icon>
								<Button.Icon icon="talend-check-circle">{action}</Button.Icon>
							</div>
						</form>
					</div>
				) : (
					<div className="edit-inline--static">
						<VisuallyHidden>
							<Form.Label>
								{label}
								{required && '*'}
							</Form.Label>
						</VisuallyHidden>
						<div className="edit-inline--static__field">
							<span>{value}</span>
							<Tooltip title={action} placement="top">
								<Button.Icon disabled={disabled} icon="talend-pencil">
									{action}
								</Button.Icon>
							</Tooltip>
						</div>
					</div>
				)}
			</S.InlineEditing>
		);
	},
);

export default InlineEditing;
