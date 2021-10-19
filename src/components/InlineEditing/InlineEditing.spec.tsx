/// <reference types="cypress" />

import React from 'react';
import { composeStories } from '@storybook/testing-react';

import * as Stories from './InlineEditing.stories';

const { Default, Textarea } = composeStories(Stories);

context('<InlineEditing />', () => {
	it('should go to edit mode when clicking on the button', () => {
		cy.mount(<Default />);
		cy.get('button').click();
		cy.get('input').should('have.attr', 'type', 'text');
	});

	it('should go to edit mode when double clicking on the span', () => {
		cy.mount(<Default />);
		cy.get('.c-inline-editing--static').dblclick();
		cy.get('input').should('have.attr', 'type', 'text');
	});

	it('should render Textarea', () => {
		cy.mount(<Textarea />);
		cy.get('button').click();
		cy.get('textarea').should('exist');
	});

	it('should restore value on Esc', () => {
		cy.mount(<Default />);
		cy.get('button').click();
		cy.get('input').focus();
		cy.get('input').type('{selectall}{del}blah');
		cy.get('input').should('have.value', 'blah');
		cy.get('input').type('{esc}');
		cy.get('span').should('exist');
		cy.get('span').contains('Lorem ipsum dolor sit amet');
	});

	it('should validate on Enter', () => {
		cy.mount(<Default />);
		cy.get('button').click();
		cy.get('input').focus();
		cy.get('input').type('{selectall}{del}blah');
		cy.get('input').should('have.value', 'blah');
		cy.get('input').type('{enter}');
		cy.get('span').should('exist');
		cy.get('span').contains('blah');
	});
});
