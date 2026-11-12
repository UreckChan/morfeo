<script setup lang="ts">
import {computed} from 'vue';
import {withBase} from 'vitepress';
import {VERSIONES, ancla, fechaCorta} from './versiones';

const props = defineProps<{limite?: number; enlaces?: 'misma' | 'historial'}>();
const lista = computed(() => (props.limite ? VERSIONES.slice(0, props.limite) : VERSIONES));
const destino = (v: string) => (props.enlaces === 'misma' ? `#${ancla(v)}` : withBase(`/historial#${ancla(v)}`));
// `codigo` → <code>codigo</code> (los textos son nuestros, no del usuario)
const conCodigo = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/`([^`]+)`/g, '<code>$1</code>');
const ETIQUETA = {mayor: 'Grande', menor: 'Nueva', arreglo: 'Arreglos'};
</script>

<template>
	<ol class="versiones">
		<li v-for="(x, i) in lista" :key="x.v" :class="['version', x.tipo, {actual: i === 0}]">
			<a :href="destino(x.v)" class="fila">
				<span class="punto" aria-hidden="true" />
				<span class="cabeza">
					<span class="num">v{{ x.v }}</span>
					<span class="fecha">{{ fechaCorta(x.fecha) }}</span>
					<span v-if="i === 0" class="chip actual-chip">Actual</span>
					<span v-else class="chip">{{ ETIQUETA[x.tipo] }}</span>
				</span>
				<span class="titulo">{{ x.titulo }}</span>
				<span class="resumen" v-html="conCodigo(x.resumen)" />
			</a>
		</li>
	</ol>
</template>

<style scoped>
.versiones {
	list-style: none;
	margin: 0;
	padding: 0;
	position: relative;
}
.versiones::before {
	content: '';
	position: absolute;
	left: 7px;
	top: 14px;
	bottom: 14px;
	width: 2px;
	background: linear-gradient(var(--m-acento), var(--m-linea) 30%);
	border-radius: 2px;
}
.version {
	margin: 0 !important;
	padding: 0;
}
.fila {
	display: grid;
	grid-template-columns: 16px 1fr;
	column-gap: 20px;
	padding: 14px 16px 14px 0;
	border-radius: 14px;
	text-decoration: none !important;
	color: inherit !important;
	transition: background 0.2s;
}
.fila:hover {
	background: var(--m-hover);
}
.punto {
	grid-row: span 3;
	width: 16px;
	height: 16px;
	margin-top: 4px;
	border-radius: 50%;
	background: var(--m-fondo);
	border: 2px solid var(--m-linea-fuerte);
	position: relative;
	z-index: 1;
}
.mayor .punto {
	border-color: var(--m-acento);
}
.actual .punto {
	background: var(--m-acento);
	border-color: var(--m-acento);
	box-shadow: 0 0 0 5px color-mix(in srgb, var(--m-acento) 22%, transparent);
}
.cabeza {
	display: flex;
	align-items: baseline;
	flex-wrap: wrap;
	gap: 6px 12px;
}
.num {
	font-family: var(--m-mono);
	font-weight: 600;
	font-size: 15px;
	color: var(--m-tinta);
}
.fecha {
	font-size: 13px;
	color: var(--m-tenue);
}
.chip {
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	padding: 2px 8px;
	border-radius: 99px;
	border: 1px solid var(--m-linea-fuerte);
	color: var(--m-tenue);
}
.actual-chip {
	border-color: transparent;
	background: var(--m-amarillo);
	color: #1a1404;
}
.titulo {
	font-family: var(--m-display);
	font-weight: 700;
	font-size: 19px;
	line-height: 1.25;
	margin-top: 4px;
	color: var(--m-tinta);
}
.resumen {
	font-size: 14.5px;
	line-height: 1.55;
	color: var(--m-tenue);
	margin-top: 2px;
}
.resumen :deep(code) {
	font-family: var(--m-mono);
	font-size: 0.88em;
	padding: 1px 5px;
	border-radius: 5px;
	background: var(--m-hover);
	color: var(--m-tinta);
}
</style>
