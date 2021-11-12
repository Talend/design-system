import React from 'react';

export function Item({ hit, components }) {
	return (
		<a
			href={hit.url?.replace(/iframe.html\?id=(.*)&/, '?path=/docs/$1&')}
			target="_parent"
			className="aa-ItemLink"
		>
			<div className="aa-ItemContent">
				<div className="aa-ItemContentBody">
					<div className="aa-ItemContentTitle">
						<components.Snippet hit={hit} attribute="title" />
					</div>
					<div className="aa-ItemContentDescription">
						<components.Snippet hit={hit} attribute="content" />
					</div>
				</div>
			</div>
		</a>
	);
}
