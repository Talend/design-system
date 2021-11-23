import React from 'react';
import algoliasearch from 'algoliasearch';
import { getAlgoliaResults } from '@algolia/autocomplete-js';

import { Autocomplete } from './AlgoliaAutocomplete.component';

const searchClient = algoliasearch(
	process.env.STORYBOOK_ALGOLIA_SEARCH_APP_ID,
	process.env.STORYBOOK_ALGOLIA_SEARCH_API_KEY,
);

function SearchBar() {
	return (
		<div style={{ maxWidth: '33%', margin: '0 auto' }}>
			<Autocomplete
				openOnFocus
				placeholder="Search for design system topic..."
				getSources={({ query }) => [
					{
						sourceId: 'pages',
						getItems() {
							return getAlgoliaResults({
								searchClient,
								queries: [
									{
										indexName: process.env.STORYBOOK_ALGOLIA_SEARCH_INDEX,
										query,
									},
								],
							});
						},
						templates: {
							item({ item, components }) {
								return (
									<a
										className="aa-ItemLink"
										href={item.url?.replace(/\/iframe.html\?id=(.*)&/, '/?path=/docs/$1&')}
										target="_parent"
									>
										<div className="aa-ItemWrapper">
											<div className="aa-ItemContent">
												<div className="aa-ItemContentBody">
													<div className="aa-ItemContentTitle">
														<components.Snippet item={item} attribute="title" />
													</div>
													<div className="aa-ItemContentDescription">
														<components.Snippet hit={item} attribute="content" />
													</div>
												</div>
											</div>
										</div>
									</a>
								);
							},
						},
					},
				]}
			/>
		</div>
	);
}

export default SearchBar;
