---
layout: home
hero:
  name: Morfeo
  text: Videos verticales animados desde código
  tagline: Escribes las escenas. Morfeo pone la voz, la música, los subtítulos, las animaciones y la miniatura. Para YouTube Shorts, TikTok y Reels.
  image:
    src: /logo.svg
    alt: Morfeo
  actions:
    - theme: brand
      text: Empezar
      link: /guia/empezar
    - theme: alt
      text: Ver estilos
      link: /guia/estilos
    - theme: alt
      text: GitHub
      link: https://github.com/UreckChan/morfeo
features:
  - icon: 🎨
    title: 10 estilos
    details: Datos curiosos, tutoriales, documental, historias, objetos 3D, series con personaje, infografías y escenas de Blender. Y los tuyos.
  - icon: 🧩
    title: Motor de capas
    details: Imágenes, texto, contadores, tarjetas, teléfonos, medidores, votaciones, chats y modelos 3D que aparecen justo en la palabra que dice la voz.
  - icon: 🎙️
    title: Voces y música
    details: Voces Kokoro gratis en tu computadora, ElevenLabs, OpenAI o tu propia grabación. Música generada sin derechos o tu pista.
  - icon: ✨
    title: Con IA
    details: Claude escribe el guion completo y la IA dibuja ilustraciones y poses de tu personaje. Todo en caché para no pagar dos veces.
  - icon: 💬
    title: Subtítulos
    details: Karaoke, en bloque, palabra por palabra o estilo TikTok. Con Whisper quedan sincronizados con la voz.
  - icon: ⚡
    title: Un comando
    details: npx morfeo render genera los videos y sus miniaturas. Studio para verlos y ajustarlos en vivo.
---

<div class="galeria">

![Ocho estilos de Morfeo](/img/galeria.jpg)

<p class="pie">De izquierda a derecha y de arriba abajo: datos-curiosos, explicativo, documental, mesa, historia, serie, infografia y 3d. Todos salieron de los <a href="https://github.com/UreckChan/morfeo/tree/main/ejemplos">ejemplos</a>.</p>

</div>

```bash
npx morfeo nuevo mi-canal && cd mi-canal && npm install
npx morfeo instalar   # una sola vez por computadora
npx morfeo render
```

<style>
.galeria { max-width: 960px; margin: 48px auto 24px; }
.galeria img { border-radius: 14px; }
.pie { text-align: center; font-size: 14px; opacity: .7; }
</style>
