import {defineConfig} from 'vitepress';

const SITIO = 'https://morfeo-docs-two.vercel.app';

export default defineConfig({
	lang: 'es-MX',
	title: 'Morfeo',
	description: 'Videos verticales animados desde código: voz, música, subtítulos, 11 estilos y mundos 3D.',
	appearance: 'dark',
		cleanUrls: true,
	sitemap: {hostname: SITIO},
	lastUpdated: true,
	head: [
		['link', {rel: 'icon', href: '/logo.svg'}],
		['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
		['link', {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}],
		['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600..800&family=Instrument+Sans:wght@400..700&family=JetBrains+Mono:wght@400;600&display=swap'}],
		['meta', {name: 'theme-color', content: '#0f0d15'}],
		['meta', {property: 'og:image', content: `${SITIO}/img/galeria.jpg`}],
		['meta', {property: 'og:type', content: 'website'}],
		['meta', {property: 'og:site_name', content: 'Morfeo'}],
		['meta', {property: 'og:locale', content: 'es_MX'}],
		['meta', {name: 'twitter:card', content: 'summary_large_image'}],
		['meta', {name: 'twitter:image', content: `${SITIO}/img/galeria.jpg`}],
		// verificación de Google Search Console: pega aquí el código que te da (meta google-site-verification)
		...(process.env.GOOGLE_VERIFICACION ? [['meta', {name: 'google-site-verification', content: process.env.GOOGLE_VERIFICACION}] as [string, Record<string, string>]] : []),
		// datos estructurados: Google entiende que es una aplicación gratuita
		[
			'script',
			{type: 'application/ld+json'},
			JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'SoftwareApplication',
				name: 'Morfeo',
				applicationCategory: 'MultimediaApplication',
				operatingSystem: 'Windows, macOS, Linux',
				description: 'Crea videos verticales animados (YouTube Shorts, TikTok, Reels) desde código o con tu IA: voz, música, subtítulos, 11 estilos, mundos 3D y fórmulas de historia.',
				url: SITIO,
				downloadUrl: 'https://www.npmjs.com/package/morfeo',
				inLanguage: 'es',
				offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD'},
				author: {'@type': 'Person', name: 'Uriel Gómez'},
			}),
		],
	],
	// por página: URL canónica y título/descripción para compartir (Google, WhatsApp, X)
	transformHead({pageData, title, description}) {
		const ruta = pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '');
		const url = `${SITIO}/${ruta}`;
		return [
			['link', {rel: 'canonical', href: url}],
			['meta', {property: 'og:url', content: url}],
			['meta', {property: 'og:title', content: title}],
			['meta', {property: 'og:description', content: description}],
			['meta', {name: 'twitter:title', content: title}],
			['meta', {name: 'twitter:description', content: description}],
		];
	},
	themeConfig: {
		logo: '/logo.svg',
		nav: [
			{text: 'Guía', link: '/guia/empezar'},
			{text: 'Estilos', link: '/guia/estilos'},
			{text: 'Capas', link: '/guia/capas'},
			{text: 'Referencia', link: '/referencia/config'},
			{text: 'Versiones', link: '/historial'},
			{text: 'npm', link: 'https://www.npmjs.com/package/morfeo'},
			{text: 'Apoyar', link: 'https://buymeacoffee.com/ureck'},
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
		socialLinks: [
			{icon: 'github', link: 'https://github.com/UreckChan/morfeo'},
			{icon: 'buymeacoffee', link: 'https://buymeacoffee.com/ureck', ariaLabel: 'Invítame un café'},
		],
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
		footer: {message: 'Uso gratuito para crear videos, incluso comerciales. Código propiedad de Uriel Gómez. <a href="https://buymeacoffee.com/ureck" target="_blank" rel="noopener">Invítame un café</a>', copyright: '© 2026 Uriel Gómez'},
	},
});
