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
