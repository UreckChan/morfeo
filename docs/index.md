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
  - icon: 🧱
    title: Objetos 2D y 3D
    details: Escribe "tubería" o "pizza" y Morfeo trae el objeto de bibliotecas libres (Kenney, Poly Haven, Iconify), en 3D, realista o 2D en 17 estilos. Más tuberías con agua, muros y vigas hechos en código.
  - icon: 🌲
    title: Escenarios ilustrados
    details: Bosque, cuarto, departamento, túnel y pasillo animados, para que un personaje nunca quede sobre un fondo vacío.
  - icon: 🎙️
    title: Voces y música
    details: Voces Kokoro gratis en tu computadora, ElevenLabs, OpenAI o tu propia grabación. Música generada sin derechos o tu pista.
  - icon: ✨
    title: Con IA
    details: Claude escribe el guion completo eligiendo objetos del diccionario según la temática, y la IA dibuja ilustraciones y poses de tu personaje. Todo en caché.
  - icon: 💬
    title: Subtítulos
    details: Karaoke, en bloque, palabra por palabra o estilo TikTok. Con Whisper quedan sincronizados con la voz.
  - icon: ⚡
    title: Un comando
    details: npx morfeo render genera los videos y sus miniaturas. Studio para verlos y ajustarlos en vivo.
---

<div class="galeria">

![Ocho estilos de Morfeo](/img/galeria.jpg)

<p class="pie">Estilos: datos-curiosos, explicativo, documental, mesa, historia, serie, infografia y 3d.</p>

![Objetos 2D y 3D](/img/objetos.jpg)

<p class="pie">Objetos 3D incluidos, construcción en código, modelos de Kenney, modelos realistas de Poly Haven e ilustraciones 2D en estilo clay. <a href="./guia/recursos">Ver objetos 2D y 3D</a>.</p>

![Escenarios](/img/escenarios.jpg)

<p class="pie">Escenarios incluidos: bosque, cuarto, departamento, túnel y pasillo. <a href="./guia/estilos#escenarios-ilustrados">Ver escenarios</a>.</p>

</div>

```bash
npx morfeo nuevo mi-canal && cd mi-canal && npm install
npx morfeo instalar   # una sola vez por computadora
npx morfeo render
```

<style>
.galeria { max-width: 960px; margin: 48px auto 24px; }
.galeria img { border-radius: 14px; margin-top: 24px; }
.pie { text-align: center; font-size: 14px; opacity: .7; }
</style>
