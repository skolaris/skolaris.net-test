describe('Register page', () => {
	beforeEach(() => {
		cy.visit('#register');
		cy.contains('Try Skolaris free');
	});

	Cypress.Skolaris.testViewports(() => {
		cy.get('img').should('be.visible');
	});

	it('Changes language', () => {
		cy.changeLanguage('Česky');
		cy.contains('Vyzkoušejte Skolaris');
	});
});
