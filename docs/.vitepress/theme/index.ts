import DefaultTheme from 'vitepress/theme';
import type {Theme} from 'vitepress';
import Inicio from './Inicio.vue';
import Versiones from './Versiones.vue';
import './estilo.css';

export default {
	extends: DefaultTheme,
	enhanceApp({app}) {
		app.component('Inicio', Inicio);
		app.component('Versiones', Versiones);
	},
} satisfies Theme;
