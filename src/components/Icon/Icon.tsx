import React from 'react';
import styled, { StyledProps } from 'styled-components';
import { BoxProps } from 'reakit';
import classnames from 'classnames';

import tokens from '../../tokens';
import { IconsProvider } from '../IconsProvider';

export type IconProps = BoxProps &
	StyledProps<any> & {
		/** The name of the icon  */
		name: string;
		title: string;
		transform: string;
		onClick: (event: any) => void;
	};
export type TransformName =
	| 'spin'
	| 'rotate-90'
	| 'rotate-180'
	| 'rotate-270'
	| 'flip-horizontal'
	| 'flip-vertical';

const SVG_TRANSFORMS = {
	spin: 'spin',
	'rotate-45': 'rotate-45',
	'rotate-90': 'rotate-90',
	'rotate-135': 'rotate-135',
	'rotate-180': 'rotate-180',
	'rotate-225': 'rotate-225',
	'rotate-270': 'rotate-270',
	'rotate-315': 'rotate-315',
	'flip-horizontal': 'flip-horizontal',
	'flip-vertical': 'flip-vertical',
};

const TRANSFORMS = Object.keys(SVG_TRANSFORMS);

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
	({ className, name, title, transform, onClick, ...rest }: IconProps, ref) => {
		let safeRef = ref || React.createRef();
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
			console.log('###', ref)
			if (ref && ref.current && isRemoteSVG) {
				// eslint-disable-next-line no-param-reassign
				ref.current.innerHTML = content;
			} else if (ref && ref.current && !isRemote) {
				IconsProvider.injectIcon(name, ref.current);
			}
		}, [isRemoteSVG, ref, content, name, isRemote]);
	
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
