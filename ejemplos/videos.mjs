// Tus videos: {id: video}. Cada escena dice algo ("say") y lo ilustra en pantalla.
// Tipos: title, year, text, icon, compare, card, dialog, cta (y aliens, memory, morph).
// Colores: '#RRGGBB' o [r, g, b]. Íconos: question, warning, star, zap, eye, book, trophy...
import {defineVideos} from 'morfeo';

const B = '#FFFFFF'; // blanco
const A = '#FFD400'; // amarillo
const R = '#FF4050'; // rojo
const C = '#50DCFF'; // cian

export default defineVideos({
	cielo: {
		title: '¿Por qué el cielo es azul? 🌤️ | Dato curioso',
		voice: 'narrador', // alias de morfeo.config.mjs (o directo: 'em_alex')
		music: 'lofi', // lofi, lofi2, chillpop, synth, house, ballad, trap, un archivo './musica/x.mp3' o false
		scenes: [
			{type: 'title', say: '¿Sabías por qué el cielo es azul?', rows: [['¿POR QUÉ', B, 150], ['EL CIELO ES', B, 130], ['AZUL?', C, 250]], icon: 'question'},
			{type: 'text', say: 'La luz del sol trae todos los colores mezclados.', rows: [['LA LUZ TRAE', B, 140], ['TODOS LOS', B, 140], ['COLORES', A, 210]]},
			{type: 'icon', say: 'Pero al chocar con el aire, el azul rebota mucho más que el rojo.', icon: 'zap', label: 'EL AZUL REBOTA', color: C},
			{type: 'compare', say: 'Por eso de día vemos azul, y al atardecer, naranja.', a: ['DE DÍA', C], b: ['ATARDECER', R], at: 'atardecer', sizes: [220, 180]},
			{type: 'year', say: 'Lord Rayleigh lo explicó en mil ochocientos setenta y uno.', show: 'Lord Rayleigh lo explicó en 1871.', pre: 'RAYLEIGH', year: 1871, sub: 'DISPERSIÓN'},
			{type: 'cta'}, // dice marca.cta
		],
	},
});
