<script setup lang="ts">
import {onMounted, onBeforeUnmount, ref} from 'vue';
import {withBase} from 'vitepress';
import Icono from './Icono.vue';
import Versiones from './Versiones.vue';
import Apoyo from './Apoyo.vue';
import {VERSIONES} from './versiones';

const actual = VERSIONES[0].v;
const b = (p: string) => withBase(p);

// el titular se "dice" palabra por palabra, como los subtítulos de Morfeo
const TITULAR = ['Escribe', 'el', 'guion.', 'Morfeo', 'hace', 'el', 'video.'];
const palabra = ref(-1);
let reloj: ReturnType<typeof setInterval> | undefined;

const comando = 'npx morfeo nuevo mi-canal';
const copiado = ref(false);

// descargas de npm y estrellas de GitHub, en vivo (si falla la red, se queda la última cifra conocida)
const REPO = 'https://github.com/UreckChan/morfeo';
const NPM = 'https://www.npmjs.com/package/morfeo';
const descargas = ref(5487);
const estrellas = ref(1);
const miles = (n: number) => n.toLocaleString('es-MX');
async function contadores() {
	try {
		const r = await fetch('https://api.npmjs.org/downloads/point/last-year/morfeo');
		const d = await r.json();
		if (typeof d.downloads === 'number') descargas.value = d.downloads;
	} catch {}
	try {
		const r = await fetch('https://api.github.com/repos/UreckChan/morfeo');
		const d = await r.json();
		if (typeof d.stargazers_count === 'number') estrellas.value = d.stargazers_count;
	} catch {}
}
async function copiar() {
	try {
		await navigator.clipboard.writeText(comando);
		copiado.value = true;
		setTimeout(() => (copiado.value = false), 1600);
	} catch {}
}

const ESTILOS = [
	{nombre: 'maqueta', desc: 'Explicadores en un diorama 3D low-poly', clip: 'diorama'},
	{nombre: '3d', desc: 'Objetos y mundos 3D con cámara que viaja', clip: 'maqueta'},
	{nombre: 'mesa', desc: 'Objetos sobre una mesa con luz cálida', clip: 'calido'},
	{nombre: 'explicativo', desc: 'Papel claro, titulares y terminal', clip: 'editorial'},
	{nombre: 'serie', desc: 'Personaje recurrente con HUD y días', clip: 'streamer'},
	{nombre: 'datos-curiosos', desc: 'Fondo oscuro, texto grande y objetos', img: 'datos-curiosos'},
	{nombre: 'documental', desc: 'Fotos, mapas y fuentes con calma', img: 'documental'},
	{nombre: 'ilustrado', desc: 'Escenarios 2D con paralaje', img: 'ilustrado'},
	{nombre: 'historia', desc: 'Relatos con personajes y escenarios', img: 'historia'},
	{nombre: 'infografia', desc: 'Datos, barras y comparaciones', img: 'infografia'},
];

const LUGARES = [
	{clip: 'isla', nombre: 'isla', desc: 'Palmeras, mar y un barco, con cámara de dron'},
	{clip: 'montana', nombre: 'montana', desc: 'Cima nevada, pinos y nieve que cae'},
	{clip: 'laboratorio', nombre: 'laboratorio', desc: 'Matraces que burbujean; la persona con su nombre'},
	{clip: 'combi', nombre: 'combi', desc: 'Historias en primera persona: tu teléfono y la gente'},
	{clip: 'campamento', nombre: 'campamento', desc: 'La fogata con amigos que miran al fuego'},
	{clip: 'cueva', nombre: 'cueva', desc: 'Antorchas, cristales y el objeto de la escena'},
	{clip: 'plano', nombre: 'plano', desc: 'Plano técnico: el edificio se arma piso por piso'},
	{clip: 'estudio', nombre: 'estudio', desc: 'Pedestal de exhibición para el objeto protagonista'},
	{clip: 'inundacion', nombre: 'desastre', desc: 'Tormenta, inundación, incendio, sismo, volcán…'},
	{clip: 'otono', nombre: 'estacion', desc: 'Primavera, otoño o invierno cambian todo el set'},
];

const SE_VE = [
	{clip: 'juego', titulo: 'El juego, en pantalla', codigo: "{tipo: 'juego', juego: 'tetris'}"},
	{clip: 'documento', titulo: 'La hoja, con su texto', codigo: "{tipo: 'documento', sello: 'Firmado'}"},
	{clip: 'banderas', titulo: 'Banderas que ondean', codigo: "{tipo: 'bandera', pais: 'jp'}"},
	{clip: 'fila', titulo: 'La fila y el letrero', codigo: "fila: 7, letrero: 'VIDEOJUEGOS'"},
	{clip: 'fantasmas', titulo: 'Varios, no uno solo', codigo: "buscar: 'pac-man', cantidad: 4"},
];

