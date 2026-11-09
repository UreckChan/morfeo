export default {
	estilo: '3d',
	title: '¿A dónde va el agua de tu casa? 🚽',
	voice: 'narrador',
	music: 'house',
	scenes: [
		{say: 'Así llega el agua de tu casa hasta el drenaje.', capas: [
			{tipo: 'escena3d', src: 'casa.glb', fondo: '#BFE3FF', animacion: true,
				camara: [{en: 0, pos: [12, 7, 16], mirar: [0, 0, 0]}, {en: 'drenaje', pos: [5, 1.5, 9], mirar: [0, -1, 1]}]}]},
		{say: 'Quitamos la tierra y el agua viaja por el tubo.', capas: [
			{tipo: 'escena3d', src: 'casa.glb', fondo: '#BFE3FF', animacion: true, velocidad: 1.2,
				ocultar: [{nodo: 'Tierra', en: 'tierra'}, {nodo: 'Pasto', en: 'tierra'}],
				camara: [{en: 0, pos: [0, 3, 12], mirar: [0, -1, 1]}, {en: 'tubo', pos: [3, -1, 6], mirar: [1, -1.5, 1], fov: 35}]}]},
		{type: 'cta'},
	],
};
