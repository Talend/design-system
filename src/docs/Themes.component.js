import React from 'react';
import styled from 'styled-components';
import Grid from './Grid.component';
import tokens from '../tokens';

export function isNumeric(str) {
	if (typeof str != 'string') return false;
	return !isNaN(str) && !isNaN(parseFloat(str));
}

export function getTokenNameByValue(value) {
	let designToken = null;
	Object.entries(tokens.colors).some(([k, v]) => {
		if (typeof v === 'object' && v !== null) {
			const match = Object.entries(v).find(([kn, vn]) => isNumeric(kn) && vn === value);
			if (match) {
				designToken = `${k}[${match[0]}]`;
			}
		}
	});
	return designToken || 'there is no design token used here!';
}

const normalizeToken = v => (typeof v === 'string' ? v : v[500]);

const SCategory = styled.div`
	h2 + div > div {
		border-radius: 4px 4px 0 0;
	}

	> div:last-child > div {
		border-radius: 0 0 4px 4px;
	}
`;

const SGrid = styled(Grid)`
	gap: 1rem;

	> div {
		display: flex;
		align-items: center;
		height: 7rem;
		font-weight: 600;

		> div {
			display: flex;
			align-items: center;
			font-weight: normal;
			height: 100%;
			width: 100%;
			border-top: 1px solid ${tokens.colors.gray[50]};
		}
	}

	> div + div {
		color: ${tokens.colors.gray[400]};
		background: ${tokens.colors.gray[50]};
		justify-content: center;

		> div {
			margin: 0 ${tokens.space.m};
			border-top: 1px solid ${tokens.colors.gray[75]};
		}
	}

	> div + div + div {
		color: ${tokens.colors.gray[0]};
		background: #323e48;

		> div {
			border-top: 1px solid ${tokens.colors.gray[500]};
		}
	}
`;

const SToken = styled.div`
	display: flex;
	align-items: center;
`;

const STokenValue = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	font-family: 'Inconsolata', monospace;
`;

const STokenSVG = styled.svg`
	flex-shrink: 0;
	margin: ${tokens.space.m};
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 -4px 6px rgba(255, 255, 255, 0.15);
	border-radius: 9999px;
`;

const Token = ({ name, theme }) => (
	<SToken>
		<div>
			<STokenSVG viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" height={40} widht={40}>
				<circle cx="20" cy="20" r="20" fill={normalizeToken(theme.colors[name])} />
			</STokenSVG>
			<STokenValue>
				<span>{getTokenNameByValue(normalizeToken(theme.colors[name]))}</span>
				<span>{normalizeToken(theme.colors[name])}</span>
			</STokenValue>
		</div>
	</SToken>
);

const Themes = ({ themes }) => {
	const keys = Object.keys(themes[0].colors);
	const categories = { uncategorized: [] };
	keys.forEach(key => {
		const categoryArr = key.split(/(?=[A-Z])/);
		const categoryName = categoryArr[0];
		if (categoryArr.length <= 2 && keys.filter(k => k.startsWith(categoryName)).length === 1) {
			categories.uncategorized.push(key);
		} else {
			if (!categories[categoryName]) {
				categories[categoryName] = [];
			}
			categories[categoryName].push(key);
		}
	});
	return Object.entries(categories).map(([categoryName, categoryValues], i) => {
		return (
			<SCategory key={i}>
				<h2 className="sbdocs sbdocs-h2">
					{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
				</h2>
				<SGrid key={categoryName}>
					<div>Alias</div>
					<div>☀️ Light Theme</div>
					<div>🌙 Dark Theme</div>
				</SGrid>
				{categoryValues.map((key, j) => {
					return (
						<SGrid key={j}>
							<div>
								<div>{key}</div>
							</div>
							{themes.map((theme, k) => (
								<Token key={k} theme={theme} name={key} />
							))}
						</SGrid>
					);
				})}
			</SCategory>
		);
	});
};

export default Themes;
