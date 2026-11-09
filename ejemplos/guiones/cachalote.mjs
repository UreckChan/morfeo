export default {
	estilo: 'documental',
	title: 'El cachalote, el gigante del océano 🐋',
	voice: 'narrador',
	music: 'ballad',
	scenes: [
		{say: '¿Sabías que las orcas le tienen miedo a un solo animal?', capas: [
			{tipo: 'emoji', texto: '🐋', tam: 520, x: 540, y: 1000, entrada: 'deslizar-der', mover: {a: [480, 980]}, flotar: 18},
			{tipo: 'chip', texto: '×5', x: 760, y: 1260, en: 'animal', entrada: 'rebote', sonido: 'pop'}]},
		{type: 'dato', say: 'El cachalote puede bajar a más de dos mil metros.', show: 'El cachalote puede bajar a más de 2.000 metros.', valor: 2000, sufijo: ' m', formato: 'chip', tam: 110,
			camara: {zoom: [1.15, 1]}, fondo: {tipo: 'degradado', colores: ['#062A52', '#01060E']},
			capas: [{tipo: 'emoji', texto: '🐋', tam: 300, x: 540, y: 620, rotar: 70, mover: {a: [540, 1500]}}]},
		{say: 'Y forman un círculo para proteger a sus crías.', capas: [
			{tipo: 'grupo', x: 540, y: 1000, repetir: 8, disposicion: 'circulo', radio: 300, orientar: 90, retraso: 0.08, girar: 6, capa: {tipo: 'emoji', texto: '🐋', tam: 150}},
			{tipo: 'emoji', texto: '🐳', tam: 140, x: 540, y: 1000, en: 'crías', entrada: 'rebote'}]},
		{say: 'Su sonido llega a doscientos treinta decibeles.', show: 'Su sonido llega a 230 decibeles.', capas: [
			{tipo: 'contador', de: 0, a: 230, sufijo: ' dB', formato: 'lcd', x: 540, y: 980, en: 'sonido', tam: 120},
			{tipo: 'grupo', x: 540, y: 1250, repetir: 12, disposicion: 'aleatorio', area: [900, 300], capa: {tipo: 'emoji', texto: '🐟', tam: 70, flotar: 10}}]},
		{type: 'cta'},
	],
};
