describe('Order placed page', () => {
	beforeEach(() => {
		cy.visit('#orderplaced');
		cy.contains('Your order has been accepted');
	});

	Cypress.Skolaris.testViewports(() => {
		cy.get('img').should('be.visible');
	});

	it('Changes language', () => {
		cy.changeLanguage('Česky');
		cy.contains('Vaše objednávka byla přijata');
	});
});
