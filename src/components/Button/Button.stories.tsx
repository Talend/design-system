import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '.';
import Skeleton from '../Skeleton';
import Tooltip from '../Tooltip';

export default {
	component: Button,
};

export const defaultProps = {
	onClick: () => {},
	children: 'Button contents',
	disabled: false,
	focusable: true,
	small: false,
	icon: '',
};

export const Primary = () => {
	return <Button.Primary onClick={action('clicked')}>Basic Button</Button.Primary>;
};
export const PrimaryIcon = () => {
	return (
		<Button.Primary onClick={action('clicked')} icon="talend-plus">
			Button with icon
		</Button.Primary>
	);
};
export const PrimarySmall = () => {
	return (
		<Button.Primary small onClick={action('clicked')}>
			Small Button
		</Button.Primary>
	);
};
export const PrimaryDisabled = () => {
	return (
		<Button.Primary disabled onClick={action('clicked')}>
			Disabled Button
		</Button.Primary>
	);
};
export const PrimaryDisabledFocusable = () => {
	return (
		<Button.Primary disabled focusable onClick={action('clicked')}>
			Disabled Focusable Button
		</Button.Primary>
	);
};
export const PrimaryAsLink = () => {
	return (
		<Button.Primary onClick={action('clicked')} as="a" href="pouet">
			This is an anchor
		</Button.Primary>
	);
};

export const Destructive = () => {
	return <Button.Destructive onClick={action('clicked')}>Basic Button</Button.Destructive>;
};
export const DestructiveIcon = () => {
	return (
		<Button.Destructive onClick={action('clicked')} icon="talend-plus">
			Button with icon
		</Button.Destructive>
	);
};
export const DestructiveSmall = () => {
	return (
		<Button.Destructive small onClick={action('clicked')}>
			Small Button
		</Button.Destructive>
	);
};
export const DestructiveDisabled = () => {
	return (
		<Button.Destructive disabled onClick={action('clicked')}>
			Disabled Button
		</Button.Destructive>
	);
};
export const DestructiveDisabledFocusable = () => {
	return (
		<Button.Destructive disabled focusable onClick={action('clicked')}>
			Disabled Focusable Button
		</Button.Destructive>
	);
};
export const DestructiveAsLink = () => {
	return (
		<Button.Destructive onClick={action('clicked')} as="a" href="pouet">
			This is an anchor
		</Button.Destructive>
	);
};

export const Secondary = () => {
	return <Button.Secondary onClick={action('clicked')}>Basic Button</Button.Secondary>;
};
export const SecondaryIcon = () => {
	return (
		<Button.Secondary onClick={action('clicked')} icon="talend-plus">
			Button with icon
		</Button.Secondary>
	);
};
export const SecondarySmall = () => {
	return (
		<Button.Secondary small onClick={action('clicked')}>
			Small Button
		</Button.Secondary>
	);
};
export const SecondaryDisabled = () => {
	return (
		<Button.Secondary disabled onClick={action('clicked')}>
			Disabled Button
		</Button.Secondary>
	);
};
export const SecondaryDisabledFocusable = () => {
	return (
		<Button.Secondary disabled focusable onClick={action('clicked')}>
			Disabled Focusable Button
		</Button.Secondary>
	);
};
export const SecondaryAsLink = () => {
	return (
		<Button.Secondary onClick={action('clicked')} as="a" href="pouet">
			This is an anchor
		</Button.Secondary>
	);
};

export const Tertiary = () => {
	return <Button.Tertiary onClick={action('clicked')}>Basic Button</Button.Tertiary>;
};
export const TertiaryIcon = () => {
	return (
		<Button.Tertiary onClick={action('clicked')} icon="talend-plus">
			Button with icon
		</Button.Tertiary>
	);
};
export const TertiarySmall = () => {
	return (
		<Button.Tertiary small onClick={action('clicked')}>
			Small Button
		</Button.Tertiary>
	);
};
export const TertiaryDisabled = () => {
	return (
		<Button.Tertiary disabled onClick={action('clicked')}>
			Disabled Button
		</Button.Tertiary>
	);
};
export const TertiaryDisabledFocusable = () => {
	return (
		<Button.Tertiary disabled focusable onClick={action('clicked')}>
			Disabled Focusable Button
		</Button.Tertiary>
	);
};
export const TertiaryAsLink = () => {
	return (
		<Button.Tertiary onClick={action('clicked')} as="a" href="pouet">
			This is an anchor
		</Button.Tertiary>
	);
};

export const Icon = () => {
	return (
		<Button.Icon onClick={action('clicked')} icon="talend-plus">
			Button with icon
		</Button.Icon>
	);
};
export const IconDisabled = () => {
	return (
		<Button.Icon disabled onClick={action('clicked')} icon="talend-plus">
			Disabled Button
		</Button.Icon>
	);
};
export const IconDisabledFocusable = () => {
	return (
		<Button.Icon disabled focusable onClick={action('clicked')} icon="talend-plus">
			Disabled Focusable Button
		</Button.Icon>
	);
};
export const IconAsLink = () => {
	return (
		<Button.Icon onClick={action('clicked')} as="a" href="pouet" icon="talend-plus">
			This is an anchor
		</Button.Icon>
	);
};

export const SkeletonButton = () => {
	return <Skeleton.Button />;
};
export const SkeletonButtonSmall = () => {
	return <Skeleton.Button small />;
};
export const SkeletonButtonIcon = () => {
	return <Skeleton.Icon />;
};

export const TooltipButton = () => {
	return (
		<Tooltip title="Relevant information about contacting the support">
			<Button.Primary onClick={action('clicked')} icon="talend-bubbles">
				Contact support
			</Button.Primary>
		</Tooltip>
	);
};

export const Loading = {
	render: (props: Story) => {
		const [loading, isLoading] = React.useState(false);
		return (
			<Tooltip title="Relevant description of the basic button">
				<Button.Primary
					icon="talend-check"
					loading={loading}
					onClick={() => {
						isLoading(true);
						setTimeout(() => isLoading(false), 3000);
					}}
					{...props}
				>
					Async call to action
				</Button.Primary>
			</Tooltip>
		);
	},
};
