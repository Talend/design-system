/// <reference types="cypress" />

context('<Toggle />', () => {
	beforeEach(() => {
		cy.visit('/iframe.html?id=components-toggle--active&viewMode=story');
	});

	it('should toggle', () => {
		cy.get('[aria-pressed]')
			.should('have.attr', 'aria-pressed', 'true')
			.click()
			.should('have.attr', 'aria-pressed', 'false')
			.click()
			.should('have.attr', 'aria-pressed', 'true');
	});
});
