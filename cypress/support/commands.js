// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('openMenu', () => {
	cy.get('.mdc-top-app-bar__section--align-end material-menu-button:visible')
		.click();
});

Cypress.Commands.add('changeLanguage', (language) => {
	cy.get('language-selector:visible')
		.click();

	cy.get('.mdc-menu-surface--open')
		.contains(language)
		.click();
});

