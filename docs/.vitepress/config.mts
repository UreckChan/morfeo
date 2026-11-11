import {defineConfig} from 'vitepress';

export default defineConfig({
	lang: 'es-MX',
	title: 'Morfeo',
	description: 'Videos verticales animados desde código: voz, música, subtítulos y 10 estilos.',
	base: '/morfeo/',
	cleanUrls: true,
	lastUpdated: true,
	head: [
		['link', {rel: 'icon', href: '/morfeo/logo.svg'}],
		['meta', {property: 'og:image', content: 'https://ureckchan.github.io/morfeo/img/galeria.jpg'}],
	],
	themeConfig: {
		logo: '/logo.svg',
		nav: [
			{text: 'Guía', link: '/guia/empezar'},
			{text: 'Estilos', link: '/guia/estilos'},
			{text: 'Capas', link: '/guia/capas'},
			{text: 'Referencia', link: '/referencia/config'},
			{text: 'Novedades', link: '/novedades'},
			{text: 'npm', link: 'https://www.npmjs.com/package/morfeo'},
		],
		sidebar: [
			{
				text: 'Empezar',
				items: [
					{text: 'Instalación', link: '/guia/empezar'},
					{text: 'Tu primer video', link: '/guia/primer-video'},
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
					{text: 'Novedades', link: '/novedades'},
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
