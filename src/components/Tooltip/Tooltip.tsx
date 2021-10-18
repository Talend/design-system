import React from 'react';
import { useTooltipState } from 'reakit';

import * as S from './Tooltip.style';

export type Placement =
	| 'auto-start'
	| 'auto'
	| 'auto-end'
	| 'top-start'
	| 'top'
	| 'top-end'
	| 'right-start'
	| 'right'
	| 'right-end'
	| 'bottom-end'
	| 'bottom'
	| 'bottom-start'
	| 'left-end'
	| 'left'
	| 'left-start';

export type TooltipProps = React.PropsWithChildren<any> & {
	title?: string;
	placement?: Placement;
	visible?: boolean;
	optional?: boolean;
};

const Tooltip = React.forwardRef(
	(
		{
			children,
			title,
			placement = 'auto',
			visible = false,
			optional = false,
			...rest
		}: TooltipProps,
		ref: React.Ref<any>,
	) => {
		const tooltipState = useTooltipState({
			placement,
			visible,
			gutter: 15,
		});

		const textRef = React.useRef<React.PropsWithChildren<any>>(null);

		const [isEllipsisActive, setIsEllipsisActive] = React.useState<boolean>(false);

		React.useImperativeHandle(ref, () => textRef.current);

		React.useEffect(() => {
			if (optional && textRef.current?.offsetWidth < textRef.current?.scrollWidth) {
				setIsEllipsisActive(true);
			}
		}, [textRef.current, children]);

		return (
			<>
				{optional && !isEllipsisActive ? (
					React.cloneElement(children, { ref: textRef })
				) : (
					<>
						{optional && isEllipsisActive ? (
							<S.TooltipReference
								{...tooltipState}
								ref={textRef}
								style={{
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
									overflow: 'hidden',
								}}
							>
								{referenceProps => React.cloneElement(children, referenceProps)}
							</S.TooltipReference>
						) : (
							<S.TooltipReference {...tooltipState} {...children.props} ref={textRef}>
								{referenceProps => React.cloneElement(children, referenceProps)}
							</S.TooltipReference>
						)}

						{title && (
							<S.Tooltip {...tooltipState} {...rest}>
								<S.TooltipArrow {...tooltipState} />
								{title}
							</S.Tooltip>
						)}
					</>
				)}
			</>
		);
	},
);

export default Tooltip;
