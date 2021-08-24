module.exports = {
	testConcurrency: 10,
	apiKey: process.env.APPLITOOLS_API_KEY,
	batchId: process.env.APPLITOOLS_BATCH_ID,
	batchName: 'Design System - Storybook',
	browser: [
		{ width: 1366, height: 768, name: 'chrome' },
		{ width: 1366, height: 768, name: 'safari' },
		{ deviceName: 'ipad' },
	],
	showLogs: false,
	waitBeforeScreenshot: 250,
};