const CAPACIDADES = [
	{icono: 'voz', titulo: 'Voz', texto: 'Kokoro gratis en tu computadora, ElevenLabs, OpenAI o tu propia grabación.'},
	{icono: 'subtitulos', titulo: 'Subtítulos al ritmo', texto: 'Karaoke, palabra por palabra o pop. Con Whisper caen justo cuando se dicen.'},
	{icono: 'musica', titulo: 'Música y efectos', texto: 'Música generada sin derechos y más de 40 efectos grabados (CC0) que suenan solos en cada golpe.'},
	{icono: 'capas', titulo: 'Motor de capas', texto: 'Texto, contadores, tarjetas, chats, gráficas y mapas que entran en la palabra exacta.'},
	{icono: 'cubo', titulo: '2D y 3D sin dibujar', texto: 'Escribe "tubería", "pac-man" o "bandera de japón": 177 piezas propias y unos 7.000 modelos libres, con créditos.'},
	{icono: 'lugar', titulo: 'El lugar sigue a la historia', texto: 'Con ambiente auto, si la voz dice isla, cueva o laboratorio, la escena va ahí. 35 lugares con vida de fondo: canchas, teatro, conferencias, de día o de noche.'},
	{icono: 'clima', titulo: 'Clima y desastres', texto: 'Lluvia, nieve, tormenta; primavera, otoño, invierno; inundación, incendio, sismo o volcán, con su sonido.'},
	{icono: 'ia', titulo: 'Hecho para tu IA', texto: 'Claude Code o Codex investigan, escriben y renderizan con las guías que trae Morfeo.'},
	{icono: 'revisar', titulo: 'Revisión de estructura', texto: 'Gancho, ritmo y cierre; que la voz diga el guion; cuadros vacíos, tapados, quietos o con destellos.'},
	{icono: 'calendario', titulo: 'Publicar todos los días', texto: 'Calendario de temas que no se repiten, series encadenadas y un carrusel con hilo de cada video.'},
];

const CHAT = [
	{quien: 'tu', texto: 'Hazme un video sobre por qué vibra el control'},
	{
		quien: 'ia',
		pasos: [
			'Busqué los datos y guardé cada fuente',
			'Escribí 8 ganchos y elegí el de hallazgo',
			'Aquí está el guion: ¿lo apruebas?',
		],
	},
	{quien: 'tu', texto: 'Sí, pero más corto'},
	{quien: 'ia', pasos: ['Renderizado y revisado: 34 s, sin avisos', 'Video, miniatura y texto del post en salida/']},
];

const SKILLS = [
	{nombre: 'morfeo-guion', titulo: 'Guion', texto: 'Varios ganchos de arquetipos distintos, historia armada desde el pago y cierre que pide algo.'},
	{nombre: 'morfeo-animacion', titulo: 'Animación', texto: 'Tiempos, curvas y escalonado; cada cosa entra en la palabra que la nombra.'},
	{nombre: 'morfeo-3d', titulo: '3D', texto: 'Luz, materiales, paleta y encuadre vertical para mundos y piezas.'},
	{nombre: 'morfeo-video', titulo: 'Ruta completa', texto: 'Del tema al archivo terminado, con revisión antes de entregar.'},
];

const CIFRAS = [
	{n: '177', de: 'piezas 3D hechas en código', nota: 'De un grifo a un comecocos'},
	{n: '7.000', de: 'modelos libres al escribir su nombre', nota: 'Kenney, Quaternius y KayKit, sin derechos'},
	{n: '25', de: 'lugares con vida de fondo', nota: 'Isla, cueva, combi, fogata, plano técnico…'},
	{n: '13', de: 'fórmulas de historia', nota: 'Mito, misterio, un día en la vida, reto…'},
];
const BUSCA = ['tubería', 'ambulancia', 'pac-man', 'placa madre', 'bandera de japón', 'dinosaurio', 'guitarra', 'tetris', 'cerebro', 'refinería', 'control', 'cable submarino'];

const PASOS = [
	{cmd: 'npx morfeo nuevo mi-canal', nota: 'Proyecto con videos de ejemplo en 2D y 3D'},
	{cmd: 'npx morfeo instalar', nota: 'Una vez por computadora: voces, Python y navegador'},
	{cmd: 'npx morfeo render', nota: 'Los .mp4 con su título, miniatura y descripción'},
];

// los videos de la tira solo corren cuando se ven (ahorra batería y datos)
const tira = ref<HTMLElement | null>(null);
let observador: IntersectionObserver | undefined;

onMounted(() => {
	contadores();
	const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (!quieto) {
		let i = 0;
		reloj = setInterval(() => {
			i = (i + 1) % (TITULAR.length + 4); // pausa al final
			palabra.value = i < TITULAR.length ? i : -1;
		}, 520);
	}
	observador = new IntersectionObserver(
		(entradas) => {
			for (const e of entradas) {
				const v = e.target as HTMLVideoElement;
				if (e.isIntersecting && !quieto) v.play().catch(() => {});
				else v.pause();
			}
		},
		{threshold: 0.35},
	);
	document.querySelectorAll<HTMLVideoElement>('.inicio video:not(.con-sonido)').forEach((v) => observador!.observe(v));
});
onBeforeUnmount(() => {
	clearInterval(reloj);
	observador?.disconnect();
});
</script>

