import React from 'react';
import { fireEvent, within } from '@testing-library/react';

import Form from '../../components/Form';

import ThemeManager from './ThemeManager';

export default {
	title: 'Themes/Theme Manager',
	component: ThemeManager,
};

const TenantPreferences = () => {
	const [disabled, setDisabled] = React.useState(true);
	return (
		<Form>
			<Form.Fieldset
				legend={<Form.Switch onChange={() => setDisabled(!disabled)} label="Use custom themes" />}
				disabled={disabled}
			>
				{disabled || <ThemeManager />}
			</Form.Fieldset>
		</Form>
	);
};

export const Disabled = () => {
	return <TenantPreferences />;
};

export const Enabled = () => {
	return <TenantPreferences />;
};
Enabled.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	fireEvent.click(await canvas.findByText('Use custom themes'));
};

export const EditLightMode = () => {
	return <TenantPreferences />;
};
EditLightMode.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	fireEvent.click(await canvas.findByText('Use custom themes'));
	fireEvent.click(await canvas.findByText('Edit light theme'));
};

export const EditDarkMode = () => {
	return <TenantPreferences />;
};
EditDarkMode.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	fireEvent.click(await canvas.findByText('Use custom themes'));
	fireEvent.click(await canvas.findByText('Edit dark theme'));
};
