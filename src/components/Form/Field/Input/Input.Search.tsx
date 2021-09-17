import React from 'react';

import InputBase, { InputProps } from './InputBase';
import { Icon } from '../../../Icon';

const Search = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return (
		<InputBase
			{...props}
			type="search"
			// @ts-ignore
			before={<Icon name="talend-search" />}
			ref={ref}
		/>
	);
});

export default Search;
