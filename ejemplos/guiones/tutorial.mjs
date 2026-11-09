export default {
	estilo: 'explicativo',
	title: 'Haz videos con código 🎬',
	voice: 'narrador',
	music: 'chillpop',
	scenes: [
		{type: 'titular', say: 'Paso uno: instala Morfeo en tu computadora.', etiqueta: '// paso 1 · instala', texto: 'INSTALA *MORFEO*', numero: 1,
			capas: [{tipo: 'tarjeta', cabecera: '// terminal', titulo: 'npx morfeo instalar', x: 540, y: 1080, ancho: 820, en: 'morfeo', sonido: 'pop'},
				{tipo: 'chip', texto: 'AUTOMÁTICO', color: '#E0302A', fondo: '#fff', borde: '#E0302A', x: 300, y: 1330, rotar: -6, en: 'computadora', entrada: 'rebote', sonido: 'tick'}]},
		{type: 'lista', say: 'Morfeo pone la voz, la música y los subtítulos por ti.', titulo: 'Lo hace *solo*', cabecera: '// paso 2',
			items: [{texto: 'Voz', check: 'voz'}, {texto: 'Música', check: 'música'}, {texto: 'Subtítulos', check: 'subtítulos'}]},
		{type: 'comparar', say: 'Tu guion pasa de aburrido a viral.', a: 'ABURRIDO', b: '¡VIRAL!', at: 'viral'},
		{type: 'telefono', say: 'Y lo publicas directo desde tu teléfono.', capasPantalla: [{tipo: 'emoji', texto: '🚀', tam: 200, x: 0, y: -120, flotar: true}, {tipo: 'texto', texto: 'PUBLICADO', tam: 60, color: '#fff', x: 0, y: 160, en: 'publicas'}]},
		{type: 'dato', say: 'Un video al día puede llegar a más de un millón de visitas.', de: 100, valor: 1284930, curva: 'exponencial', texto: 'visitas', tam: 170},
		{type: 'cta'},
	],
};
