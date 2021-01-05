/// <reference types="cypress" />

context('<Button />', () => {
	beforeEach(() => {
		cy.visit('/iframe.html?id=components-button--loading');
	});

	it('should be focusable', () => {
		cy.get('.btn').focus();
	});

	it('should load', () => {
		cy.get('.btn')
			.should('have.attr', 'aria-busy', 'false')
			.click()
			.should('have.attr', 'aria-busy', 'true')
			.wait(3000)
			.should('have.attr', 'aria-busy', 'false');
	});

	it('should have a tooltip', () => {
		cy.get('.btn')
			.focus()
			.should('have.attr', 'aria-describedby')
			.then(describedBy =>
				cy.get(`#${describedBy}`).should('have.text', 'Relevant description of the basic button'),
			);
	});
});
