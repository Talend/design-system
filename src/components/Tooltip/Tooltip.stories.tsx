import React from 'react';
import { action } from '@storybook/addon-actions';

import Tooltip from './Tooltip';
import Button from '../Button';

export const Template = props => (
	<Tooltip {...props}>
		<Button onClick={action('clicked')}>Lorem ipsum</Button>
	</Tooltip>
);

const defaultProps = {
	title: 'Relevant information about this basic button',
};

export const Top = Template.bind({});
Top.args = { ...defaultProps, placement: 'top' };

export const Right = Template.bind({});
Right.args = { ...defaultProps, placement: 'right' };

export const Bottom = Template.bind({});
Bottom.args = { ...defaultProps, placement: 'bottom' };

export const Left = Template.bind({});
Left.args = { ...defaultProps, placement: 'left' };

export const ShortOptional = () => (
	<Tooltip title="Lorem ipsum" optional>
		<span>Lorem ipsum</span>
	</Tooltip>
);
export const LongOptional = () => (
	<Tooltip
		title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tincidunt dui. Vestibulum lorem libero, consequat in odio at, pellentesque bibendum risus. Duis ullamcorper dolor sit amet purus porttitor, ac feugiat nulla viverra. Donec imperdiet feugiat nulla non scelerisque. Integer facilisis nisi quis nunc vehicula viverra. Etiam aliquam feugiat lorem in hendrerit. Nam vel elit dapibus, accumsan nisl at, posuere eros. Pellentesque euismod massa nec mollis dapibus. Aenean mollis magna dolor, quis dignissim orci suscipit a. Maecenas at augue odio. Mauris in lorem convallis, fringilla neque eu, laoreet ligula. Donec consequat quam sed est pulvinar, eu ultrices urna condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
		optional
	>
		<p style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tincidunt dui. Vestibulum
			lorem libero, consequat in odio at, pellentesque bibendum risus. Duis ullamcorper dolor sit
			amet purus porttitor, ac feugiat nulla viverra. Donec imperdiet feugiat nulla non scelerisque.
			Integer facilisis nisi quis nunc vehicula viverra. Etiam aliquam feugiat lorem in hendrerit.
			Nam vel elit dapibus, accumsan nisl at, posuere eros. Pellentesque euismod massa nec mollis
			dapibus. Aenean mollis magna dolor, quis dignissim orci suscipit a. Maecenas at augue odio.
			Mauris in lorem convallis, fringilla neque eu, laoreet ligula. Donec consequat quam sed est
			pulvinar, eu ultrices urna condimentum. Class aptent taciti sociosqu ad litora torquent per
			conubia nostra, per inceptos himenaeos.
		</p>
	</Tooltip>
);
LongOptional.decorators = [
	Story => (
		<div style={{ maxWidth: '30rem' }}>
			<Story />
		</div>
	),
];
