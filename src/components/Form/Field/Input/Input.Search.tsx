import React from 'react';

import Input, { InputProps } from './Input';
import { Icon } from '../../../Icon';

function Search(props: InputProps) {
	return <Input {...props} type="search" before={<Icon name="talend-search" />} />;
}

export default Search;
