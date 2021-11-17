import React from 'react';
import { fireEvent, within } from '@testing-library/react';

import ThemeManager from './ThemeManager';

export default {
	title: 'Themes/Theme Manager',
	component: ThemeManager,
};

const TenantPreferences = () => {
	const [isLightThemeEnabled, setDarkThemeEnabled] = React.useState(false);
	const [isDarkThemeEnabled, setLightThemeEnabled] = React.useState(false);
	return (
		<ThemeManager
			isDarkThemeEnabled={isLightThemeEnabled}
			isLightThemeEnabled={isDarkThemeEnabled}
			setDarkThemeEnabled={setDarkThemeEnabled}
			setLightThemeEnabled={setLightThemeEnabled}
			onThemeSubmit={() => {}}
		/>
	);
};

export const Disabled = () => {
	return <TenantPreferences />;
};

export const Enabled = () => {
	return <TenantPreferences />;
};
Enabled.play = async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
	const canvas = within(canvasElement);
	fireEvent.click(await canvas.findByText('Enable custom dark theme'));
	fireEvent.click(await canvas.findByText('Enable custom light theme'));
};

export const EditLightMode = () => {
	return <TenantPreferences />;
};
EditLightMode.play = async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
	const canvas = within(canvasElement);
	fireEvent.click(await canvas.findByText('Enable custom light theme'));
	fireEvent.click(await canvas.findByText('Edit light theme'));
};

export const EditDarkMode = () => {
	return <TenantPreferences />;
};
EditDarkMode.play = async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
	const canvas = within(canvasElement);
	fireEvent.click(await canvas.findByText('Enable custom dark theme'));
	fireEvent.click(await canvas.findByText('Edit dark theme'));
};
