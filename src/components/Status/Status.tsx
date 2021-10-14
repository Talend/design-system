import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import Tooltip from '../Tooltip';
import { Icon } from '../Icon/Icon';
import Loading from '../Loading';

import * as S from './Status.style';

export type StatusProps = React.PropsWithChildren<any>;

// @see https://www.selbekk.io/blog/2020/05/forwarding-refs-in-typescript/
const Status = React.forwardRef<HTMLSpanElement, StatusProps>(
	({ children, icon, inProgress, hideLabel, label, ...rest }, ref) => {
		const text = <span className="status__text">{children || label}</span>;
		const picto = (
			<span className="status__icon" aria-hidden>
				{icon && <Icon name={icon} />}
				{inProgress && <Loading />}
			</span>
		);

		return (
			<S.Status ref={ref} {...rest}>
				{hideLabel ? (
					<>
						<Tooltip title={text}>{picto}</Tooltip>
						<VisuallyHidden>{text}</VisuallyHidden>
					</>
				) : (
					<>
						{picto}
						{text}
					</>
				)}
			</S.Status>
		);
	},
);

export default Status;
