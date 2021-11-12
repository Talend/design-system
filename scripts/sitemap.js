const fs = require('fs');

try {
	const json = fs.readFileSync('./storybook-static/stories.json');
	const data = JSON.parse(json);
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.values(data.stories)
	.reduce((acc, next) => {
		const { id } = next;
		if (!acc.some(storyId => storyId.split('--')[0] === id.split('--')[0])) acc.push(next.id);
		return acc;
	}, [])
	.map(
		id => `<url><loc>https://design.talend.com/iframe.html?id=${id}&amp;viewMode=docs</loc></url>`,
	)
	.join('\n')}
</urlset>`;

	fs.writeFile('./static/sitemap.xml', sitemap, err => {
		if (err) {
			console.error(err);
			return;
		}
	});
} catch (e) {
	console.error(
		'The file storybook-static/stories.json is not found! You should run `yarn extract-storybook` instead.',
		e,
	);
}
