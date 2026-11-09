export default {
	estilo: 'infografia',
	title: '¿Correr en cinta es igual que en la calle? 🏃',
	voice: 'narrador',
	music: 'synth',
	hud: [
		{tipo: 'etiqueta', texto: 'EL CUERPO MIENTE', x: 80, y: 200, ancla: 'izquierda', color: '#1B1B1F', entrada: 'ninguna'},
		{tipo: 'texto', texto: 'CINTA', fuente: 'mono', tam: 28, fondo: '#FFD43B', relleno: '4px 14px', radio: 6, color: '#141414', x: 960, y: 200, entrada: 'ninguna', sombra: false},
	],
	scenes: [
		{say: 'En la cinta corres a doce kilómetros por hora.', show: 'En la cinta corres a 12 km por hora.', capas: [
			{tipo: 'medidor', valor: 12, max: 20, unidad: 'km/h', x: 540, y: 850, tam: 460, en: 'corres'},
			{tipo: 'globo', texto: 'SIEMPRE IGUAL', x: 800, y: 540, cola: 'abajo', en: 'cinta', entrada: 'rebote'}]},
		{say: 'En la calle, el viento te frena y gastas más.', capas: [
			{tipo: 'barra', titulo: 'Gasto en la cinta', valor: 60, color: '#F5B841', x: 540, y: 620, ancho: 800},
			{tipo: 'barra', titulo: 'Gasto en la calle', valor: 85, color: '#E5484D', x: 540, y: 780, ancho: 800, en: 'calle'},
			{tipo: 'emoji', texto: '🏃', tam: 300, x: 420, y: 1120, mover: {a: [640, 1120]}},
			{tipo: 'forma', forma: 'flecha', ancho: 220, x: 860, y: 1120, color: '#E5484D', rotar: 180, en: 'viento'}]},
		{say: 'Y la mayoría de ustedes votó por la calle.', capas: [
			{tipo: 'votacion', cabecera: 'VOTACIÓN · CAPÍTULO 1', titulo: '¿Dónde corres?', opciones: [{texto: 'Calle', valor: 72, sub: 'más viento, más gasto'}, {texto: 'Cinta', valor: 28}], x: 540, y: 900}]},
		{say: 'Y entonces sonó el teléfono.', capas: [
			{tipo: 'estado', dia: 'DÍA 2', hora: '23:59', bateria: 12, aviso: 'LLAMADAS PERDIDAS', contador: 1, x: 540, y: 330, entrada: 'ninguna'},
			{tipo: 'noticia', titular: 'TREN DETENIDO EN EL TÚNEL', cintillo: 'PASAJEROS ESTUVIERON 3 HORAS EN EL TÚNEL · NO HUBO HERIDOS', x: 540, y: 560, vivo: true, ancho: 920},
			{tipo: 'telefono', x: 540, y: 1080, ancho: 420, pantalla: '#1E2440', en: 'teléfono', entrada: 'deslizar-arriba', capas: [
				{tipo: 'texto', texto: 'Yo', tam: 64, color: '#FFFFFF', x: 0, y: -240, mayusculas: false},
				{tipo: 'onda', x: 0, y: 0, ancho: 300, color: '#B9C3FF', siempre: true},
				{tipo: 'forma', forma: 'circulo', ancho: 100, color: '#E5484D', x: 0, y: 280}]}]},
		{type: 'eleccion', say: '¿Le abres la puerta a Darío?', formato: 'botones', pregunta: '¿LE ABRES A DARÍO?', opciones: [{texto: 'Abrir', sub: 'le abres la puerta'}, {texto: 'No abrir', sub: 'te quedas adentro'}]},
	],
};
