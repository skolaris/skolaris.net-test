describe('References page', () => {
	beforeEach(() => {
		cy.visit('#references');
		cy.contains('Our customers');
	});

	Cypress.Skolaris.testViewports(() => {
		cy.get('img').should('be.visible');
	});

	it('Changes language', () => {
		cy.changeLanguage('Česky');
		cy.contains('Naši zákazníci');
	});
});
