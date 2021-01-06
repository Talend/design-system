import React from 'react';
import styled, { StyledProps } from 'styled-components';
import { BoxProps } from 'reakit';
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


export type IconProps = BoxProps &
	StyledProps<any> & {
		/** The name of the icon  */
		className: string,
		name: string;
		title: string;
		transform: SVG_TRANSFORMS;
		onClick: (event: any) => void;
	};

const SVG = styled.svg<IconProps & { preserveColors: boolean }>(
	({ preserveColors }) => `
	width: ${tokens.sizes.l};
	height: ${tokens.sizes.l};

	transform-origin: center;
	circle,
	path,
	rect {
		${preserveColors ? '' : 'fill: currentColor;'}
	}
	.link {
		cursor: pointer;
	}
	.spin {
		animation-name: svg-spin;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	.rotate-90 {
		transform: rotate(90deg);
	}
	.rotate-180 {
		transform: rotate(180deg);
	}
	.rotate-270 {
		transform: rotate(270deg);
	}
	.flip-vertical {
		transform: scaleY(-1)
	}
	.flip-horizontal {
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
`,
);

export const Icon = React.forwardRef(
	(props: IconProps, ref) => {
		const { className, name, title, transform, onClick, ...rest } = props;
		const safeRef = ref || React.createRef();
		console.log('####', name, safeRef);
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
			if (safeRef && safeRef.current && isRemoteSVG) {
				// eslint-disable-next-line no-param-reassign
				safeRef.current.innerHTML = content;
			} else if (safeRef && safeRef.current && !isRemote) {
				IconsProvider.injectIcon(name, safeRef.current);
			}
		}, [isRemoteSVG, safeRef, content, name, isRemote]);
	
		const accessibility = {
			focusable: 'false', // IE11
			'aria-hidden': 'true',
			title: title || null,
		};
		if (name.startsWith('src-')) {
			return <img className="tc-icon" src={name.substring(4)} alt="" aria-hidden {...rest} />;
		}
		if (!name) {
			return <div className="alert alert-danger">Icon: no name provided</div>;
		}
		const classname = classnames(
			'tc-svg-icon',
			className,
			// @ts-ignore
			SVG_TRANSFORMS[transform],
		);
	
		let iconElement = (
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
