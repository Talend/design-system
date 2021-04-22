import React from 'react';
import { render } from '../../../test-utils';
import { IconsProvider } from './index';

describe('IconsProvider', () => {
	test('should match snapshot', () => {
		const { container } = render(<IconsProvider />);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('should prevent multiple instance creation', () => {
		const { container } = render(
			<>
				<IconsProvider />
				<IconsProvider />
			</>
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
