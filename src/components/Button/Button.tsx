import React, { ComponentType, FunctionComponent, ReactNode, ReactNodeArray } from 'react';
import { IconName } from '@talend/icons';
import { ButtonProps as ReakitButtonProps } from 'reakit';

import { Icon } from '../Icon/Icon';
import Loading from '../Loading';

import * as S from './Button.style';

type BaseProps = {
	/** The icon of the button */
	icon?: IconName | React.ReactElement;
	/** If the button is small or not */
	small?: boolean;
	/** If the button is loading or not */
	loading?: boolean;
	/** If the button should not display text */
	hideText?: boolean;
	/** The button's contents */
	children: ReactNode | ReactNodeArray;
};

type ButtonAsAnchor = {
	as?: React.ElementType<HTMLAnchorElement>;
	href: string;
	target: string;
};

type ButtonAsElement = {
	as?: React.ElementType<any>;
};

export type ButtonProps = ReakitButtonProps & BaseProps & (ButtonAsAnchor | ButtonAsElement);

const Button = React.forwardRef(
	(
		{ className, icon, small, hideText, loading, children, as = 'button', ...rest }: ButtonProps,
		ref: React.Ref<any>,
	) => (
		<S.Button
			ref={ref}
			{...rest}
			className={`
				btn ${className || ''} ${icon ? 'btn--has-icon' : ''} ${hideText ? '' : 'btn--has-text'} ${
				small ? 'btn--small' : ''
			} ${loading ? 'btn--loading' : ''}
			`}
			aria-busy={!!loading}
			as={as || 'button'}
		>
			{loading && <Loading className="btn__loading btn__icon" name={icon} aria-hidden />}
			{!loading &&
				icon &&
				(typeof icon === 'string' ? (
					<Icon className="btn__icon" name={icon} />
				) : (
					React.cloneElement(icon, {
						className: `${icon.props?.className} btn__icon`,
					})
				))}
			<span className={`btn__text ${hideText ? 'btn__text--hidden' : ''}`}>{children}</span>
		</S.Button>
	),
);

export default Button;