<template>
	<div class="inicio">
		<!-- PORTADA -->
		<section class="portada">
			<div class="grano" aria-hidden="true" />
			<div class="portada-texto">
				<a :href="b('/historial')" class="aviso">
					<span class="aviso-punto" />
					<span>v{{ actual }}</span>
					<span class="aviso-sep" />
					<span>Ver el historial de versiones</span>
					<Icono nombre="flecha" class="aviso-flecha" />
				</a>
				<h1 class="titular" aria-label="Escribe el guion. Morfeo hace el video.">
					<template v-for="(w, i) in TITULAR" :key="i">
						<br v-if="i === 3" />
						<span :class="['w', {dicha: i === palabra, acento: i >= 3}]" aria-hidden="true">{{ w }}</span>
					</template>
				</h1>
				<p class="bajada">
					Videos verticales animados desde código. Tú escribes las escenas; Morfeo pone la voz, la música, los subtítulos, las animaciones y la miniatura. Para Shorts, TikTok y Reels.
				</p>
				<div class="acciones">
					<a :href="b('/guia/empezar')" class="boton principal">Empezar <Icono nombre="flecha" /></a>
					<button class="comando" type="button" @click="copiar" :aria-label="`Copiar: ${comando}`">
						<span class="prompt">$</span>
						<code>{{ comando }}</code>
						<span class="copiar"><Icono :nombre="copiado ? 'listo' : 'copiar'" /></span>
					</button>
				</div>
				<div class="cuentas">
					<a :href="NPM" target="_blank" rel="noopener" class="cuenta">
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
						<b>{{ miles(descargas) }}</b><span>descargas en npm</span>
					</a>
					<a :href="REPO" target="_blank" rel="noopener" class="cuenta estrella">
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.5 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8L12 3.5Z" fill="currentColor" /></svg>
						<b>{{ miles(estrellas) }}</b><span>{{ estrellas === 1 ? 'estrella' : 'estrellas' }} · Dale una en GitHub</span>
					</a>
				</div>
				<ul class="datos">
					<li><b>16</b> estilos</li>
					<li><b>9</b> looks de render</li>
					<li><b>5</b> guías para tu IA</li>
					<li>Lugares y objetos <b>a la medida</b></li>
					<li><b>Gratis</b> incluso para uso comercial</li>
				</ul>
			</div>

			<div class="escenario" aria-hidden="true">
				<div class="tel tel-izq">
					<video :src="b('/clips/editorial.mp4')" :poster="b('/clips/editorial.jpg')" muted loop playsinline preload="metadata" />
				</div>
				<div class="tel tel-centro">
					<video :src="b('/clips/diorama.mp4')" :poster="b('/clips/diorama.jpg')" muted loop playsinline preload="auto" />
				</div>
				<div class="tel tel-der">
					<video :src="b('/clips/streamer.mp4')" :poster="b('/clips/streamer.jpg')" muted loop playsinline preload="metadata" />
				</div>
				<span class="marca m1">VOZ</span>
				<span class="marca m2">SUBTÍTULOS</span>
				<span class="marca m3">MUNDO 3D</span>
			</div>
		</section>

		<!-- QUÉ ES MORFEO (video con sonido) -->
		<section class="bloque presentacion">
			<div class="encabezado">
				<p class="ceja">En un minuto</p>
				<h2>Qué es Morfeo</h2>
				<p>Qué hace, cómo funciona, cómo se instala y lo nuevo de la 2.0: lugares a la medida, biblioteca y 9 looks. El video también lo hizo Morfeo.</p>
			</div>
			<div class="presentacion-video">
				<div class="tel tel-video">
					<video class="con-sonido" :src="b('/clips/que-es-morfeo.mp4')" :poster="b('/clips/que-es-morfeo.jpg')" controls playsinline preload="none" />
				</div>
			</div>
		</section>

		<!-- DEL GUION AL VIDEO -->
		<section class="bloque guion">
			<div class="encabezado">
				<p class="ceja">Cómo funciona</p>
				<h2>Un archivo de texto. Un video terminado.</h2>
				<p>Cada escena es lo que dice la voz y lo que aparece en pantalla. Las capas entran en la palabra exacta que la voz pronuncia.</p>
			</div>
			<div class="guion-par">
				<div class="codigo">
					<div class="codigo-barra"><span /><span /><span /><em>guiones/semaforo.mjs</em></div>
					<pre><code><span class="k">export default</span> {
  estilo: <span class="s">'maqueta'</span>,
  voice: <span class="s">'narrador'</span>,
  music: <span class="s">'chillpop'</span>,
  scenes: [
    { say: <span class="s">'Imagina que eres un semáforo.'</span> },
    { say: <span class="s">'Pasan treinta mil coches al día.'</span>,
      rotulo: <span class="s">'30 000 *COCHES*'</span>, rotuloEn: <span class="s">'treinta'</span> },
    { say: <span class="s">'Cambiabas cada noventa segundos.'</span>,
      capas: [{ tipo: <span class="s">'cronometro'</span>, a: <span class="n">90</span>,
                en: <span class="s">'noventa'</span> }] },
    { type: <span class="s">'cta'</span>, pide: <span class="s">'comenta'</span>, palabra: <span class="s">'VERDE'</span> },
  ],
};</code></pre>
				</div>
				<div class="flecha-grande" aria-hidden="true"><Icono nombre="flecha" /></div>
				<div class="resultado">
					<div class="tel tel-solo">
						<video :src="b('/clips/maqueta.mp4')" :poster="b('/clips/maqueta.jpg')" muted loop playsinline preload="none" />
					</div>
					<p class="pie-tel"><code>npx morfeo render</code></p>
				</div>
			</div>
		</section>

		<!-- CON TU IA -->
		<section class="bloque">
			<div class="encabezado">
				<p class="ceja">Con tu IA</p>
				<h2>Pídelo con una frase.</h2>
				<p>Abre tu proyecto en Claude Code o Codex. Morfeo trae las guías de oficio que tu IA sigue para escribir, animar y revisar; tú apruebas el guion y recibes el video.</p>
			</div>
			<div class="ia-par">
				<div class="chat" aria-label="Ejemplo de conversación">
					<div class="codigo-barra"><span /><span /><span /><em>mi-canal</em></div>
					<div class="chat-cuerpo">
						<template v-for="(m, i) in CHAT" :key="i">
							<p v-if="m.quien === 'tu'" class="globo">{{ m.texto }}</p>
							<ul v-else class="hecho">
								<li v-for="p in m.pasos" :key="p"><Icono nombre="listo" /> {{ p }}</li>
							</ul>
						</template>
					</div>
				</div>
				<div class="skills">
					<a v-for="k in SKILLS" :key="k.nombre" :href="b('/guia/skills')" class="skill">
						<code>{{ k.nombre }}</code>
						<h3>{{ k.titulo }}</h3>
						<p>{{ k.texto }}</p>
					</a>
					<a :href="b('/guia/skills')" class="enlace skills-mas">Cómo funcionan las skills <Icono nombre="flecha" /></a>
				</div>
			</div>
		</section>

		<!-- ESTILOS -->
		<section class="bloque">
			<div class="encabezado fila-enc">
				<div>
					<p class="ceja">Estilos</p>
					<h2>Doce looks listos, y los tuyos.</h2>
				</div>
				<a :href="b('/guia/estilos')" class="enlace">Ver todos los estilos <Icono nombre="flecha" /></a>
			</div>
			<div class="tira" ref="tira">
				<a v-for="e in ESTILOS" :key="e.nombre" :href="b('/guia/estilos')" class="tarjeta-estilo">
					<div class="marco">
						<video v-if="e.clip" :src="b(`/clips/${e.clip}.mp4`)" :poster="b(`/clips/${e.clip}.jpg`)" muted loop playsinline preload="none" />
						<img v-else :src="b(`/img/${e.img}.jpg`)" :alt="`Estilo ${e.nombre}`" loading="lazy" />
					</div>
					<code class="nombre-estilo">{{ e.nombre }}</code>
					<span class="desc-estilo">{{ e.desc }}</span>
				</a>
			</div>
		</section>

		<!-- LUGARES -->
		<section class="bloque">
			<div class="encabezado fila-enc">
				<div>
					<p class="ceja">Lugares</p>
					<h2>El lugar sigue a la historia.</h2>
					<p class="sub-enc">Si la voz dice isla, montaña o laboratorio, la escena va ahí. Con clima, estación o desastre cuando la historia lo pide.</p>
				</div>
				<a :href="b('/guia/ambientes')" class="enlace">Ver los 35 lugares <Icono nombre="flecha" /></a>
			</div>
			<div class="tira">
				<a v-for="l in LUGARES" :key="l.clip" :href="b('/guia/ambientes')" class="tarjeta-estilo">
					<div class="marco">
						<video :src="b(`/clips/${l.clip}.mp4`)" :poster="b(`/clips/${l.clip}.jpg`)" muted loop playsinline preload="none" />
					</div>
					<code class="nombre-estilo">{{ l.nombre }}</code>
					<span class="desc-estilo">{{ l.desc }}</span>
				</a>
			</div>
		</section>

		<!-- LO QUE SE DICE, SE VE -->
		<section class="bloque">
			<div class="encabezado fila-enc">
				<div>
					<p class="ceja">Coherencia</p>
					<h2>Lo que se dice, se ve.</h2>
					<p class="sub-enc">Nada de un 3D encimado sobre un cuarto que no tiene que ver: el objeto, el juego, la hoja o la bandera de la que habla la voz.</p>
				</div>
				<a :href="b('/guia/capas#juegos-documentos-y-banderas')" class="enlace">Juegos, documentos y banderas <Icono nombre="flecha" /></a>
			</div>
			<div class="se-ve">
				<a v-for="s in SE_VE" :key="s.clip" :href="b('/guia/capas#juegos-documentos-y-banderas')" class="se-ve-tarjeta">
					<div class="marco">
						<video :src="b(`/clips/${s.clip}.mp4`)" :poster="b(`/clips/${s.clip}.jpg`)" muted loop playsinline preload="none" />
					</div>
					<h3>{{ s.titulo }}</h3>
					<code>{{ s.codigo }}</code>
				</a>
			</div>
		</section>

		<!-- CATÁLOGO -->
		<section class="bloque">
			<div class="encabezado fila-enc">
				<div>
					<p class="ceja">Catálogo</p>
					<h2>Nómbralo y aparece.</h2>
				</div>
				<a :href="b('/guia/recursos')" class="enlace">Ver objetos 2D y 3D <Icono nombre="flecha" /></a>
			</div>
			<div class="cifras">
				<div v-for="c in CIFRAS" :key="c.de" class="cifra">
					<b>{{ c.n }}</b>
					<span>{{ c.de }}</span>
					<small>{{ c.nota }}</small>
				</div>
			</div>
			<div class="busca">
				<code class="busca-codigo">{ tipo: <span class="s">'recurso'</span>, buscar: <span class="s">'…'</span>, estilo: <span class="s">'3d'</span> }</code>
				<ul>
					<li v-for="t in BUSCA" :key="t">{{ t }}</li>
				</ul>
			</div>
		</section>

		<!-- CAPACIDADES -->
		<section class="bloque">
			<div class="encabezado">
				<p class="ceja">Todo incluido</p>
				<h2>Lo que hace por ti en cada render.</h2>
			</div>
			<div class="rejilla">
				<div v-for="c in CAPACIDADES" :key="c.titulo" class="capacidad">
					<span class="cap-icono"><Icono :nombre="c.icono" /></span>
					<h3>{{ c.titulo }}</h3>
					<p>{{ c.texto }}</p>
				</div>
			</div>
		</section>

		<!-- VERSIONES + INSTALAR -->
		<section class="bloque dos">
			<div>
				<p class="ceja">Historial</p>
				<h2>Versiones recientes</h2>
				<Versiones :limite="4" />
				<a :href="b('/historial')" class="enlace mas">Historial completo <Icono nombre="flecha" /></a>
			</div>
			<div class="instalar">
				<p class="ceja">Empieza en 3 pasos</p>
				<h2>Tu primer video en minutos</h2>
				<ol class="pasos">
					<li v-for="(p, i) in PASOS" :key="p.cmd">
						<span class="paso-num">{{ i + 1 }}</span>
						<div>
							<code>{{ p.cmd }}</code>
							<span>{{ p.nota }}</span>
						</div>
					</li>
				</ol>
				<a :href="b('/guia/primer-video')" class="boton principal">Tu primer video <Icono nombre="flecha" /></a>
			</div>
		</section>

		<!-- APOYO -->
		<section class="bloque apoyo-bloque">
			<Apoyo variante="grande" />
		</section>
	</div>
