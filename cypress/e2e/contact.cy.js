describe('Contact page', () => {
	beforeEach(() => {
		cy.visit('#contact');
		cy.contains('Get in touch');
	});

	Cypress.Skolaris.testViewports(() => {
		cy.get('img').should('be.visible');
	});

	it('Changes language', () => {
		cy.changeLanguage('Česky');
		cy.contains('Napište nám');
	});
});
