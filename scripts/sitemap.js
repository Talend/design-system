const fs = require('fs');

try {
	const json = fs.readFileSync('./storybook-static/stories.json');
	const data = JSON.parse(json);
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(
	new Set(
		Object.values(data.stories).map(
			({ id }) =>
				`<url><loc>https://design.talend.com/iframe.html?id=${
					id.split('--')[0]
				}&amp;viewMode=docs</loc></url>`,
		),
	),
).join('\n')}
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
