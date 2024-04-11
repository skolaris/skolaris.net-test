const { defineConfig } = require('cypress')

module.exports = defineConfig({
	projectId: 'bydj7m',
	viewportWidth: 1280,
	viewportHeight: 1024,
	e2e: {
		baseUrl: 'https://skolaris.net/devweb'
	},
	video: false
});
