import { defineConfig } from 'cypress';
require('dotenv').config();

export default defineConfig({
	projectId: process.env.CYPRESS_PROJECT_ID,
	e2e: {
		baseUrl: 'https://demoqa.com',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
