import React from 'react';
import Dropdown from '.';
import Button from '../Button';
import Link from '../Link';
import Divider from '../Divider';
import { createModuleResolutionCache } from 'typescript';

export default {
	component: Dropdown,
};

export const Default = () => (
	<Dropdown
		as={Button.Destructive}
		aria-label="Custom menu"
		items={[
			{
				icon: 'talend-file-json-o',
				label: 'Support',
				'data-feature': 'actiondropdown.items',
				href: 'http://google.com',
				onClick: () => console.log('document 1 click'),
			},
			{
				divider: true,
			},
			{
				label: 'Management Console',
				'data-feature': 'actiondropdown.items',
				onClick: () => console.log('document 2 click'),
			},
			{
				icon: 'talend-file-json-o',
				label: 'Account & Subscription',
				'data-feature': 'actiondropdown.items',
				onClick: () => console.log('document 1 click'),
			},
			{
				divider: true,
			},
			{
				label: 'Logout',
				'data-feature': 'actiondropdown.items',
				onClick: () => console.log('document 2 click'),
			},
		]}
	>
		Menu
	</Dropdown>
);

export const ElementsAsItems = () => (
	<Dropdown
		as={Button.Primary}
		aria-label="Custom menu"
		items={[
			<Link iconBefore="talend-dataprep" href="pouet">
				Lorem ipsum
			</Link>,
			<Button onClick={() => console.log('clicked')} icon="talend-plus">
				This is an anchor
			</Button>,
			<></>,
			<Button onClick={() => console.log('clicked')}>Dolor</Button>,
			<Button onClick={() => console.log('clicked')}>Sit amet</Button>,
		]}
	>
		Menu
	</Dropdown>
);
