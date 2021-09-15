import React from 'react';
import { useMenuState, Menu, MenuItem, MenuButton, MenuSeparator } from 'reakit';
import { Icon } from '../../Icon';
import * as S from './Dropdown.style';

type MinimalProps = {
	ariaLabel: string;
	menuButton: React.ElementType;
	menuButtonLabel: React.ElementType | string;
	items: (React.ReactElement | HTMLElement)[][];
};

export default function DropdownBuilder({
	ariaLabel,
	menuButton,
	menuButtonLabel,
	items,
}: MinimalProps) {
	const menu = useMenuState({
		animated: 250,
		gutter: 0,
		loop: true,
	});

	return (
		<>
			<MenuButton as={menuButton} {...menu}>
				{menuButtonLabel}

				{menu.visible ? <Icon name="talend-caret-up" /> : <Icon name="talend-caret-down" />}
			</MenuButton>
			<Menu as={S.AnimatedMenu} {...menu} aria-label={ariaLabel}>
				{items.map((itemGroup, index) => {
					const isLastGroup = index === items.length - 1;
					return (
						<>
							{itemGroup.map((item, indexItem) => (
								<MenuItem as={item} key={`group-${index}-item-${indexItem}`} {...menu} />
							))}
							{!isLastGroup && (
								<MenuSeparator as={S.MenuSeparator} {...menu} key={`separator-group-${index}`} />
							)}
						</>
					);
				})}
			</Menu>
		</>
	);
}
