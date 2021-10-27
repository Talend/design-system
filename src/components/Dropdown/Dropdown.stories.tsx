import React from 'react';
import Dropdown from '.';
import Button from '../Button';

export default {
	component: Dropdown,
};

export const WithIcons = () => (
	<Dropdown
		as={Button.Destructive}
		aria-label="Custom menu"
		items={[
			{
				icon: 'talend-upload',
				label: 'En haut',
				onClick: () => console.log('En haut click'),
				href: 'http://google.com',
			},
			{
				icon: 'talend-caret-down',
				label: 'En bas',
				onClick: () => console.log('En bas click'),
				href: 'http://google.com',
			},
			{
				icon: 'talend-arrow-left',
				label: 'À gauche',
				onClick: () => console.log('À gauche click'),
				href: 'http://google.com',
			},
			{
				icon: 'talend-arrow-right',
				label: 'À droite',
				onClick: () => console.log('À droite click'),
				href: 'http://google.com',
			},
			{
				icon: 'talend-hadoop',
				label: 'CES ANNÉES LÀÀÀÀ',
				onClick: () => console.log('CES ANNÉES LÀÀÀÀ click'),
				href: 'http://google.com',
			},
		]}
	>
		Menu
	</Dropdown>
);

export const Dividers = () => (
	<Dropdown
		as={Button.Destructive}
		aria-label="Custom menu"
		items={[
			{
				label: 'With',
				href: 'http://google.com',
			},
			{
				divider: true,
			},
			{
				label: 'Di',
				href: 'http://google.com',
			},
			{
				divider: true,
			},
			{
				label: 'Vi',
				href: 'http://google.com',
			},
			{
				divider: true,
			},
			{
				label: 'Ders',
				href: 'http://google.com',
			},
		]}
	>
		Menu
	</Dropdown>
);

export const WithManyItems = () => (
	<Dropdown
		as={Button.Destructive}
		aria-label="Custom menu"
		items={[
			{
				href: 'http://google.com',
				label: "Etre ou n'être pas, c'est là la question",
			},
			{
				href: 'http://google.com',
				label: "S'il est plus noble dans l'esprit de souffrir",
			},
			{
				href: 'http://google.com',
				label: "Les piqûres et les flèches de l'affreuse fortune",
			},
			{
				href: 'http://google.com',
				label: 'Ou de prendre les armes contre une mer de troubles',
			},
			{
				href: 'http://google.com',
				label: "Et en s'opposant à eux, les finir ? Mourir, dormir",
			},
			{
				href: 'http://google.com',
				label: 'Rien de plus; et par ce sommeil dire : Nous terminons',
			},
			{
				href: 'http://google.com',
				label: 'Les peines du cœur, et dix mille chocs naturels',
			},
			{
				href: 'http://google.com',
				label: "Dont la chair est héritière, c'est une consommation",
			},
			{
				href: 'http://google.com',
				label: 'Ardemment désirable. Mourir, dormir',
			},
			{
				href: 'http://google.com',
				label: 'Dormir, peut-être rêver! Ah, voilà le mal',
			},
			{
				href: 'http://google.com',
				label: 'Car, dans ce sommeil de la mort, quels rêves aura-t-on',
			},
			{
				href: 'http://google.com',
				label: 'Quand on a dépouillé cette enveloppe mortelle',
			},
			{
				href: 'http://google.com',
				label: "C'est là ce qui fait penser : c'est là la raison",
			},
			{
				href: 'http://google.com',
				label: 'Qui donne à la calamité une vie si longue',
			},
			{
				href: 'http://google.com',
				label: 'Car qui voudrait supporter les coups, et les injures du temps',
			},
			{
				href: 'http://google.com',
				label: "Les torts de l'oppresseur, les dédains de l'orgueilleux",
			},
			{
				href: 'http://google.com',
				label: "Les angoisses d'un amour méprisé, les délais de la justice",
			},
			{
				href: 'http://google.com',
				label: "L'insolence des grandes places et les rebuts",
			},
			{
				href: 'http://google.com',
				label: "Que le mérite patient essuie de l'homme indigne",
			},
			{
				href: 'http://google.com',
				label: 'Quand il peut faire son quietus',
			},
			{
				href: 'http://google.com',
				label: 'Avec une simple aiguille à tête ? qui voudrait porter ces fardeaux',
			},
			{
				href: 'http://google.com',
				label: 'Sangloter, suer sous une fatigante vie',
			},
			{
				href: 'http://google.com',
				label: 'Mais cette crainte de quelque chose après la mort',
			},
			{
				href: 'http://google.com',
				label: 'Ce pays ignoré, des bornes duquel',
			},
			{
				href: 'http://google.com',
				label: 'Nul voyageur ne revient, embarrasse la volonté',
			},
		]}
	>
		Menu
	</Dropdown>
);

export const Default = () => (
	<Dropdown
		as={Button.Destructive}
		aria-label="Custom menu"
		items={[
			{
				icon: 'talend-file-json-o',
				label: 'Support',
				href: 'http://google.com',
				onClick: () => console.log('Support click'),
			},
			{
				divider: true,
			},
			{
				label: 'Management Console',
				onClick: () => console.log('Management Console click'),
			},
			{
				icon: 'talend-file-json-o',
				label: 'Account & Subscription',
				onClick: () => console.log('Account & Subscription click'),
			},
			{
				divider: true,
			},
			{
				label: 'Logout',
				onClick: () => console.log('Logout click'),
			},
		]}
	>
		Menu
	</Dropdown>
);
