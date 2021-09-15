import React from 'react';
import { Story } from '@storybook/react';
import Dropdown from '.';
import DropdownBuilder from './private/Dropdown';

export default {
	component: Dropdown,
};

export function test(props: Story) {
	return (
		<DropdownBuilder
			{...props}
			ariaLabel="pouet"
			menuButton="button"
			menuButtonLabel={"click me I'm pretty"}
			items={[
				[<h3>Hey look</h3>, <button>I am pretty too</button>, <button>I am pretty as well</button>],
				[
					<h3>I am another section</h3>,
					<a href="lol" target="_blank">
						I am a bad bad link
					</a>,
				],
			]}
		/>
	);
}
