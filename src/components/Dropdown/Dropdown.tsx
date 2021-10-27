import React from 'react';
import { StyledProps } from 'styled-components';
import * as ReactIs from 'react-is';
import { BoxProps, useMenuState } from 'reakit';
import { IconName } from '@talend/icons';

import Link from '../Link';
import Button from '../Button';

import * as S from './Dropdown.style';

type DividerType = { divider: boolean };
type LinkType = {
	label: string;
	href: string;
	onClick: React.MouseEventHandler;
	icon: IconName;
	'data-feature': string;
};
type ButtonType = Omit<LinkType, 'href'>;
type MenuItemProps = DividerType | LinkType | ButtonType;

export type DropdownProps = BoxProps &
	StyledProps<any> & {
		/** Dropdown menu items */
		items: MenuItemProps[];
	};

function convertItem(item: MenuItemProps) {
	if ('divider' in item) {
		return <></>;
	}

	return 'href' in item ? (
		<Link hideExternalIcon iconBefore={item.icon} {...item}>
			{item.label}
		</Link>
	) : (
		<Button {...item}>
			{item.label}
		</Button>
	);
}

function getItem(item: React.ReactElement<any>, index: number) {
	return ReactIs.isFragment(item) && React.Children.toArray(item.props.children).length === 0 ? (
		<S.MenuSeparator />
	) : (
		<S.MenuItem {...item.props} key={index}>
			{itemProps => React.cloneElement(item, itemProps)}
		</S.MenuItem>
	);
}

const Dropdown: React.FC<DropdownProps> = React.forwardRef(
	({ children, items = [], ...props }: DropdownProps, ref) => {
		const menu = useMenuState({
			animated: 250,
			gutter: 0,
			loop: true,
		});

		const { 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, ...rest } = props;
		return (
			<>
				<S.Button as={Button} ref={ref} {...menu} {...rest}>
					{children}
					{items.length ? <S.ButtonIcon name="talend-caret-down" /> : null}
				</S.Button>
				{items.length ? (
					<S.Menu {...menu} aria-label={ariaLabel} aria-labelledby={ariaLabelledby}>
						<S.AnimatedMenu>
							{items.map((item: MenuItemProps, index: number) => {
							     if('divider' in item) {
							         return <S.MenuSeparator key={`separator-${index}`} />
							     }
							     
							     const LinkOrButton = convertItem(item);
							     
							     return (
							         <S.MenuItem {...LinkOrButton.props} key={`entry-${index}`}>
			                                                  {itemProps => React.cloneElement(LinkOrButton, itemProps)}
		                                                  </S.MenuItem>
							     )
							})}
						</S.AnimatedMenu>
					</S.Menu>
				) : null}
			</>
		);
	},
);

export default Dropdown;
