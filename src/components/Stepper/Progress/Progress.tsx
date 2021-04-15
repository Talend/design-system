import React from 'react';
import VisuallyHidden from '../../VisuallyHidden';

import * as S from './Progress.style';

export type ProgressProps = React.PropsWithChildren<any> & {
	orientation: 'horizontal' | 'vertical';
	valuemin?: number;
	valuenow?: number;
	valuemax?: number;
};

const Progress = ({
	valuemin = 1,
	valuenow,
	valuemax,
	orientation,
	children,
	...rest
}: ProgressProps) => {
	const size = `${(valuenow - 1) * (100 / (valuemax - 1))}%`;
	return (
		<S.Progress
			role="progressbar"
			aria-valuemin={valuemin}
			aria-valuenow={valuenow}
			aria-valuemax={valuemax}
			{...rest}
		>
			<div aria-hidden style={orientation === 'vertical' ? { height: size } : { width: size }} />
			<VisuallyHidden>
				{valuenow}/{valuemax}
			</VisuallyHidden>
			{children}
		</S.Progress>
	);
};

export default Progress;
