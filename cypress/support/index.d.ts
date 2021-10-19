/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable<Subject> {
		/**
		 * Mount story using Theme Provider
		 */
		mount(jsx: React.ReactNode): void;

		/**
		 * Get one or more DOM elements by data-testid attribute
		 */
		getByTestId(
			dataTestId: string,
			options?: Partial<Loggable & Timeoutable & Withinable>,
		): Chainable<any>;
	}
}
