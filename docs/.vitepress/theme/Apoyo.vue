<script setup lang="ts">
// Botón y tarjeta para apoyar el proyecto (Buy Me a Coffee). `variante: 'tarjeta'` al final de cada página de la guía,
// `'grande'` en la portada.
defineProps<{variante?: 'tarjeta' | 'grande'}>();
const URL = 'https://buymeacoffee.com/ureck';
</script>

<template>
	<div :class="['apoyo', variante ?? 'tarjeta']">
		<div class="apoyo-texto">
			<p class="apoyo-titulo">Morfeo es gratis y lo seguirá siendo.</p>
			<p class="apoyo-sub">Si te ahorra horas de edición, invítame un café: ayuda a pagar el tiempo de hacer más estilos, fórmulas y piezas.</p>
		</div>
		<a :href="URL" target="_blank" rel="noopener" class="apoyo-boton">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z" />
				<path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" />
				<path d="M8 3.5c0 1 1 1.2 1 2.2M12 3.5c0 1 1 1.2 1 2.2" />
			</svg>
			Invítame un café
		</a>
	</div>
</template>

<style scoped>
.apoyo {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	flex-wrap: wrap;
	border: 1px solid var(--m-linea-fuerte);
	border-radius: 18px;
	background: var(--m-panel);
	padding: 20px 22px;
}
.tarjeta {
	margin-top: 48px;
}
.grande {
	padding: 30px 32px;
	background:
		radial-gradient(60% 120% at 100% 0%, color-mix(in srgb, #ffdd00 14%, transparent), transparent 60%),
		var(--m-panel);
}
.apoyo-texto {
	flex: 1 1 320px;
}
.apoyo-titulo {
	margin: 0 !important;
	font-family: var(--m-display);
	font-weight: 800;
	font-size: 18px;
	color: var(--m-tinta);
	line-height: 1.3 !important;
}
.grande .apoyo-titulo {
	font-size: 26px;
	letter-spacing: -0.02em;
}
.apoyo-sub {
	margin: 6px 0 0 !important;
	font-size: 14.5px;
	line-height: 1.55 !important;
	color: var(--m-tenue);
}
.apoyo-boton {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	height: 46px;
	padding: 0 20px;
	border-radius: 12px;
	background: #ffdd00;
	color: #1a1404 !important;
	font-weight: 800;
	font-size: 15px;
	text-decoration: none !important;
	white-space: nowrap;
	box-shadow: 0 10px 24px -12px rgba(255, 221, 0, 0.7);
	transition: transform 0.15s, box-shadow 0.2s;
}
.apoyo-boton:hover {
	transform: translateY(-1px);
	box-shadow: 0 14px 28px -12px rgba(255, 221, 0, 0.85);
}
.apoyo-boton svg {
	width: 20px;
	height: 20px;
}
</style>
