import DefaultTheme from 'vitepress/theme';
import {inject} from '@vercel/analytics';
import {h} from 'vue';
import Apoyo from './Apoyo.vue';
import type {Theme} from 'vitepress';
import Inicio from './Inicio.vue';
import Versiones from './Versiones.vue';
import './estilo.css';

export default {
	extends: DefaultTheme,
	// al final de cada página de la guía: la tarjeta para invitar un café
	Layout: () => h(DefaultTheme.Layout, null, {'doc-after': () => h(Apoyo)}),
	enhanceApp({app}) {
		// Vercel Web Analytics: solo en el navegador (no al generar las páginas); cuenta también la navegación entre páginas
		if (!import.meta.env.SSR) inject({framework: 'vitepress'});
		app.component('Inicio', Inicio);
		app.component('Versiones', Versiones);
		app.component('Apoyo', Apoyo);
	},
} satisfies Theme;
