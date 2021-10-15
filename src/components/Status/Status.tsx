import React from 'react';
import { IconName } from '@talend/icons';
import Tooltip from '../Tooltip';
import { Icon } from '../Icon/Icon';
import Loading from '../Loading';

import * as S from './Status.style';

export type StatusProps = React.PropsWithChildren<any> & {
	icon?: IconName;
	label?: string;
	inProgress?: boolean;
	hideLabel?: boolean;
	children?: string;
};

const Status = React.forwardRef<HTMLSpanElement, StatusProps>(
	({ children, icon, inProgress, hideLabel, label, ...rest }, ref) => {
		const text = <span className="status__text">{children || label}</span>;
		const picto = (
			<span className="status__icon" aria-hidden>
				{!inProgress && icon && <Icon name={icon} />}
				{inProgress && <Loading />}
			</span>
		);

		return (
			<S.Status ref={ref} {...rest}>
				{hideLabel ? <Tooltip title={text}>{picto}</Tooltip> : [picto, text]}
			</S.Status>
		);
	},
);

export default Status;
