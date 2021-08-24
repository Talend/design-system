module.exports = {
	accessibilityValidation: { level: 'AA', guidelinesVersion: 'WCAG_2_0' },
	apiKey: process.env.APPLITOOLS_API_KEY,
	batchId: process.env.APPLITOOLS_BATCH_ID,
	batchName: 'Design System - Storybook',
	browser: [
		{ width: 1366, height: 768, name: 'chrome' },
		{ width: 1366, height: 768, name: 'chrome-one-version-back' },
		{ width: 1366, height: 768, name: 'safari' },
		{ width: 1366, height: 768, name: 'safari-one-version-back' },
		{ width: 1366, height: 768, name: 'firefox' },
		{ width: 1366, height: 768, name: 'firefox-one-version-back' },
		{ width: 1366, height: 768, name: 'edgechromium' },
		{ width: 1366, height: 768, name: 'edgechromium-one-version-back' },
	],
	showLogs: false,
	testConcurrency: 10,
	waitBeforeScreenshot: 250,
};
