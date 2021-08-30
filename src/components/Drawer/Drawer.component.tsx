import React from 'react';
import { Dialog as ReakitDialog, DialogProps, useDialogState } from 'reakit';

import * as S from './Drawer.style';

export type DrawerProps = DialogProps & {
	disclosure: React.ComponentPropsWithRef<any>;
	title?: string;
	subtitle?: string;
	footer: React.ComponentPropsWithRef<any>;
	onClose?: () => void;
	onValidate?: () => void;
};

export const Drawer = React.forwardRef<React.ReactElement, React.PropsWithChildren<any>>(
	(
		{ disclosure, children, title, subtitle, onClose, onValidate, footer, ...props }: DrawerProps,
		ref,
	) => {
		const dialog = useDialogState({ animated: true, modal: false });

		return (
			<>
				{disclosure && (
					<S.DrawerDisclosure {...dialog} ref={disclosure.ref} {...disclosure.props}>
						{disclosureProps => React.cloneElement(disclosure, disclosureProps)}
					</S.DrawerDisclosure>
				)}
				<ReakitDialog {...dialog} hideOnClickOutside={false} {...props} as={S.Drawer} ref={ref}>
					{title && <S.Heading>{title}</S.Heading>}
					{children && <S.Body>{children}</S.Body>}
					{footer && <S.Footer>{footer}</S.Footer>}
				</ReakitDialog>
			</>
		);
	},
);

export default Drawer;
