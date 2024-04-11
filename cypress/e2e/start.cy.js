describe('Start page', () => {
	beforeEach(() => {
		cy.visit('');
		cy.contains('School Timetable Creation');
	});

	Cypress.Skolaris.testViewports(() => {
		cy.get('.top-text:visible');
		cy.get('img').should('be.visible');
		cy.get('.scroller:visible');
	});

	it('Changes language', () => {
		cy.changeLanguage('Česky');
		cy.contains('Tvorba rozvrhů');
	});
});
