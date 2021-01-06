import React from 'react';
import styled, { StyledProps } from 'styled-components';
import classnames from 'classnames';

import tokens from '../../tokens';
import { IconsProvider } from '../IconsProvider';

export enum SVG_TRANSFORMS {
	Spin = 'spin',
	Rotate45 = 'rotate-45',
	Rotate90 = 'rotate-90',
	Rotate135 = 'rotate-135',
	Rotate180 = 'rotate-180',
	Rotate225 = 'rotate-225',
	Rotate270 = 'rotate-270',
	Rotate315 = 'rotate-315',
	FlipHorizontal = 'flip-horizontal',
	FlipVertical = 'flip-vertical',
};

export type IconProps = StyledProps<any> & SVGElement & {
	className: string,
	title: string,
	name: string, // TODO: try to get the list of icons in all.svg as a type
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
	transform: SVG_TRANSFORMS;
};

type SvgType = IconProps & { preserveColors: boolean };

const SVG = styled.svg<SvgType>`
	width: ${tokens.sizes.l};
	height: ${tokens.sizes.l};

	transform-origin: center;
	circle,
	path,
	rect {
		${({ preserveColors }) => preserveColors ? '' : 'fill: currentColor;'}
	}
	&.link {
		cursor: pointer;
	}
	&.spin {
		animation-name: svg-spin;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	&.rotate-45 {
		transform: rotate(45deg);
	}
	&.rotate-90 {
		transform: rotate(90deg);
	}
	&.rotate-180 {
		transform: rotate(180deg);
	}
	&.rotate-270 {
		transform: rotate(270deg);
	}
	&.flip-vertical {
		transform: scaleY(-1)
	}
	&.flip-horizontal {
		transform: scaleX(-1)
	}
	@keyframes svg-spin {
		0% {
			transform: rotate(0deg);
		}
	
		100% {
			transform: rotate(360deg);
		}
	}
`;

function getCurrent(ref: React.Ref<SVGElement>) {
	if (typeof ref === 'object'  && ref !== null && ref.current) {
		return ref.current;
	}
	return null;
}

export const Icon = React.forwardRef(
	(props: IconProps, ref: React.Ref<SVGElement>) => {
		const { className, name, title, transform, onClick, ...rest } = props;
		const safeRef = ref || React.createRef<SVGElement>();
		const isRemote = name.startsWith('remote-');
		const imgSrc = name.replace('remote-', '').replace('src-', '');
		const [content, setContent] = React.useState<string>();
		const isRemoteSVG = isRemote && content && content.includes('svg') && !content.includes('script');
	
		React.useEffect(() => {
			if (isRemote) {
				fetch(imgSrc, {
					headers: {
						Accept: 'image/svg+xml',
					},
				})
					.then(response => {
						if (response.status === 200 && response.ok) {
							response.text().then(data => {
								setContent(data);
							});
						} else {
							console.error(
								new Error(
									`IconResponseError: status=${response.status} ok=${response.ok} url=${imgSrc}`,
								),
							);
						}
					})
					.catch(error => {
						console.error('IconResponseError', imgSrc, error);
					});
			}
		}, [imgSrc, isRemote]);
	
		React.useEffect(() => {
			const current = getCurrent(safeRef);
			if (current && isRemoteSVG && content) {
				// eslint-disable-next-line no-param-reassign
				current.innerHTML = content;
			} else if (current && !isRemote) {
				IconsProvider.injectIcon(name, current);
			}
		}, [isRemoteSVG, safeRef, content, name, isRemote]);
	
		const accessibility = {
			focusable: 'false', // IE11
			'aria-hidden': 'true',
			title: title || null,
		};
		if (name.startsWith('src-')) {
			// @ts-ignore
			return <img className="tc-icon" src={name.substring(4)} alt="" aria-hidden {...rest} />;
		}
		if (!name) {
			return <div className="alert alert-danger">Icon: no name provided</div>;
		}
		const classname = classnames(
			'tc-svg-icon',
			className,
			transform,
		);
	
		let iconElement = (
			// @ts-ignore
			<SVG
				// @ts-ignore
				aria-hidden
				{...rest}
				{...accessibility}
				className={classname}
				ref={safeRef}
			/>
		);
		if (isRemote && content && !isRemoteSVG) {
			const classNames = classnames('tc-icon', className);
			iconElement = (
				// @ts-ignore
				<img
					alt="icon"
					src={name.replace('remote-', '')}
					className={classNames}
					aria-hidden
					{...rest}
				/>
			);
		}
		if (!onClick) {
			return iconElement;
		}
		return (
			<button onClick={onClick} className=".tc-svg-anchor .link">
				{iconElement}
			</button>
		);
	},
);

export const IconMemo = React.memo(Icon);
