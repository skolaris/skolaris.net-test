// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

const viewports = [
	'iphone-3',
	'iphone-6+',
	'iphone-x',
	'ipad-2',
	'ipad-mini',
	'macbook-11',
	'macbook-16',
	'samsung-note9',
	'samsung-s10',
	[800, 600],
	[1024, 768],
	[1280, 1024],
	[1920, 1200]
];

Cypress.Skolaris = {
	testViewports: asserter => {
		viewports.forEach(size => {
			it(`Displays correctly on ${size}`, () => {
				if (size instanceof Array)
					cy.viewport(size[0], size[1]);
				else
					cy.viewport(size);

				asserter();
			});
		});
	}
};
