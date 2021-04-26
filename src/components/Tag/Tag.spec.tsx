/// <reference types="cypress" />
import React from 'react';
import { mount } from '@cypress/react';

import Tag from './';
import ThemeProvider from '../ThemeProvider';

function mountWithTheme(children: React.ReactNode) {
	return mount(<ThemeProvider>{children}</ThemeProvider>);
}

context('<Tag />', () => {
	it('should render', () => {
		mountWithTheme(<Tag>Lorem ipsum</Tag>);
		cy.get('.tag').should('have.text', 'Lorem ipsum');
	});
});
