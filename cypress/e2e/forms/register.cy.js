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

	it('Fills out the form', () => {
		cy.get('material-textfield[params*="textInput: school"]').click().find('input').type('Test school');
		cy.get('material-select[params*="value: country"]:visible').click();
		cy.get('.mdc-menu-surface--open').contains('Czech Republic').click();
		cy.get('material-checkbox[params*="checked: form.consent"]').scrollIntoView().click();
		cy.get('material-button:contains("Continue"):visible').click();

		cy.contains('Enter your details').should('be.visible');
		cy.get('material-textfield[params*="textInput: firstName"]').click().find('input').type('Martin');
		cy.get('material-textfield[params*="textInput: lastName"]').click().find('input').type('Klemsa');
		cy.get('material-textfield[params*="textInput: email"]').click().find('input').type('martin.klemsa@skolaris.net');
		cy.get('material-button:contains("Register"):visible').find('button').should('be.enabled');
	});
});
