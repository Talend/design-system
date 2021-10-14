import React from 'react';
import { Icon } from '../Icon/Icon';

import * as S from './Status.style';

export type StatusProps = React.PropsWithChildren<any>;

// @see https://www.selbekk.io/blog/2020/05/forwarding-refs-in-typescript/
const Status = React.forwardRef<HTMLSpanElement, StatusProps>(
	({ children, icon, ...rest }, ref) => {
		return (
			<S.Status ref={ref} {...rest}>
				{/* <span className="status__icon" aria-hidden> */}
				<Icon name={icon} />
				{/* </span> */}
				{children}
			</S.Status>
		);
	},
);

export default Status;
