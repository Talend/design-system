import React from 'react';
import { render } from '../../../test-utils';
import Layout from '.';

describe('Layout', () => {
	test('Nav collapses', () => {
		const { getByTestId } = render(<Layout nav={<div>Nav</div>} main={<div>Main</div>} />);
		const toggle = getByTestId('nav.toggle');
		expect(toggle.classList.contains('nav__button--colapsed')).toBeFalsy();
		toggle.click();
		expect(toggle.classList.contains('nav__button--colapsed')).toBeTruthy();
		toggle.click();
		expect(toggle.classList.contains('nav__button--colapsed')).toBeFalsy();
	});
});
