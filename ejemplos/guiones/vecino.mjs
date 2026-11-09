export default {
	estilo: 'historia',
	title: 'El vecino que movía los muebles 🛋️',
	voice: 'narrador',
	music: 'ballad',
	scenes: [
		{say: 'Cada noche, alguien movía los muebles de la casa.', capas: [
			{tipo: 'forma', forma: 'rect', ancho: 560, alto: 200, color: '#8E2A22', radio: 30, x: 540, y: 1180, entrada: 'aparecer'},
			{tipo: 'imagen', src: 'silueta.svg', ancho: 220, x: 180, y: 1080, entrada: 'deslizar-izq', mover: {a: [360, 1080]}, sombra: false}]},
		{say: 'Para el día diez, ya nadie dormía tranquilo.', show: 'Para el día 10, ya nadie dormía tranquilo.', transicion: 'zoom', capas: [
			{tipo: 'texto', texto: 'DÍA 10', tam: 170, color: '#FFD66B', x: 540, y: 820, en: 'día', entrada: 'rebote', sonido: 'tick'},
			{tipo: 'emoji', texto: '🕒', tam: 200, x: 540, y: 1180, latir: true}]},
		{say: 'Y entonces, la policía encontró la verdad.', camara: {zoom: [1, 1.25], temblor: {fuerza: 14}}, capas: [
			{tipo: 'imagen', src: 'silueta.svg', ancho: 300, x: 540, y: 1100},
			{tipo: 'chip', texto: '¡JA!', x: 700, y: 760, en: 'verdad', entrada: 'rebote', color: '#FFD66B'}]},
		{type: 'cta'},
	],
};
