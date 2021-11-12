import React from 'react';
import algoliasearch from 'algoliasearch';
import { getAlgoliaResults } from '@algolia/autocomplete-js';

import { Autocomplete } from './AlgoliaAutocomplete.component';
import { Item } from './AlgoliaItem.component';

const searchClient = algoliasearch('9MAEU8VF6E', '1ccc24ce1685b14139d476bc26f79802');

function Algolia() {
	return (
		<div style={{ maxWidth: '33%', margin: '0 auto' }}>
			<Autocomplete
				openOnFocus
				placeholder="Search for..."
				getSources={({ query }) => [
					{
						sourceId: 'pages',
						getItems() {
							return getAlgoliaResults({
								searchClient,
								queries: [
									{
										indexName:
											'netlify_d6d66424-7754-4257-bb5e-cc6de2f9d9aa_frassinier-chore-storybook-algolia_all',
										query,
									},
								],
							});
						},
						templates: {
							item({ item, components }) {
								return <Item hit={item} components={components} />;
							},
						},
					},
				]}
			/>
		</div>
	);
}

export default Algolia;
