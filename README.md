# Web Parroquia San Chárbel

Sitio web para la parroquia bajo la advocación de San Chárbel Makhlouf, en **Villa Carolina, Barranquilla (Atlántico, Colombia)**.

## Estado

**Fase actual: implementación.** La arquitectura y el sistema de diseño están cerrados. El proyecto Astro ya corre, con los tokens, el encabezado, el pie y los bloques 2, 3, 5 y 6 de la portada.

## Stack

- **Frontend:** Astro (estático, con islas de JS nativo)
- **Backend:** Supabase (contenido dinámico, formularios, almacenamiento) — pendiente
- **Estilos:** Tailwind v4 sobre tokens en variables CSS
- **Iconos:** Lucide (los de redes van aparte: Lucide retiró los de marcas)

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # compila a dist/
npm run check    # tipos y accesibilidad de Astro
```

## Estructura

```
src/
├── components/
│   ├── layout/   Header, Footer, Container, Section
│   ├── ui/       Button, SectionHeader, Chip, IconoCircular, IconoRed
│   ├── cards/    NeedCard
│   └── blocks/   Hero, InfoBar, InfoBarItem, PromoBand
├── config/       sitio.ts — datos de la parroquia y menú
├── layouts/      BaseLayout
├── styles/       tokens.css · base.css · global.css
└── pages/
```

**`src/styles/tokens.css` es la fuente de verdad.** Tailwind genera sus utilidades a partir de ese bloque `@theme`, así que cambiar un color ahí cambia todo el sitio. Nunca escribas un hex ni un espaciado suelto dentro de un componente.

Los datos de la parroquia (dirección, teléfonos, redes) están en `src/config/sitio.ts`, vacíos a la espera de los reales.

## Documentación

| Documento | Contenido |
|---|---|
| [`docs/01-investigacion-referentes.md`](docs/01-investigacion-referentes.md) | Análisis de 20 sitios de iglesias, catedrales, santuarios y parroquias. Características comunes, estructura de la portada, número y nombres de páginas, y cómo resuelven el cronograma de actividades. |
| [`docs/02-arquitectura-propuesta.md`](docs/02-arquitectura-propuesta.md) | Propuesta concreta: menú, mapa del sitio, bloques de la página de inicio, contenido de cada página y decisiones pendientes. |
| [`docs/03-sistema-de-diseno.md`](docs/03-sistema-de-diseno.md) | **Fuente de verdad visual.** Tokens de color y tipografía, espaciado, catálogo de componentes, plantillas de página, estructura de carpetas de Astro, modelo de datos de Supabase, accesibilidad y checklist de PR. |

> Si vas a construir una pantalla, empieza por `docs/03-sistema-de-diseno.md`. Todo componente nuevo se documenta ahí antes de darse por terminado.

## Resumen de la propuesta

Menú de seis ítems más un botón de donación:

```
Inicio | La Parroquia | San Chárbel | Sacramentos | Comunidad | Contacto    [Donar]
```

13 páginas en el lanzamiento, ampliables a ~22 en una segunda fase. La portada se organiza en 11 bloques, de los cuales dos son fijos: los **horarios de misa sin necesidad de hacer scroll** y el **bloque devocional a San Chárbel** con el formulario de peticiones.

## Identidad visual

Café como color base, **dorado** como acento principal y **verde solo en cuatro usos puntuales** (etiquetas, estados de éxito, botón de WhatsApp y la marca de agua de cedro y olivo). Fondo crema, tarjetas blancas, sombras muy suaves.

Botones siempre pill, títulos en **Playfair Display** con regla dorada debajo, texto en **Nunito Sans**, y el patrón de icono circular repetido en todo el sitio.

## Fuera de alcance

- **Transmisiones en vivo.** No habrá misas en línea ni página `/transmisiones`.
- **Donaciones en línea.** Habrá donaciones y con volumen, pero la pasarela y su interfaz se diseñan después. En fase 1, `/donar` es una página simple con los datos de aporte.

## Próximos pasos

1. Completar la portada: bloques 4 (bienvenida del párroco), 7 (próximas celebraciones), 8 (comunidad), 9 (noticias) y 10 (cómo llegar).
2. Construir `/horarios`, `/sacramentos` y `/san-charbel`, que son las tres páginas más consultadas.
3. Conectar Supabase: tablas, RLS y consultas de agenda, noticias y horarios.
4. Confirmar el punto abierto de la sección 12.1 de `03-sistema-de-diseno.md` (si el formulario de peticiones sigue en pie).
5. Conseguir fotos reales del templo, el párroco y las pastorales, y los datos de contacto para `src/config/sitio.ts`.
