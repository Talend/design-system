import React from 'react';
import { fireEvent, within } from '@testing-library/react';

import ThemeManager, { Properties } from './ThemeManager';

import lightDictionary from '../light/dictionary';
import darkDictionary from '../dark/dictionary';

export default {
	title: 'Themes/Theme Manager',
	component: ThemeManager,
};

type Theme = {
	id: 'light' | 'dark';
	enabled: boolean;
	properties: { [key: string]: string };
};

const Preferences = () => {
	const [isLightThemeEnabled, setDarkThemeEnabled] = React.useState(false);
	const [isDarkThemeEnabled, setLightThemeEnabled] = React.useState(false);
	const [formData, setFormData] = React.useState<Theme>();

	const onLightThemeSubmitHandler = (properties: Properties) => {
		setFormData({
			id: 'light',
			enabled: isLightThemeEnabled,
			properties,
		});
	};

	const onDarkThemeSubmitHandler = (properties: Properties) => {
		setFormData({
			id: 'dark',
			enabled: isDarkThemeEnabled,
			properties,
		});
	};

	return (
		<>
			{formData && (
				<code>
					<pre>{JSON.stringify(formData, null, 3)}</pre>
				</code>
			)}
			<ThemeManager
				isDarkThemeEnabled={isLightThemeEnabled}
				isLightThemeEnabled={isDarkThemeEnabled}
				setDarkThemeEnabled={setDarkThemeEnabled}
				setLightThemeEnabled={setLightThemeEnabled}
				darkProperties={Object.fromEntries(darkDictionary.map(token => [token.name, token.value]))}
				lightProperties={Object.fromEntries(
					lightDictionary.map(token => [token.name, token.value]),
				)}
				onDarkThemeSubmit={onDarkThemeSubmitHandler}
				onLightThemeSubmit={onLightThemeSubmitHandler}
			/>
		</>
	);
};

export const Disabled = () => {
	return <Preferences />;
};

export const Enabled = () => {
	return <Preferences />;
};
Enabled.play = async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
	const canvas = within(canvasElement);
	fireEvent.click(await canvas.findByText('Enable custom dark theme'));
	fireEvent.click(await canvas.findByText('Enable custom light theme'));
};

export const EditLightMode = () => {
	return <Preferences />;
};
EditLightMode.play = async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
	const canvas = within(canvasElement);
	fireEvent.click(await canvas.findByText('Enable custom light theme'));
	fireEvent.click(await canvas.findByText('Edit light theme'));
};

export const EditDarkMode = () => {
	return <Preferences />;
};
EditDarkMode.play = async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
	const canvas = within(canvasElement);
	fireEvent.click(await canvas.findByText('Enable custom dark theme'));
	fireEvent.click(await canvas.findByText('Edit dark theme'));
};
