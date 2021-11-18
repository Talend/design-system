import React, { KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button';
import Form from '../../components/Form';
import InlineMessage from '../../components/InlineMessage';

import dictionary from '../light/dictionary';

// @ts-ignore
import theme from './ThemeManager.scss';

type TokenType =
	| 'color'
	| 'gradient'
	| 'measure'
	| 'shadow'
	| 'typography'
	| 'radius'
	| 'border'
	| 'opacity'
	| 'breakpoint';

type Token = {
	name: string;
	type: TokenType;
	description: string;
	value: string;
};

type Tokens = Token[];

type ColorToken = Token & {
	hex: string;
	hsla: string;
};

export type Properties = {
	[key: string]: string;
};

type ThemeManagerProps = {
	isLightThemeEnabled: boolean;
	isDarkThemeEnabled: boolean;
	setLightThemeEnabled: (value: boolean) => void;
	setDarkThemeEnabled: (value: boolean) => void;
	lightProperties: Properties;
	darkProperties: Properties;
	onLightThemeSubmit: (properties: Properties) => void;
	onDarkThemeSubmit: (properties: Properties) => void;
};

enum STATE {
	ALL,
	LIGHT,
	DARK,
}

function groupBy(collection: {}[], property: string) {
	return collection.reduce((acc, cur) => {
		// @ts-ignore
		(acc[cur[property]] = acc[cur[property]] || []).push(cur);
		return acc;
	}, {});
}

function getLabel(token: Token) {
	return token.name
		.replace('coral', '')
		.split(/(?=[A-Z])/)
		.join(' ');
}

const ColorField = React.forwardRef(
	(
		{ token, property, ...rest }: { token: ColorToken; property?: string },
		ref: React.Ref<HTMLInputElement>,
	) => {
		const [color, setColor] = React.useState(property || token.value);
		return (
			<Form.FieldGroup
				label={getLabel(token)}
				description={token.description}
				suffix={
					<div
						style={{
							width: '3.2rem',
							height: '3.2rem',
							background: color,
							boxShadow: 'inset 8px 0px 8px 0px hsla(0, 0%, 50%, .1) ',
						}}
					/>
				}
			>
				{/*
				// @ts-ignore */}
				<Form.Text
					{...rest}
					defaultValue={property || token.value}
					onKeyUp={(event: KeyboardEvent): void =>
						setColor((event.target as HTMLInputElement).value)
					}
					ref={ref}
				/>
			</Form.FieldGroup>
		);
	},
);

const ThemeEditor = React.forwardRef(
	(
		{
			name,
			properties = {},
			onBack,
			onSubmit,
		}: {
			name: string;
			properties: Properties;
			onBack: () => void;
			onSubmit: (properties: Properties) => void;
		},
		ref: React.Ref<HTMLFormElement>,
	) => {
		const [visibleType, setVisibleType] = React.useState<TokenType>('color');
		const { register, handleSubmit } = useForm();

		let lastPath: string;
		return (
			<Form onSubmit={handleSubmit(onSubmit)} ref={ref}>
				<h1>{name}</h1>

				<InlineMessage.Warning
					title="Caution"
					description="Editing these values will impact all your users!"
					withBackground
				/>

				<div className={theme.categories}>
					{Object.entries(groupBy(dictionary, 'type')).map(([type, tokens], index) => {
						const isActive = visibleType === type;
						return (
							<>
								<div className={theme.category} data-show={isActive}>
									<Form.Fieldset key={index} legend={type}>
										<div className={theme.content}>
											{(tokens as Tokens).map((token: Token, key: number) => {
												const path = token.name.replace('coral', '').split(/(?=[A-Z])/);
												const slicedPath = path.slice(1, path.length - 1).join('');
												const isNewPath = slicedPath !== lastPath;
												if (isNewPath) {
													lastPath = slicedPath;
												}
												return type === 'color' ? (
													<div key={key} style={isNewPath ? { gridColumnStart: '1' } : {}}>
														<ColorField
															token={token as ColorToken}
															property={properties[token.name]}
															{...register(token.name)}
														/>
													</div>
												) : (
													<Form.Text
														key={key}
														label={getLabel(token)}
														description={token.description}
														defaultValue={properties[token.name] || token.value}
														{...register(token.name)}
													/>
												);
											})}
										</div>
									</Form.Fieldset>
								</div>
								<Button
									aria-current={isActive}
									className={theme.disclosure}
									onClick={() => setVisibleType(type as TokenType)}
								>
									{type}
								</Button>
							</>
						);
					})}
				</div>
				<Form.Buttons>
					<Button.Secondary onClick={onBack}>Back</Button.Secondary>
					<Button.Primary type="submit">Save</Button.Primary>
				</Form.Buttons>
			</Form>
		);
	},
);

const ThemeManager = ({
	isLightThemeEnabled,
	isDarkThemeEnabled,
	setLightThemeEnabled,
	setDarkThemeEnabled,
	lightProperties,
	darkProperties,
	onLightThemeSubmit,
	onDarkThemeSubmit,
}: ThemeManagerProps) => {
	const [state, setState] = React.useState(STATE.ALL);

	const goBack = () => {
		setState(STATE.ALL);
	};

	switch (state) {
		case STATE.LIGHT:
			return (
				<ThemeEditor
					name="Light"
					properties={lightProperties}
					onBack={goBack}
					onSubmit={onLightThemeSubmit}
				/>
			);
		case STATE.DARK:
			return (
				<ThemeEditor
					name="Dark"
					properties={darkProperties}
					onBack={goBack}
					onSubmit={onDarkThemeSubmit}
				/>
			);
		default:
			return (
				<div className={theme.manager}>
					{/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
					<ul role="list" className={theme.list}>
						<li>
							<Form>
								<Form.Fieldset>
									<figure className={theme.mode}>
										<img
											src="https://github.githubassets.com/images/modules/settings/color_modes/light_colorblind_preview.svg"
											alt=""
										/>
										<figcaption>
											<div className={theme.switch}>
												<Form.Switch
													onChange={() => setLightThemeEnabled(!isLightThemeEnabled)}
													label="Enable custom light theme"
													checked={isLightThemeEnabled}
												/>
											</div>
											{isLightThemeEnabled && (
												<Button.Secondary small onClick={() => setState(STATE.LIGHT)}>
													Edit light theme
												</Button.Secondary>
											)}
										</figcaption>
									</figure>
								</Form.Fieldset>
							</Form>
						</li>
						<li>
							<Form>
								<Form.Fieldset>
									<figure className={theme.mode}>
										<img
											src="https://github.githubassets.com/images/modules/settings/color_modes/dark_colorblind_preview.svg"
											alt=""
										/>
										<figcaption>
											<div className={theme.switch}>
												<Form.Switch
													onChange={() => setDarkThemeEnabled(!isDarkThemeEnabled)}
													label="Enable custom dark theme"
													checked={isDarkThemeEnabled}
												/>
											</div>
											{isDarkThemeEnabled && (
												<Button.Secondary small onClick={() => setState(STATE.DARK)}>
													Edit dark theme
												</Button.Secondary>
											)}
										</figcaption>
									</figure>
								</Form.Fieldset>
							</Form>
						</li>
					</ul>
				</div>
			);
	}
};

export default ThemeManager;
