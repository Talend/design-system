import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button, Icon, Tooltip, VisuallyHidden } from '../..';

import styles from './SubHeaderBar.scss';

type SubHeaderBarProps = {
	title?: string;
};

const SubHeaderBar = ({ title, ...rest }: SubHeaderBarProps) => {
	const { t } = useTranslation();
	return (
		<div className={classnames(styles.cSubheaderbar)} {...rest}>
			<Tooltip
				title={t('SUBHEADERBAR_GO_BACK_TITLE', { defaultValue: 'Go back' })}
				placement="bottom"
			>
				<Button
					className={classnames(styles.cSubheaderbar__backButton)}
					onClick={() => history.back()}
				>
					<Icon name="talend-arrow-left" />
					<VisuallyHidden>
						{t('SUBHEADERBAR_GO_BACK', {
							title,
							defaultValue: 'Close {{title}} overview and go back',
						})}
					</VisuallyHidden>
				</Button>
			</Tooltip>
			<div className={classnames(styles.cSubheaderbar__body)}>{title && <h1>{title}</h1>}</div>
		</div>
	);
};

export default SubHeaderBar;
