import React from 'react';

export function Item({ hit, components }) {
	return (
		<a
			className="aa-ItemLink"
			href={hit.url?.replace(/\/iframe.html\?id=(.*)&/, '/?path=/docs/$1&')}
			target="_parent"
		>
			<div className="aa-ItemWrapper">
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
			</div>
		</a>
	);
}
