import React from 'react';

export function Item({ hit, components }) {
	return (
		<a href={hit.url} target="_parent" className="aa-ItemLink">
			<div className="aa-ItemContent">
				<div className="aa-ItemTitle">
					<components.Highlight hit={hit} attribute="content" />
				</div>
			</div>
		</a>
	);
}
