describe('Company page', () => {
	beforeEach(() => {
		cy.visit('#company');
		cy.contains('About us');
	});

	Cypress.Skolaris.testViewports(() => {
		cy.get('img').should('be.visible');
	});

	it('Changes language', () => {
		cy.changeLanguage('Česky');
		cy.contains('O nás');
	});
});
