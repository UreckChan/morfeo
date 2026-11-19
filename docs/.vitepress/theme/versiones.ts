// Historial de versiones publicadas en npm. Lo usan la portada (últimas) y la página de historial (todas).
// Al publicar una versión: agrégala arriba y escribe su detalle en docs/historial.md con el ancla {#v0-x-y}.
export type Version = {
	v: string;
	fecha: string; // AAAA-MM-DD (hora de México)
	titulo: string;
	resumen: string;
	tipo: 'mayor' | 'menor' | 'arreglo';
};

export const VERSIONES: Version[] = [
	{
		v: '1.7.0',
		fecha: '2026-11-19',
		titulo: 'Negocios, deportes e historias de vida',
		resumen: 'Estilos de empresa (línea, corporativo, pizarra, datos), canchas, teatro y conferencias, gente de fondo, uniformes y personas que crecen.',
		tipo: 'menor',
	},
	{
		v: '1.6.0',
		fecha: '2026-11-18',
		titulo: 'De día, de noche y en la fogata',
		resumen: 'Campamento y recámara, correr por la calle, hora y clima en todos los lugares.',
		tipo: 'menor',
	},
	{
		v: '1.5.0',
		fecha: '2026-11-18',
		titulo: 'Historias en primera persona',
		resumen: 'Combi, gente sentada, tu teléfono con pantallas, monstruos, 22 personajes, suspenso y voces con emoción.',
		tipo: 'menor',
	},
	{
		v: '1.4.0',
		fecha: '2026-11-18',
		titulo: 'Reparto y series que se votan',
		resumen: 'Una voz por personaje y series interactivas que esperan el voto del público.',
		tipo: 'menor',
	},
	{
		v: '1.3.0',
		fecha: '2026-11-18',
		titulo: 'Publicar todos los días',
		resumen: 'El objeto dentro de la escena, estudio y cueva, calendario de temas, series encadenadas y carrusel con hilo.',
		tipo: 'menor',
	},
	{
		v: '1.2.1',
		fecha: '2026-11-17',
		titulo: 'Plano técnico',
		resumen: 'Ambiente plano: un edificio de alambre que se arma piso por piso con anotaciones de CAD; placa de fecha dorada.',
		tipo: 'menor',
	},
	{
		v: '1.2.0',
		fecha: '2026-11-17',
		titulo: 'El lugar sigue a la historia',
		resumen: 'Paisajes generados, ambiente auto, clima y desastres, juegos y documentos en pantalla, banderas, filas y 10 personajes.',
		tipo: 'menor',
	},
	{
		v: '1.1.0',
		fecha: '2026-11-17',
		titulo: 'Aprueba sin gastar',
		resumen: 'Voz de borrador gratis en previa y animática, voces de ElevenLabs más usadas, estilo desde tu web y revisión de destellos y franjas.',
		tipo: 'menor',
	},
	{
		v: '1.0.0',
		fecha: '2026-11-17',
		titulo: 'Primera versión estable',
		resumen: 'Música sin estática, estilo caricatura, primera persona, fila de personas y tu esencia en gustos.md; probada de punta a punta.',
		tipo: 'mayor',
	},
	{
		v: '0.9.0',
		fecha: '2026-11-17',
		titulo: 'Sonido y formatos nuevos',
		resumen: 'Efectos grabados CC0 que suenan solos, cierre ¿ya lo sabías?, marcador, reloj con lugar, cuerpo en rayos X y textos por red.',
		tipo: 'menor',
	},
	{
		v: '0.8.0',
		fecha: '2026-11-15',
		titulo: 'Motor de animación completo',
		resumen: 'Salidas de todos los tipos, énfasis en una palabra, anticipación, curvas con resorte y escalonado automático.',
		tipo: 'menor',
	},
	{
		v: '0.7.2',
		fecha: '2026-11-15',
		titulo: 'El control ya es un control',
		resumen: 'Búsqueda de modelos más precisa y 12 piezas nuevas de videojuegos y casa: ya son 157.',
		tipo: 'arreglo',
	},
	{
		v: '0.7.1',
		fecha: '2026-11-14',
		titulo: 'Ambientes en Windows',
		resumen: 'Los videos con ambiente y desenfoque ya renderizan en Windows; aviso claro cuando `tamano` se usa como tamaño en pantalla.',
		tipo: 'arreglo',
	},
	{
		v: '0.7.0',
		fecha: '2026-11-14',
		titulo: 'Skills para tu IA',
		resumen: 'Cuatro guías de oficio dentro del paquete: guion (ganchos e historia), animación, 3D y la ruta completa del video.',
		tipo: 'mayor',
	},
	{
		v: '0.6.7',
		fecha: '2026-11-14',
		titulo: 'Las piezas que faltaban',
		resumen: 'Lago, burbuja, código, músculo, doctor, bicicleta estática, confeti, registro y cable submarino: 145 piezas propias.',
		tipo: 'menor',
	},
	{
		v: '0.6.6',
		fecha: '2026-11-14',
		titulo: '51 piezas más',
		resumen: 'Música, animales, deporte, oficina, industria y espacio hechos en código: ya son 136 piezas propias.',
		tipo: 'menor',
	},
	{
		v: '0.6.5',
		fecha: '2026-11-14',
		titulo: 'Piezas de ingeniería y 5.500 modelos más',
		resumen: '85 piezas hechas en código (plomería, electricidad, electrónica, ciencia, ciudad), y las bibliotecas Quaternius, KayKit y Kenney completo en `recurso`.',
		tipo: 'menor',
	},
	{
		v: '0.6.4',
		fecha: '2026-11-14',
		titulo: 'El render ya no llena el disco',
		resumen: 'Borra el empaquetado temporal de cada render y los cachés viejos, que sumaban varios GB.',
		tipo: 'arreglo',
	},
	{
		v: '0.6.3',
		fecha: '2026-11-14',
		titulo: 'Tienda, calle y render más ágil',
		resumen: 'Ambientes tienda y calle, render --revisar y --cambiados, y postproceso ~14 % más rápido.',
		tipo: 'menor',
	},
	{
		v: '0.6.2',
		fecha: '2026-11-14',
		titulo: 'Texto legible sobre ambientes',
		resumen: 'Los estilos de papel se leen sobre un ambiente, titulares de dos renglones sin encimarse y sellos con caja.',
		tipo: 'arreglo',
	},
	{
		v: '0.6.1',
		fecha: '2026-11-13',
		titulo: 'Taller y oficina',
		resumen: 'Dos ambientes nuevos (taller y oficina), corte seco entre planos, whoosh en cada corte y planos mejor encuadrados.',
		tipo: 'menor',
	},
	{
		v: '0.6.0',
		fecha: '2026-11-13',
		titulo: 'Fondo vivo y cámara con ritmo',
		resumen: 'Ambientes 3D listos (cuarto gamer, sala, arcade), cortes en las palabras clave, postproceso, animática y una revisión que encuentra cuadros negros, tapados y quietos.',
		tipo: 'mayor',
	},
	{
		v: '0.5.1',
		fecha: '2026-11-13',
		titulo: 'Videos 3D sin textos fantasma',
		resumen: 'Los videos 3D renderizan máximo 3 cuadros a la vez con GPU, `revisar` reconoce "tú" y la página de npm apunta a morfeo.ureck.dev.',
		tipo: 'arreglo',
	},
	{
		v: '0.5.0',
		fecha: '2026-11-13',
		titulo: 'Del tema al reel terminado',
		resumen: 'Tu estilo en una página, investigación con fuentes, previa del gancho, revisión de voz y zona segura, portada y proyectos listos para Claude Code y Codex.',
		tipo: 'mayor',
	},
	{
		v: '0.4.0',
		fecha: '2026-11-12',
		titulo: 'Todas las fórmulas de historia',
		resumen: '11 fórmulas (serie, biografía, construiste, mito…) con bases listas, capas de series y documental, varios lugares por video y kit para armar.',
		tipo: 'mayor',
	},
	{
		v: '0.3.4',
		fecha: '2026-11-12',
		titulo: 'Sellos y modos de imagen',
		resumen: 'Rótulos `sello`, `paso` y `pixel`, colores que rotan en los subtítulos y escenas que cambian a rayos X, plano u holograma en una palabra.',
		tipo: 'menor',
	},
	{
		v: '0.3.3',
		fecha: '2026-11-11',
		titulo: 'Archivos con el título y render limpio',
		resumen: 'Los videos salen con su título como nombre de archivo, un render a la vez por computadora y reflejos 3D desde el primer cuadro.',
		tipo: 'arreglo',
	},
	{
		v: '0.3.1',
		fecha: '2026-11-11',
		titulo: 'Producción en serie',
		resumen: '`nuevo-video` desde bases 2D/3D, lotes que no se detienen, kit de personajes y escenarios, gráficas y calidad por video.',
		tipo: 'menor',
	},
	{
		v: '0.3.0',
		fecha: '2026-11-11',
		titulo: 'Maqueta 3D',
		resumen: 'Estilo `maqueta`: explicadores en un diorama low-poly con tráfico, rayos X, cambio de hora y etiquetas pegadas a objetos 3D.',
		tipo: 'mayor',
	},
	{v: '0.2.1', fecha: '2026-11-11', titulo: 'Whisper a la primera', resumen: 'Revisa git, make y cmake antes de compilar y no deja instalaciones a medias.', tipo: 'arreglo'},
	{
		v: '0.2.0',
		fecha: '2026-11-10',
		titulo: 'Videos que se ven producidos',
		resumen: 'Mundo por video con cámara que viaja, anotaciones, rótulos en dos niveles, `revisar` y `hoja`.',
		tipo: 'mayor',
	},
	{v: '0.1.3', fecha: '2026-11-10', titulo: 'Recursos más difíciles de romper', resumen: 'Variante 2D `plano`, diccionario más grande y un recurso faltante ya no detiene el render.', tipo: 'arreglo'},
	{v: '0.1.2', fecha: '2026-11-10', titulo: 'Objetos 2D y 3D', resumen: 'Biblioteca con Kenney, Poly Haven e Iconify, diccionario temático y escenarios ilustrados.', tipo: 'menor'},
	{v: '0.1.1', fecha: '2026-11-10', titulo: 'Render más rápido y estable', resumen: 'GPU por defecto en Apple Silicon, reintentos y errores claros antes de renderizar.', tipo: 'arreglo'},
	{v: '0.1.0', fecha: '2026-11-09', titulo: 'Primera versión', resumen: '10 estilos, motor de capas, voces, música, subtítulos, guiones con IA, personajes y 3D.', tipo: 'mayor'},
];

export const ancla = (v: string) => 'v' + v.replace(/\./g, '-');

const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
export const fechaCorta = (f: string) => {
	const [a, m, d] = f.split('-').map(Number);
	return `${d} ${MESES[m - 1]} ${a}`;
};
