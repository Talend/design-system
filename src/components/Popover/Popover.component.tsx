import React from 'react';
import { usePopoverState } from 'reakit';

import * as S from './Popover.style';

export type PopoverProps = React.PropsWithChildren<any> & {
	disclosure: React.ReactElement;
};

const Popover = ({ disclosure, ...props }: PopoverProps) => {
	const popover = usePopoverState();
	return (
		<>
			<S.PopoverDisclosure {...popover} ref={disclosure.ref} {...disclosure.props}>
				{disclosureProps => React.cloneElement(disclosure, disclosureProps)}
			</S.PopoverDisclosure>
			<S.Popover {...popover} {...props}>
				<S.PopoverArrow {...popover} />
				{props.children}
			</S.Popover>
		</>
	);
};

export default Popover;
