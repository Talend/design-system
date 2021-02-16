import React from 'react';
import { Helmet } from 'react-helmet';

const Fonts = () => (
	<Helmet>
		<link rel="preconnect" href="https://fonts.gstatic.com" />
		<link
			href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Inconsolata:wght@300;400;500;600;700;800;900&display=swap"
			rel="stylesheet"
		/>
	</Helmet>
);

export default Fonts;
