import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// FIXME
// import { namespaces as designSystemNamespaces } from '@talend/locales-tui-design-system/namespaces';
// import { locales as designSystemLocales } from '@talend/locales-tui-design-system/locales';

const designSystemNamespaces = [];
const designSystemLocales = {};

i18n.use(initReactI18next).init({
	debug: true,
	defaultNS: designSystemNamespaces[0],
	fallbackLng: 'en',
	fallbackNS: designSystemNamespaces,
	interpolation: {
		escapeValue: false,
	},
	ns: designSystemNamespaces,
	resources: Object.keys(designSystemLocales).reduce(
		(resources, language) => ({
			...resources,
			[language]: {
				...designSystemLocales[language],
			},
		}),
		{},
	),
	wait: true,
});

window.i18n = i18n;

export default i18n;
