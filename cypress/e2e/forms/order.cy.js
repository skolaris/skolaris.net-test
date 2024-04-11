describe('Order page', () => {
	beforeEach(() => {
		cy.visit('#order');
		cy.contains('Order Skolaris');
	});

	Cypress.Skolaris.testViewports(() => {
		cy.get('img').should('be.visible');
	});

	it('Changes language', () => {
		cy.changeLanguage('Česky');
		cy.contains('Objednat Skolaris');
	});
});
