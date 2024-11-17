import { defineConfig } from 'cypress';
import 'module-alias/register';

require('dotenv').config();
const { verifyDownloadTasks, isFileExist } = require('cy-verify-downloads');

export default defineConfig({
	projectId: process.env.CYPRESS_PROJECT_ID,
	chromeWebSecurity: false,
	retries: 2,
	e2e: {
		pageLoadTimeout: 10000,
		baseUrl: 'https://demoqa.com',
		setupNodeEvents(on, config) {
			on('task', {
				pause(ms) {
					return new Promise((resolve) => {
						setTimeout(() => resolve(null), ms);
					});
				},
				verifyDownloadTasks,
				isFileExist,
			});
		},
	},
});
