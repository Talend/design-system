import React from 'react';
import { IconName } from '@talend/icons';
import classnames from 'classnames';
import { Button, ClickableProps } from 'reakit';

import { Icon } from '../Icon/Icon';
import Loading from '../Loading';
import * as styles from './Button.css';

type BaseProps = {
	/** The icon of the button */
	icon?: IconName | React.ReactElement;
	/** If the button is small or not */
	small?: boolean;
	/** If the button is loading or not */
	loading?: boolean;
	/** If the button should not display text */
	hideText?: boolean;
	/** All buttons must have contents */
	children: React.ReactNode | React.ReactNodeArray;
	/** Use these if the button should be an anchor or router link */
	as?: any;
	href?: string;
	target?: string;
	variant?: keyof typeof styles.buttonVariant;
};

export type ButtonProps = ClickableProps & BaseProps;

const ButtonComponentBase = React.forwardRef(
	(
		{ className, icon, small, hideText, loading, children, variant, ...rest }: ButtonProps,
		ref: React.Ref<any>,
	) => (
		<Button
			ref={ref}
			{...rest}
			className={classnames(
				'btn',
				className,
				styles.buttonBase,
				variant ? styles.buttonVariant[variant] : '',
				{
					'btn--has-icon': icon,
					[styles.buttonWithText]: !hideText,
					[styles.smallButton]: small,
					'btn--loading': loading,
				},
			)}
			aria-busy={!!loading}
		>
			{loading && (
				<Loading className={`${styles.loading} ${styles.icon}`} name={icon} aria-hidden />
			)}
			{!loading &&
				icon &&
				(typeof icon === 'string' ? (
					<Icon className={styles.icon} name={icon} />
				) : (
					React.cloneElement(icon, {
						className: `${icon.props?.className} ${styles.icon}`,
					})
				))}
			<span className={`${styles.text} ${hideText ? styles.textHidden : ''}`}>{children}</span>
		</Button>
	),
);

Button.displayName = 'Button';

export default ButtonComponentBase;
