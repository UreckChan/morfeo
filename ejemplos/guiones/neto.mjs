export default {
	estilo: 'serie',
	title: 'Neto, día 30 💘',
	voice: 'narrador',
	music: 'chillpop',
	hud: [
		{tipo: 'texto', texto: '📅 DÍA 30', fuente: 'texto', tam: 34, peso: 900, color: '#141414', fondo: '#FFFFFF', relleno: '8px 18px', radio: 12, x: 150, y: 200, entrada: 'ninguna'},
		{tipo: 'barra', titulo: 'Probabilidad con Ari', valor: 0, ancho: 560, x: 700, y: 205, entrada: 'ninguna', cambios: [{en: {escena: 3}, valor: 15}]},
	],
	scenes: [
		{say: 'Neto está enamorado desde la primaria.', capas: [
			{tipo: 'personaje', nombre: 'neto', pose: 'normal', poses: [{en: 'enamorado', pose: 'feliz'}], hablar: true, ancho: 520, x: 540, y: 1420},
			{tipo: 'chip', texto: 'DESDE 1° DE PRIMARIA', tam: 40, color: '#141414', fondo: '#FFFFFF', x: 760, y: 700, rotar: 6, en: 'primaria', entrada: 'rebote', sonido: 'pop'}]},
		{say: 'Pero ella ni siquiera sabe que existe.', capas: [
			{tipo: 'personaje', nombre: 'neto', pose: 'triste', ancho: 520, x: 540, y: 1420, entrada: 'ninguna'},
			{tipo: 'chat', x: 260, y: 640, ancho: 420, mensajes: [{usuario: 'lucia_xx', texto: 'quién es ese? 😂'}, {usuario: 'kevin99', texto: 'ánimo neto'}, {usuario: 'ari.oficial', texto: '¿?'}, {usuario: 'mrpato', texto: 'F'}]}]},
		{type: 'eleccion', say: '¿Qué cambia primero: el gimnasio o los granos?', opciones: [{texto: 'Gimnasio', sub: 'primero', emoji: '🏋️'}, {texto: 'Granos', sub: 'primero', emoji: '🧴'}]},
		{say: 'Síguenos para el día treinta y uno.', show: 'Síguenos para el día 31.', capas: [
			{tipo: 'seguir', texto: 'Mini series donde TÚ decides', x: 540, y: 700, pulsar: 1.0},
			{tipo: 'personaje', nombre: 'neto', pose: 'feliz', ancho: 480, x: 540, y: 1440}]},
	],
};
