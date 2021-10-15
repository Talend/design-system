import React from 'react';
import Status from '.';

export default {
	component: Status,
};

export const InProgress = () => <Status.InProgress />;
export const Successful = () => <Status.Successful />;
export const Failed = () => <Status.Failed />;
export const Canceled = () => <Status.Canceled />;
export const Warning = () => <Status.Canceled />;
export const CustomSuccessful = () => <Status.Successful>Done</Status.Successful>;

export const InProgressIcon = () => <Status.InProgress hideLabel />;
export const SuccessfulIcon = () => <Status.Successful hideLabel />;
export const FailedIcon = () => <Status.Failed hideLabel />;
export const WarningIcon = () => <Status.Warning hideLabel />;
export const CanceledIcon = () => <Status.Canceled hideLabel />;
export const CustomInProgressIcon = () => (
	<Status.InProgress hideLabel>Wait until it's loading</Status.InProgress>
);
