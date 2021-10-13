import React, { PropsWithChildren } from 'react';
import { StyledProps } from 'styled-components';
import Button from '../Button';
import Tooltip from '../Tooltip';
import Form from '../Form';
import { useTranslation } from 'react-i18next';

import * as S from './InlineEditing.style';
import classNames from 'classnames';

import useKey from 'react-use/lib/useKey';

export type InlineEditingProps = PropsWithChildren<any> &
	StyledProps<any> & {
		/** if the inline editing is a required field */
		required?: boolean;
		/** the inline editing label */
		label: string;
		/** the inline editing default value */
		value: string;
		/** if the inline editing has an error */
		hasError?: boolean;
		/** if the inline editing in in progress */
		loading?: boolean;
		/** called on submit with the new value */
		onEdit?: (newValue: string) => void;
		renderAs?: React.ElementType;
	};

export type StyledInlineEditing = {
	renderAs?: React.ComponentType<any> | string;
} & React.PropsWithRef<InlineEditingProps>;

const InlineEditing = React.forwardRef(
	({
		defaultValue,
		required,
		hasError,
		loading,
		onEdit,
		label,
		renderValueAs,
		renderAs,
		mode,
		...rest
	}: StyledInlineEditing) => {
		const { t } = useTranslation();
		const [isEditing, setEditMode] = React.useState(false);
		const [value, setValue] = React.useState(defaultValue);

		const onSubmit = e => {
			onEdit && onEdit(value);
			setEditMode(false);
			e.stopPropagation();
		};

		const onCancel = () => {
			isEditing && setValue(defaultValue);
			setEditMode(false);
		};

		useKey('Escape', onCancel, {}, [isEditing]);
		useKey('Enter', e => mode !== 'multi' && onSubmit(e), {}, [isEditing, value]);

		const Input = mode === 'multi' ? Form.Textarea : Form.Text;
		return (
			<S.InlineEditing {...rest}>
				{isEditing ? (
					<div className="edit-inline--editing__field">
						<form>
							<Input
								hideLabel
								label={label}
								value={value}
								required={required}
								hasError={hasError}
								onChange={({ target }) => setValue(target.value)}
							/>
							<div className="edit-inline--editing__field__actions">
								<Button.Icon onClick={onCancel} icon="talend-cross-circle">
									{t('INLINE_EDITING_CANCEL', 'Cancel')}
								</Button.Icon>
								<Button.Icon onClick={onSubmit} icon="talend-check-circle">
									{t('INLINE_EDITING_SUBMIT', 'Submit')}
								</Button.Icon>
							</div>
						</form>
					</div>
				) : (
					<div
						className={classNames('edit-inline--static', { loading })}
						onDoubleClick={loading ? undefined : () => setEditMode(true)}
					>
						<div className="edit-inline--static__field">
							<S.InlineEditingValue
								className="edit-inline--static__field__value"
								as={renderValueAs || renderAs}
							>
								{value}
							</S.InlineEditingValue>
							<Button.Icon
								className="edit-inline--static__field__action"
								icon="talend-pencil"
								onClick={() => setEditMode(true)}
								disabled={loading}
							>
								{t('INLINE_EDITING_EDIT', 'Edit')}
							</Button.Icon>
						</div>
					</div>
				)}
			</S.InlineEditing>
		);
	},
);

export default InlineEditing;
