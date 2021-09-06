import React from 'react';
import { DisclosureProps, Disclosure, DisclosureContent, useDisclosureState } from 'reakit';

import * as S from './Drawer.style';

export type DrawerProps = DisclosureProps & {
	disclosure: React.ComponentPropsWithRef<any>;
	title?: React.ComponentPropsWithRef<any>;
	footer?: React.ComponentPropsWithRef<any>;
	visible: boolean;
};

export const Drawer = React.forwardRef<React.ReactElement, React.PropsWithChildren<any>>(
	({ disclosure, children, title, footer, visible, ...props }: DrawerProps, ref) => {
		const state = useDisclosureState({ animated: true, visible });

		React.useEffect(() => {
			state.setVisible(visible);
		}, [visible]);

		return (
			<>
				{disclosure && (
					<Disclosure
						as={S.DrawerDisclosure}
						{...disclosure}
						ref={disclosure.ref}
						{...disclosure.props}
					>
						{disclosureProps => React.cloneElement(disclosure, disclosureProps)}
					</Disclosure>
				)}
				{state.visible && (
					<DisclosureContent {...state} {...props} as={S.Drawer} ref={ref}>
						{title && <S.DrawerHeading>{title}</S.DrawerHeading>}
						{children && <S.DrawerBody>{children}</S.DrawerBody>}
						{footer && <S.DrawerFooter>{footer}</S.DrawerFooter>}
					</DisclosureContent>
				)}
			</>
		);
	},
);

export default Drawer;
