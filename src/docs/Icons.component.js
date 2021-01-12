import React from 'react';
import { IconGallery, IconItem } from '@storybook/components';
import { Form, Icon, IconsProvider, ThemeProvider, tokens } from '../index';

export const Icons = () => {
	const [icons, setIds] = React.useState([]);
	const [query, setQuery] = React.useState('');
	const [transform, setTransform] = React.useState('');
	const [useCurrentColor, setUseCurrentColor] = React.useState(true);
	const [currentColor, setCurrentColor] = React.useState(tokens.colors.gray800);
	const [background, setBackground] = React.useState(true);

	React.useEffect(() => {
		IconsProvider.getAllIconIds().then(setIds);
	}, []);

	function onChangeQuery(event) {
		setQuery(event.target.value);
	}

	function onChangeTransform(event) {
		setTransform(event.target.value);
	}

	return (
		<>
			<ThemeProvider>
				<IconsProvider
					bundles={[
						'https://statics-dev.cloud.talend.com/@talend/icons/6.7.0/dist/svg-bundle/all.svg',
					]}
				/>
				<Form>
					<Form.Search label="Search" onChange={onChangeQuery} />
					<Form.Select
						label="Transform"
						onChange={onChangeTransform}
						values={['', 'rotate-45', 'rotate-90']}
					/>
					<Form.Switch
						label="Use current color"
						onChange={() => setUseCurrentColor(!useCurrentColor)}
						checked={!!useCurrentColor}
					/>
					<Form.Color
						label="Current color"
						onChange={event => setCurrentColor(event.target.value)}
						value={currentColor}
						disabled={!useCurrentColor}
					/>
					<Form.Checkbox
						label="Background"
						onChange={() => setBackground(!background)}
						checked={!!background}
					/>
				</Form>
			</ThemeProvider>
			<IconGallery style={{ color: currentColor }}>
				{icons
					.filter(iconName => iconName.includes(query))
					.map((iconName, index) => (
						<IconItem key={index} name={iconName}>
							<Icon
								name={iconName}
								style={{ width: '4rem', height: '4rem' }}
								transform={transform}
								currentColor={useCurrentColor ? currentColor : null}
								background={background}
							/>
						</IconItem>
					))}
			</IconGallery>
		</>
	);
};