</template>

<style scoped>
.inicio {
	--ancho: 1200px;
	overflow-x: clip;
}
section {
	max-width: var(--ancho);
	margin: 0 auto;
	padding: 0 24px;
}

/* PORTADA */
.portada {
	position: relative;
	display: grid;
	grid-template-columns: 1.05fr 1fr;
	align-items: center;
	gap: 40px;
	min-height: calc(100vh - var(--vp-nav-height));
	padding-top: 40px;
	padding-bottom: 72px;
}
.portada::before {
	content: '';
	position: absolute;
	inset: -10% -30% 0;
	z-index: -1;
	background:
		radial-gradient(40% 50% at 78% 45%, color-mix(in srgb, var(--m-acento) 26%, transparent), transparent 70%),
		radial-gradient(30% 40% at 60% 80%, color-mix(in srgb, var(--m-amarillo) 14%, transparent), transparent 70%);
	filter: blur(10px);
}
.grano {
	position: absolute;
	inset: 0 -30%;
	z-index: -1;
	opacity: 0.06;
	pointer-events: none;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
.aviso {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	padding: 6px 14px 6px 10px;
	border: 1px solid var(--m-linea-fuerte);
	border-radius: 99px;
	font-size: 13px;
	color: var(--m-tenue);
	text-decoration: none;
	background: color-mix(in srgb, var(--m-fondo) 70%, transparent);
	backdrop-filter: blur(6px);
	transition: border-color 0.2s, color 0.2s;
	animation: subir 0.7s both;
}
.aviso:hover {
	border-color: var(--m-acento);
	color: var(--m-tinta);
}
.aviso span:nth-child(2) {
	font-family: var(--m-mono);
	color: var(--m-tinta);
	font-weight: 600;
}
.aviso-punto {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: var(--m-acento);
	box-shadow: 0 0 0 4px color-mix(in srgb, var(--m-acento) 25%, transparent);
}
.aviso-sep {
	width: 1px;
	height: 12px;
	background: var(--m-linea-fuerte);
}
.aviso-flecha {
	font-size: 14px;
}
.inicio .titular {
	font-family: var(--m-display);
	font-weight: 800;
	font-size: clamp(46px, 6.6vw, 92px);
	line-height: 0.98;
	letter-spacing: -0.035em;
	margin: 28px 0 24px;
	color: var(--m-tinta);
	animation: subir 0.8s 0.08s both;
}
.w {
	display: inline-block;
	margin-right: 0.22em;
	padding: 0 0.06em;
	border-radius: 0.12em;
	transition: background 0.18s, color 0.18s, transform 0.18s;
}
.w.acento:not(.dicha) {
	color: var(--m-acento);
}
.w.dicha {
	background: var(--m-amarillo);
	color: #17120a;
	transform: translateY(-0.03em) scale(1.03);
}
.bajada {
	font-size: 19px;
	line-height: 1.6;
	color: var(--m-tenue);
	max-width: 34em;
	margin: 0 0 32px;
	animation: subir 0.8s 0.16s both;
}
.acciones {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
	animation: subir 0.8s 0.24s both;
}
.boton {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	height: 48px;
	padding: 0 22px;
	border-radius: 12px;
	font-weight: 600;
	font-size: 15.5px;
	text-decoration: none !important;
	transition: transform 0.15s, box-shadow 0.2s, background 0.2s;
}
.principal {
	background: var(--m-acento);
	color: #fff !important;
	box-shadow: 0 10px 30px -10px color-mix(in srgb, var(--m-acento) 70%, transparent);
}
.principal:hover {
	transform: translateY(-1px);
	background: var(--m-acento-2);
}
.comando {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	height: 48px;
	padding: 0 8px 0 16px;
	border-radius: 12px;
	border: 1px solid var(--m-linea-fuerte);
	background: var(--m-panel);
	font-family: var(--m-mono);
	font-size: 14px;
	color: var(--m-tinta);
	cursor: pointer;
	transition: border-color 0.2s;
}
.comando:hover {
	border-color: var(--m-tenue);
}
.comando code {
	background: none !important;
	padding: 0 !important;
	color: inherit !important;
	font-size: inherit !important;
}
.prompt {
	color: var(--m-acento);
}
.copiar {
	display: grid;
	place-items: center;
	width: 32px;
	height: 32px;
	border-radius: 8px;
	background: var(--m-hover);
	font-size: 16px;
	color: var(--m-tenue);
}
.cuentas {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 22px;
	animation: subir 0.8s 0.28s both;
}
.cuenta {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 9px 16px 9px 12px;
	border-radius: 99px;
	border: 1px solid var(--m-linea-fuerte);
	background: var(--m-panel);
	color: var(--m-tinta) !important;
	text-decoration: none !important;
	font-size: 14px;
	transition: border-color 0.2s, transform 0.2s;
}
.cuenta:hover {
	border-color: var(--m-acento);
	transform: translateY(-1px);
}
.cuenta svg {
	width: 18px;
	height: 18px;
	color: var(--m-acento);
}
.cuenta.estrella svg {
	color: #f5b301;
}
.cuenta b {
	font-family: var(--m-display);
	font-size: 17px;
	font-variant-numeric: tabular-nums;
}
.cuenta span {
	color: var(--m-tenue);
}
.datos {
	display: flex;
	flex-wrap: wrap;
	gap: 8px 28px;
	list-style: none;
	padding: 0;
	margin: 40px 0 0;
	font-size: 14px;
	color: var(--m-tenue);
	animation: subir 0.8s 0.32s both;
}
.datos b {
	color: var(--m-tinta);
	font-weight: 700;
}

/* teléfonos */
.escenario {
	position: relative;
	height: min(640px, 72vh);
	animation: aparecer 1.1s 0.2s both;
}
.tel {
	position: absolute;
	aspect-ratio: 9 / 16;
	border-radius: 30px;
	padding: 7px;
	background: linear-gradient(160deg, #2a2733, #0b0a10);
	box-shadow:
		0 0 0 1px rgba(255, 255, 255, 0.08) inset,
		0 40px 80px -30px rgba(0, 0, 0, 0.6),
		0 18px 40px -20px rgba(0, 0, 0, 0.5);
}
.tel video {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 24px;
	display: block;
	background: #111;
}
.tel-centro {
	height: 100%;
	left: 50%;
	top: 0;
	transform: translateX(-50%);
	z-index: 3;
}
.tel-izq,
.tel-der {
	height: 78%;
	top: 12%;
	z-index: 2;
	filter: saturate(0.9);
}
.tel-izq {
	left: 2%;
	transform: rotate(-8deg);
}
.tel-der {
	right: 2%;
	transform: rotate(7deg);
}
.marca {
	position: absolute;
	z-index: 4;
	font-family: var(--m-display);
	font-weight: 800;
	font-size: 13px;
	letter-spacing: 0.08em;
	padding: 7px 12px;
	border-radius: 9px;
	color: #fff;
	background: var(--m-acento);
	box-shadow: 0 10px 24px -10px rgba(0, 0, 0, 0.5);
	animation: flotar 5s ease-in-out infinite;
}
.marca::after {
	content: '';
	position: absolute;
	width: 10px;
	height: 10px;
	background: inherit;
	transform: rotate(45deg);
}
.m1 {
	top: 18%;
	left: 8%;
	background: #2d7bff;
}
.m1::after {
	right: -4px;
	top: 50%;
	margin-top: -5px;
}
.m2 {
	bottom: 16%;
	right: 4%;
	animation-delay: -1.6s;
}
.m2::after {
	left: -4px;
	top: 50%;
	margin-top: -5px;
}
.m3 {
	top: 6%;
	right: 16%;
	background: #22a565;
	animation-delay: -3s;
}
.m3::after {
	left: 50%;
	margin-left: -5px;
	bottom: -4px;
}

/* video de presentación: con sonido y controles, no se reproduce solo */
.presentacion-video {
	display: flex;
	justify-content: center;
}
.tel.tel-video {
	position: relative;
	height: min(720px, 82vh);
}

/* BLOQUES */
.bloque {
	padding-top: 96px;
	padding-bottom: 8px;
}
.encabezado {
	max-width: 720px;
	margin-bottom: 40px;
}
.fila-enc {
	max-width: none;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 24px;
	flex-wrap: wrap;
}
.ceja {
	font-family: var(--m-mono);
	font-size: 12.5px;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: var(--m-acento);
	margin: 0 0 12px;
}
.inicio h2 {
	font-family: var(--m-display);
	font-weight: 800;
	font-size: clamp(30px, 4vw, 46px);
	line-height: 1.05;
	letter-spacing: -0.03em;
	margin: 0 0 16px;
	color: var(--m-tinta);
	border: 0;
	padding: 0;
}
.encabezado p:not(.ceja) {
	font-size: 17px;
	line-height: 1.6;
	color: var(--m-tenue);
	margin: 0;
}
.enlace {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-weight: 600;
	color: var(--m-tinta) !important;
	text-decoration: none !important;
	border-bottom: 2px solid var(--m-acento);
	padding-bottom: 2px;
}
.enlace:hover {
	color: var(--m-acento) !important;
}

/* guion → video */
.guion-par {
	display: grid;
	grid-template-columns: minmax(0, 1.5fr) auto minmax(0, 0.7fr);
	align-items: center;
	gap: 28px;
}
.codigo {
	border-radius: 18px;
	background: #13111b;
	border: 1px solid rgba(255, 255, 255, 0.07);
	box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.55);
	overflow: hidden;
}
.codigo-barra {
	display: flex;
	align-items: center;
	gap: 7px;
	padding: 12px 16px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.codigo-barra span {
	width: 11px;
	height: 11px;
	border-radius: 50%;
	background: #3a3645;
}
.codigo-barra em {
	margin-left: 10px;
	font-style: normal;
	font-family: var(--m-mono);
	font-size: 12.5px;
	color: #8d879c;
}
.codigo pre {
	margin: 0;
	padding: 20px 22px 24px;
	overflow-x: auto;
	font-family: var(--m-mono);
	font-size: 13.5px;
	line-height: 1.7;
	color: #e9e4f2;
}
.codigo code {
	background: none !important;
	padding: 0 !important;
	color: inherit !important;
	font-size: inherit !important;
}
.k {
	color: #ff7a5c;
}
.s {
	color: #ffd166;
}
.n {
	color: #7fd1ff;
}
.flecha-grande {
	font-size: 34px;
	color: var(--m-acento);
}
.resultado {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.tel-solo {
	position: relative;
	width: 100%;
	max-width: 260px;
	transform: rotate(2deg);
}
.pie-tel {
	margin-top: 18px;
	font-size: 14px;
}

/* tira de estilos */
.tira {
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: 200px;
	gap: 18px;
	overflow-x: auto;
	padding: 4px 24px 24px;
	margin: 0 -24px;
	scroll-snap-type: x mandatory;
	scrollbar-width: thin;
}
.tarjeta-estilo {
	scroll-snap-align: start;
	text-decoration: none !important;
	color: inherit !important;
}
.marco {
	aspect-ratio: 9 / 16;
	border-radius: 18px;
	overflow: hidden;
	background: var(--m-panel);
	border: 1px solid var(--m-linea);
	transition: transform 0.25s, box-shadow 0.25s;
}
.tarjeta-estilo:hover .marco {
	transform: translateY(-4px);
	box-shadow: 0 24px 40px -24px rgba(0, 0, 0, 0.5);
}
.marco video,
.marco img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	margin: 0;
}
.nombre-estilo {
	display: inline-block;
	margin-top: 14px;
	font-family: var(--m-mono);
	font-size: 14px !important;
	font-weight: 600;
	color: var(--m-tinta) !important;
	background: none !important;
	padding: 0 !important;
}
.desc-estilo {
	display: block;
	font-size: 13.5px;
	line-height: 1.45;
	color: var(--m-tenue);
	margin-top: 4px;
}

/* lugares y coherencia */
.sub-enc {
	max-width: 620px;
	margin: 10px 0 0;
	color: var(--m-tenue);
	font-size: 15.5px;
	line-height: 1.55;
}
.se-ve {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 18px;
}
.se-ve-tarjeta {
	text-decoration: none !important;
	color: inherit !important;
}
.se-ve-tarjeta:hover .marco {
	transform: translateY(-4px);
	box-shadow: 0 24px 40px -24px rgba(0, 0, 0, 0.5);
}
.se-ve-tarjeta h3 {
	font-family: var(--m-display);
	font-size: 16px;
	font-weight: 700;
	margin: 14px 0 6px;
	color: var(--m-tinta);
}
.se-ve-tarjeta code {
	display: block;
	font-family: var(--m-mono);
	font-size: 12px !important;
	line-height: 1.45;
	color: var(--m-tenue) !important;
	background: none !important;
	padding: 0 !important;
	word-break: break-word;
}
@media (max-width: 900px) {
	.se-ve {
		grid-auto-flow: column;
		grid-template-columns: none;
		grid-auto-columns: 200px;
		overflow-x: auto;
		padding: 4px 24px 24px;
		margin: 0 -24px;
		scroll-snap-type: x mandatory;
	}
	.se-ve-tarjeta {
		scroll-snap-align: start;
	}
}

/* capacidades */
.rejilla {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	border-top: 1px solid var(--m-linea);
	border-left: 1px solid var(--m-linea);
}
.capacidad {
	padding: 28px 24px 30px;
	border-right: 1px solid var(--m-linea);
	border-bottom: 1px solid var(--m-linea);
	transition: background 0.2s;
}
.capacidad:hover {
	background: var(--m-hover);
}
.cap-icono {
	display: grid;
	place-items: center;
	width: 44px;
	height: 44px;
	border-radius: 12px;
	font-size: 22px;
	color: var(--m-acento);
	background: color-mix(in srgb, var(--m-acento) 12%, transparent);
	margin-bottom: 18px;
}
.capacidad h3 {
	font-family: var(--m-display);
	font-size: 18px;
	font-weight: 700;
	margin: 0 0 8px;
	color: var(--m-tinta);
}
.capacidad p {
	margin: 0;
	font-size: 14.5px;
	line-height: 1.55;
	color: var(--m-tenue);
}

/* con tu IA */
.ia-par {
	display: grid;
	grid-template-columns: 1fr 1.05fr;
	gap: 32px;
	align-items: start;
}
.chat {
	border-radius: 20px;
	background: #15121c;
	border: 1px solid var(--m-linea-fuerte);
	overflow: hidden;
	box-shadow: 0 24px 60px -30px rgba(0, 0, 0, 0.5);
}
.chat-cuerpo {
	display: flex;
	flex-direction: column;
	gap: 14px;
	padding: 22px 22px 26px;
}
.globo {
	align-self: flex-end;
	max-width: 85%;
	margin: 0;
	padding: 10px 16px;
	border-radius: 16px 16px 4px 16px;
	background: var(--m-acento);
	color: #fff;
	font-weight: 600;
	font-size: 15px;
	line-height: 1.4;
}
.hecho {
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	gap: 8px;
}
.hecho li {
	display: flex;
	align-items: baseline;
	gap: 10px;
	margin: 0;
	font-size: 14.5px;
	line-height: 1.45;
	color: #d9d3e2;
}
.hecho li :deep(svg) {
	flex: none;
	color: #5adc6e;
	transform: translateY(2px);
}
.skills {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 14px;
}
.skill {
	display: block;
	padding: 22px 20px 20px;
	border-radius: 18px;
	background: var(--m-panel);
	border: 1px solid var(--m-linea);
	text-decoration: none !important;
	transition: border-color 0.2s, transform 0.2s;
}
.skill:hover {
	border-color: var(--m-acento);
	transform: translateY(-2px);
}
.skill code {
	font-family: var(--m-mono);
	font-size: 12px;
	color: var(--m-acento);
	background: color-mix(in srgb, var(--m-acento) 10%, transparent);
	padding: 3px 8px;
	border-radius: 6px;
}
.skill h3 {
	font-family: var(--m-display);
	font-size: 19px;
	font-weight: 700;
	margin: 14px 0 6px;
	color: var(--m-tinta);
}
.skill p {
	margin: 0;
	font-size: 14.5px;
	line-height: 1.5;
	color: var(--m-tenue);
}
.skills-mas {
	grid-column: 1 / -1;
	justify-self: start;
	margin-top: 8px;
}

/* catálogo */
.cifras {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	border-top: 1px solid var(--m-linea);
	border-left: 1px solid var(--m-linea);
}
.cifra {
	display: flex;
	flex-direction: column;
	gap: 6px;
	padding: 30px 24px 28px;
	border-right: 1px solid var(--m-linea);
	border-bottom: 1px solid var(--m-linea);
}
.cifra b {
	font-family: var(--m-display);
	font-weight: 800;
	font-size: clamp(44px, 5.4vw, 68px);
	line-height: 1;
	letter-spacing: -0.04em;
	color: var(--m-tinta);
	font-variant-numeric: tabular-nums;
}
.cifra span {
	font-weight: 600;
	font-size: 15.5px;
	line-height: 1.35;
	color: var(--m-tinta);
}
.cifra small {
	font-size: 13.5px;
	line-height: 1.45;
	color: var(--m-tenue);
}
.busca {
	display: flex;
	align-items: center;
	gap: 18px 22px;
	flex-wrap: wrap;
	margin-top: 26px;
}
.busca-codigo {
	font-family: var(--m-mono);
	font-size: 13.5px;
	padding: 10px 14px;
	border-radius: 10px;
	background: #15121c;
	color: #d9d3e2;
	white-space: nowrap;
}
.busca ul {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	list-style: none;
	margin: 0;
	padding: 0;
}
.busca li {
	margin: 0;
	padding: 6px 13px;
	border-radius: 99px;
	border: 1px solid var(--m-linea-fuerte);
	font-size: 13.5px;
	color: var(--m-tenue);
}

/* versiones + instalar */
.dos {
	display: grid;
	grid-template-columns: 1.1fr 1fr;
	gap: 64px;
	padding-bottom: 24px;
}
.apoyo-bloque {
	padding-top: 56px;
	padding-bottom: 120px;
}
.mas {
	margin-top: 20px;
}
.instalar {
	padding: 36px;
	border-radius: 24px;
	background: var(--m-panel);
	border: 1px solid var(--m-linea);
	align-self: start;
}
.pasos {
	list-style: none;
	padding: 0;
	margin: 8px 0 28px;
}
.pasos li {
	display: flex;
	gap: 16px;
	padding: 16px 0;
	border-bottom: 1px dashed var(--m-linea-fuerte);
	margin: 0;
}
.paso-num {
	flex: none;
	display: grid;
	place-items: center;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	font-family: var(--m-display);
	font-weight: 800;
	font-size: 14px;
	background: var(--m-amarillo);
	color: #17120a;
}
.pasos code {
	display: block;
	font-family: var(--m-mono);
	font-size: 14.5px !important;
	color: var(--m-tinta) !important;
	background: none !important;
	padding: 0 !important;
	margin-bottom: 4px;
}
.pasos span:not(.paso-num) {
	font-size: 14px;
	color: var(--m-tenue);
}

@keyframes subir {
	from {
		opacity: 0;
		transform: translateY(14px);
	}
}
@keyframes aparecer {
	from {
		opacity: 0;
		transform: translateY(30px) scale(0.97);
	}
}
@keyframes flotar {
	50% {
		transform: translateY(-8px);
	}
}
@media (prefers-reduced-motion: reduce) {
	.inicio *,
	.inicio *::before {
		animation: none !important;
		transition: none !important;
	}
}

@media (max-width: 1000px) {
	.portada {
		grid-template-columns: 1fr;
		min-height: 0;
		padding-top: 32px;
	}
	.escenario {
		height: 520px;
		max-width: 520px;
		width: 100%;
		margin: 0 auto;
	}
	.rejilla,
	.cifras {
		grid-template-columns: repeat(2, 1fr);
	}
	.ia-par {
		grid-template-columns: 1fr;
	}
	.dos {
		grid-template-columns: 1fr;
		gap: 56px;
	}
	.guion-par {
		grid-template-columns: 1fr;
	}
	.flecha-grande {
		transform: rotate(90deg);
		justify-self: center;
	}
}
@media (max-width: 560px) {
	section {
		padding: 0 16px;
	}
	.tira {
		margin: 0 -16px;
		padding: 4px 16px 24px;
		grid-auto-columns: 160px;
	}
	.escenario {
		height: 440px;
	}
	.tel-izq,
	.tel-der {
		height: 70%;
		top: 16%;
	}
	.tel-izq {
		left: -4%;
	}
	.tel-der {
		right: -4%;
	}
	.rejilla,
	.skills {
		grid-template-columns: 1fr;
	}
	.busca-codigo {
		white-space: normal;
	}
	.bajada {
		font-size: 17px;
	}
	.comando {
		width: 100%;
		justify-content: space-between;
	}
	.instalar {
		padding: 24px 20px;
	}
	.bloque {
		padding-top: 72px;
	}
	.codigo pre {
		font-size: 12px;
	}
}
</style>
