import React from 'react';
import { CompositeItem, useDisclosureState } from 'reakit';
import { useSpring, animated } from 'react-spring';

import * as S from './Accordion.style';
import { Icon } from '../Icon';

export type AccordionItemProps = React.PropsWithChildren<any> & {
	disclosure: React.ReactElement;
	visible?: boolean;
};

const AccordionItem = ({ id, disclosure, children, visible, ...rest }: AccordionItemProps) => {
	const disclosureState = useDisclosureState({ visible });

	const { opacity } = useSpring({
		opacity: disclosureState.visible ? 1 : 0,
		onRest: disclosureState.stopAnimation,
	});

	React.useEffect(() => (rest.currentId === id ? disclosureState.show() : disclosureState.hide()), [
		id,
		rest.currentId,
		disclosureState,
	]);

	const AnimatedDisclosureContent = animated(S.DisclosureContent);

	return (
		<S.AccordionItem>
			<CompositeItem as={S.DisclosureHeading} {...disclosureState} id={id} {...rest}>
				{disclosure}
				<S.DisclosureArrow>
					<Icon
						name="talend-caret-down"
						transform={disclosureState.visible ? 'rotate-180' : ''}
						currentColor
					/>
				</S.DisclosureArrow>
			</CompositeItem>
			<AnimatedDisclosureContent
				{...disclosureState}
				style={{
					opacity,
				}}
			>
				{children}
			</AnimatedDisclosureContent>
		</S.AccordionItem>
	);
};

export default AccordionItem;
