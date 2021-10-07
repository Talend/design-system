import React, { PropsWithChildren } from 'react';
import { StyledProps } from 'styled-components';
import Button from '../Button';
import Tooltip from '../Tooltip';
import Form from '../Form';
import { useTranslation } from 'react-i18next';

import * as S from './InlineEditing.style';
import classNames from 'classnames';

type InlineEditingProps = PropsWithChildren<any> &
	StyledProps<any> & {
		/** if the inline editing is in editing mode */
		editing?: boolean;
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
	};

export type StyledInlineEditing = {
	as?: React.ComponentType<any> | string;
} & React.PropsWithRef<InlineEditingProps>;

const InlineEditing = React.forwardRef(
	(
		{
			onEdit = () => {},
			label,
			required,
			hasError,
			defaultValue,
			loading,
			as,
		}: StyledInlineEditing,
		ref: React.Ref<any>,
	) => {
		const { t } = useTranslation();
		const [isEditing, edit] = React.useState(false);
		const [value, setValue] = React.useState(defaultValue);

		const action = t('INLINE_EDITING_EDIT', 'Edit');
		return (
			<S.InlineEditing>
				{isEditing ? (
					<div className="edit-inline--editing__field">
						<form>
							<Form.Text
								hideLabel
								label={label}
								value={value}
								required={required}
								hasError={hasError}
								onChange={({ target }) => setValue(target.value)}
							/>
							<div className="edit-inline--editing__field__actions">
								<Button.Icon
									onClick={() => {
										setValue(defaultValue);
										edit(false);
									}}
									icon="talend-cross-circle"
								>
									{t('INLINE_EDITING_CANCEL', 'Cancel')}
								</Button.Icon>
								<Button.Icon
									onClick={() => {
										edit(false);
										onEdit(value);
									}}
									icon="talend-check-circle"
								>
									{t('INLINE_EDITING_SUBMIT', 'Submit')}
								</Button.Icon>
							</div>
						</form>
					</div>
				) : (
					<div
						className={classNames('edit-inline--static', { loading })}
						onDoubleClick={loading ? undefined : () => edit(true)}
					>
						<div className="edit-inline--static__field">
							<S.InlineEditingValue className="edit-inline--static__field__value" as={as}>
								{value}
							</S.InlineEditingValue>
							<Tooltip title={action} placement="top">
								<Button.Icon
									className="edit-inline--static__field__action"
									onClick={() => edit(true)}
									disabled={loading}
									icon="talend-pencil"
								>
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
