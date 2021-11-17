import React from 'react';

import ThemeProvider from './components/ThemeProvider';
import Link from './components/Link';
import { light, dark } from './themes';

export default {
	title: 'ThemeProviderDemo',
};

export const Nested = () => {
	return (
		<ThemeProvider theme={light}>
			<ThemeProvider theme={dark}>
				<Link>Link</Link>
			</ThemeProvider>
		</ThemeProvider>
	);
};
