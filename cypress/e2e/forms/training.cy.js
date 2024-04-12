describe('Training page', () => {
	beforeEach(() => {
		cy.visit('#training');
		cy.contains('Školení');
	});

	Cypress.Skolaris.testViewports(() => {
		cy.get('img').should('be.visible');
	});

	it('Changes language', () => {
		cy.changeLanguage('Česky');
		cy.contains('Přihlašovací formulář');
	});
});
