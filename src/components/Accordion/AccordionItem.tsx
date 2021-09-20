import React from 'react';
import classnames from 'classnames';
import { CompositeItem, useDisclosureState, DisclosureContent } from 'reakit';

import { Icon } from '../Icon';
import * as styles from './Accordion.css';

export type AccordionItemProps = React.PropsWithChildren<any> & {
	disclosure: React.ReactElement;
	visible?: boolean;
};

const AccordionItem = ({ id, disclosure, children, visible, ...rest }: AccordionItemProps) => {
	const disclosureState = useDisclosureState({ animated: true, visible });

	React.useEffect(
		() => (rest.currentId === id ? disclosureState.show() : disclosureState.hide()),
		[id, rest.currentId, disclosureState],
	);

	return (
		<div className={styles.item}>
			<CompositeItem
				as="div"
				className={classnames(styles.header, {
					isVisible: disclosureState.visible,
				})}
				{...disclosureState}
				id={id}
				{...rest}
			>
				{disclosure}
				<span className={styles.arrow}>
					<Icon
						name="talend-caret-down"
						transform={disclosureState.visible ? 'rotate-180' : ''}
						currentColor
					/>
				</span>
			</CompositeItem>
			<DisclosureContent className={styles.contents} {...disclosureState}>
				{children}
			</DisclosureContent>
		</div>
	);
};

export default AccordionItem;
