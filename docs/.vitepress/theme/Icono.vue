<script setup lang="ts">
// Iconos de trazo propios (24×24, 1.6 px). Sin emojis.
defineProps<{nombre: string}>();
</script>

<template>
	<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<template v-if="nombre === 'voz'">
			<path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2" />
		</template>
		<template v-else-if="nombre === 'musica'">
			<path d="M9 18V6l11-2v12" />
			<circle cx="6.5" cy="18" r="2.5" />
			<circle cx="17.5" cy="16" r="2.5" />
		</template>
		<template v-else-if="nombre === 'subtitulos'">
			<rect x="3" y="5" width="18" height="14" rx="3" />
			<path d="M7 15h4M13 15h4M7 11h10" />
		</template>
		<template v-else-if="nombre === 'capas'">
			<path d="M12 3 3 8l9 5 9-5-9-5Z" />
			<path d="m3 13 9 5 9-5" />
		</template>
		<template v-else-if="nombre === 'cubo'">
			<path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
			<path d="M4 7.5 12 12l8-4.5M12 12v9" />
		</template>
		<template v-else-if="nombre === 'ia'">
			<path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
			<path d="M8 8c2 1.2 2.8 2 4 4 1.2-2 2-2.8 4-4-2-1.2-2.8-2-4-4-1.2 2-2 2.8-4 4Z" transform="translate(0 4)" />
		</template>
		<template v-else-if="nombre === 'camara'">
			<rect x="3" y="6" width="13" height="12" rx="2.5" />
			<path d="m16 10 5-3v10l-5-3" />
		</template>
		<template v-else-if="nombre === 'terminal'">
			<rect x="3" y="4" width="18" height="16" rx="3" />
			<path d="m7 10 3 2-3 2M12 15h5" />
		</template>
		<template v-else-if="nombre === 'revisar'">
			<path d="M4 6h10M4 12h7M4 18h6" />
			<path d="m14 16 2.5 2.5L21 13" />
		</template>
		<template v-else-if="nombre === 'flecha'">
			<path d="M5 12h14M13 6l6 6-6 6" />
		</template>
		<template v-else-if="nombre === 'copiar'">
			<rect x="8" y="8" width="12" height="12" rx="2.5" />
			<path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
		</template>
		<template v-else-if="nombre === 'listo'">
			<path d="m5 12.5 4.5 4.5L19 7" />
		</template>
	</svg>
</template>

<style scoped>
.icono {
	width: 1em;
	height: 1em;
	display: block;
}
</style>
