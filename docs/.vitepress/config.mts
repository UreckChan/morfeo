import {defineConfig} from 'vitepress';

export default defineConfig({
	lang: 'es-MX',
	title: 'Morfeo',
	description: 'Videos verticales animados desde código: voz, música, subtítulos, 11 estilos y mundos 3D.',
	appearance: 'dark',
		cleanUrls: true,
	lastUpdated: true,
	head: [
		['link', {rel: 'icon', href: '/logo.svg'}],
		['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
		['link', {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}],
		['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600..800&family=Instrument+Sans:wght@400..700&family=JetBrains+Mono:wght@400;600&display=swap'}],
		['meta', {name: 'theme-color', content: '#0f0d15'}],
		['meta', {property: 'og:title', content: 'Morfeo: videos verticales animados desde código'}],
		['meta', {property: 'og:image', content: 'https://morfeo-docs.vercel.app/img/galeria.jpg'}],
	],
	themeConfig: {
		logo: '/logo.svg',
		nav: [
			{text: 'Guía', link: '/guia/empezar'},
			{text: 'Estilos', link: '/guia/estilos'},
			{text: 'Capas', link: '/guia/capas'},
			{text: 'Referencia', link: '/referencia/config'},
			{text: 'Versiones', link: '/historial'},
			{text: 'npm', link: 'https://www.npmjs.com/package/morfeo'},
		],
		sidebar: [
			{
				text: 'Empezar',
				items: [
					{text: 'Instalación', link: '/guia/empezar'},
					{text: 'Tu primer video', link: '/guia/primer-video'},
					{text: 'Del tema al reel terminado', link: '/guia/estudio'},
				],
			},
			{
				text: 'Diseño',
				items: [
					{text: 'Estilos', link: '/guia/estilos'},
					{text: 'Escenas', link: '/guia/escenas'},
					{text: 'Capas', link: '/guia/capas'},
					{text: 'Animación y cámara', link: '/guia/animacion'},
					{text: 'Mundo, anotaciones y estructura', link: '/guia/mundo'},
					{text: 'Maqueta 3D (diorama)', link: '/guia/maqueta'},
					{text: 'Historias, series y fórmulas', link: '/guia/historias'},
					{text: 'Series, HUD y personajes', link: '/guia/series'},
					{text: 'Objetos 2D y 3D', link: '/guia/recursos'},
					{text: '3D', link: '/guia/3d'},
					{text: 'Componentes propios', link: '/guia/componentes'},
				],
			},
			{
				text: 'Sonido e IA',
				items: [
					{text: 'Voces y música', link: '/guia/voces-musica'},
					{text: 'Guiones e imágenes con IA', link: '/guia/ia'},
				],
			},
			{
				text: 'Referencia',
				items: [
					{text: 'morfeo.config.mjs', link: '/referencia/config'},
					{text: 'Comandos', link: '/referencia/cli'},
					{text: 'Uso desde código', link: '/referencia/api'},
					{text: 'Historial de versiones', link: '/historial'},
					{text: 'Licencia', link: '/licencia'},
				],
			},
		],
		socialLinks: [{icon: 'github', link: 'https://github.com/UreckChan/morfeo'}],
		search: {
			provider: 'local',
			options: {
				translations: {
					button: {buttonText: 'Buscar', buttonAriaLabel: 'Buscar'},
					modal: {noResultsText: 'Sin resultados para', resetButtonTitle: 'Borrar', footer: {selectText: 'elegir', navigateText: 'moverse', closeText: 'cerrar'}},
				},
			},
		},
		editLink: {pattern: 'https://github.com/UreckChan/morfeo/edit/main/docs/:path', text: 'Proponer un cambio a esta página'},
		docFooter: {prev: 'Anterior', next: 'Siguiente'},
		outline: {label: 'En esta página', level: [2, 3]},
		lastUpdated: {text: 'Actualizado'},
		returnToTopLabel: 'Volver arriba',
		sidebarMenuLabel: 'Menú',
		darkModeSwitchLabel: 'Tema',
		footer: {message: 'Uso gratuito para crear videos, incluso comerciales. Código propiedad de Uriel Gómez.', copyright: '© 2026 Uriel Gómez'},
	},
});
