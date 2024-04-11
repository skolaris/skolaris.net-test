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

	it('Opens the quality case study', () => {
		cy.get('section[data-pagescroll-label="power"]')
			.find('material-button')
			.contains('Learn more')
			.click();

		cy.contains('Improving the quality of education').should('be.visible');
	});

	it('Opens the budget case study', () => {
		cy.get('section[data-pagescroll-label="value"]')
			.find('material-button')
			.contains('Learn more')
			.click();

		cy.contains('Keeping your budget').should('be.visible');
	});

	it('Navigates to order page', () => {
		cy.get('material-button:contains("Order now"):visible').click();
		cy.contains('Order Skolaris').should('be.visible');
	});

	it('Navigates to registration page', () => {
		cy.get('material-button:contains("Try free"):visible').click();
		cy.contains('Try Skolaris free').should('be.visible');
	});
});
