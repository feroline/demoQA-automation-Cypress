import { defineConfig } from 'cypress';
import 'module-alias/register';

require('dotenv').config();

export default defineConfig({
	projectId: process.env.CYPRESS_PROJECT_ID,
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
			});
		},
	},
});
