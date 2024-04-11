describe('Partners page', () => {
	beforeEach(() => {
		cy.visit('#partners');
		cy.contains('Our partners');
	});

	Cypress.Skolaris.testViewports(() => {
		cy.get('img').should('be.visible');
	});

	it('Changes language', () => {
		cy.changeLanguage('Česky');
		cy.contains('Naši partneři');
	});
});
