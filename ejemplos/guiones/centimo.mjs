export default {
	estilo: 'mesa',
	title: '¿Un millón o un centavo que se duplica? 💰',
	voice: 'narrador',
	music: 'synth',
	scenes: [
		{say: '¿Qué prefieres, un millón hoy o un centavo que se duplica cada día?', capas: [
			{tipo: 'modelo', forma: 'moneda', ancho: 620, x: 540, y: 980, rotacion: [0, 0, 0], girar3d: [0, 70, 0], tamano: 1.3}]},
		{say: 'El día treinta, el centavo ya vale más de cinco millones.', show: 'El día 30, el centavo ya vale más de 5 millones.', capas: [
			{tipo: 'contador', formato: 'lcd', de: 1, a: 30, prefijo: 'DÍA ', x: 540, y: 560, tam: 70, duracion: 2.5, en: 0},
			{tipo: 'modelo', forma: 'moneda', cantidad: 40, crecer: true, ancho: 700, alto: 760, x: 540, y: 1000, rotacion: [18, 0, 0], girar3d: [0, 12, 0], distancia: 9, camaraY: 2},
			{tipo: 'contador', formato: 'lcd', de: 0.01, a: 5368709, curva: 'exponencial', decimales: 0, sufijo: ' $', x: 540, y: 1430, tam: 76, color: '#5CFF7A', en: 0}]},
		{say: 'Por eso el interés compuesto es tan poderoso.', capas: [
			{tipo: 'componente', nombre: 'Barras', props: {valores: [2, 5, 13]}, x: 540, y: 1050, en: 'interés', entrada: 'aparecer'},
			{tipo: 'texto', texto: 'INTERÉS *COMPUESTO*', tam: 96, x: 540, y: 620, en: 'interés'}]},
		{type: 'cta'},
	],
};
