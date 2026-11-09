// Configuración de tu canal. Los videos están en videos.mjs y en la carpeta guiones/.
import {defineConfig} from 'morfeo';

export default defineConfig({
	marca: {
		nombre: 'Mi Canal', // sale arriba en cada video y en el cierre
		logo: null, // './logo.png' (cuadrado). Sin logo se usa la inicial del nombre
		redes: 'YT @micanal  ·  TikTok @micanal',
		cta: 'Sígueme para más datos curiosos.', // lo que dice la voz en la escena final ({type: 'cta'})
		etiqueta: 'DATO CURIOSO', // la pastilla roja del gancho
	},

	// Alias para no repetir: úsalos como voice: 'narrador' o music: 'mi-cancion'
	voces: {
		narrador: [['em_alex', 0.6], ['am_michael', 0.4]], // mezcla de voces Kokoro (gratis, en tu computadora)
		// eleven: {proveedor: 'elevenlabs', voz: 'TU_VOICE_ID'}, // necesita ELEVENLABS_API_KEY en .env
		// openai: {proveedor: 'openai', voz: 'nova'},            // necesita OPENAI_API_KEY en .env
	},
	musicas: {
		// 'mi-cancion': {archivo: './musica/cancion.mp3', volumen: 0.8},
	},

	componentes: {Barras: './escenas/Barras.tsx'},
	personajes: {neto: {poses: {normal: './personajes/neto-normal.svg', feliz: './personajes/neto-feliz.svg', triste: './personajes/neto-triste.svg'}}},
	salida: './salida', // aquí quedan los .mp4 y .jpg
});
