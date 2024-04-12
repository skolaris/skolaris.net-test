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

	it('Fills out the form', () => {
		cy.get('material-textfield[params*="textInput: school"]').click().find('input').type('Test school');
		cy.get('material-select[params*="value: country"]:visible').click();
		cy.get('.mdc-menu-surface--open').contains('Czech Republic').click();
		cy.get('material-button[params*="click: getRecommendation"]').click();
		cy.get('.mdc-card:visible');
		cy.get('material-checkbox[params*="checked: form.consent"]').scrollIntoView().click();
		cy.get('material-button:contains("Continue"):visible').click();

		cy.contains('Choose your payment method').should('be.visible');
		cy.get('material-button:contains("Continue without payment"):visible').click();

		cy.get('material-textfield[params*="textInput: firstName"]').click().find('input').type('Martin');
		cy.get('material-textfield[params*="textInput: lastName"]').click().find('input').type('Klemsa');
		cy.get('material-textfield[params*="textInput: address1"]').click().find('input').type('Sochorova 21');
		cy.get('material-textfield[params*="textInput: zip"]').click().find('input').type('61600');
		cy.get('material-textfield[params*="textInput: taxNumber"]').click().find('input').type('0123456789');
		cy.get('material-textfield[params*="textInput: email"]').click().find('input').type('martin.klemsa@skolaris.net');
		cy.get('material-button:contains("Place order"):visible').find('button').should('be.enabled');
	});
});
