import React from 'react';
import Status from './';

export const render = ({ variant, ...rest }) => {
	const Component = Status[variant] || Status;
	Component.displayName = variant ? `Status.${variant}` : 'Status';
	return <Component {...rest} />;
};

export const InProgress = {
	args: {
		variant: 'InProgress',
	},
	render,
};
export const Successful = {
	args: {
		variant: 'Successful',
	},
	render,
};
export const Failed = {
	args: {
		variant: 'Failed',
	},
	render,
};
export const Warning = {
	args: {
		variant: 'Warning',
	},
	render,
};
export const Canceled = {
	args: {
		variant: 'Canceled',
	},
	render,
};

export const Custom = {
	args: {
		variant: 'Successful',
		children: 'Youpi',
	},
	render,
};


export const InProgressWithoutLabel = {
	args: {
		hideLabel: true,
		variant: 'InProgress',
	},
	render,
};
export const SuccessfulWithoutLabel = {
	args: {
		hideLabel: true,
		variant: 'Successful',
	},
	render,
};
export const FailedWithoutLabel = {
	args: {
		hideLabel: true,
		variant: 'Failed',
	},
	render,
};
export const WarningWithoutLabel = {
	args: {
		hideLabel: true,
		variant: 'Warning',
	},
	render,
};
export const CanceledWithoutLabel = {
	args: {
		hideLabel: true,
		variant: 'Canceled',
	},
	render,
};

export const CustomWithoutLabel = {
	args: {
		hideLabel: true,
		variant: 'InProgress',
		children: 'Wait until it is loading',
	},
	render,
};
