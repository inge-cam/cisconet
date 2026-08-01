# Sistema de diseño — Parroquia San Chárbel

**Stack:** Astro (frontend) + Supabase (backend)
**Estado:** v1, derivado de los mockups de Inicio, Detalle de evento, Horarios y Nosotros.

Este documento es la fuente de verdad visual y estructural del proyecto. Si algo que vas a construir no está aquí, no lo inventes en tu componente: propónlo, se agrega al sistema, y después se usa.

---

## 0. Supuestos que tomé (confírmalos)

1. **"forado" = dorado.** Los mockups son café oscuro + dorado, así que interpreté el color pedido como dorado.
2. **Verde oscuro reemplaza al café.** Pediste verde oscuro y los mockups usan café. En este sistema el tono oscuro es un *token* (`--color-ink`, `--color-surface-dark`), no un color escrito a mano. Definí el verde como valor por defecto y dejé los cafés originales de los mockups documentados en §1.6. Cambiar de uno a otro es editar dos variables, no repintar el sitio.
3. **Tailwind + tokens en variables CSS.** Ver §8.
4. **Islas de Astro con JS nativo**, sin framework de UI. Ver §8.3.

---

## 1. Color

### 1.1 Tokens

```css
:root {
  /* Verde — superficies oscuras, texto, overlays */
  --green-900: #16281F;  /* footer, overlay de hero */
  --green-800: #1F3A2E;  /* header sólido, bandas oscuras */
  --green-700: #2C5142;
  --green-600: #3D6B58;
  --green-100: #E6EDE9;  /* fondos sutiles, estados hover */

  /* Dorado — acento, acciones, énfasis */
  --gold-600:  #B0834A;  /* hover de botón primario */
  --gold-500:  #C89A5E;  /* botón primario, reglas, iconos */
  --gold-300:  #E3C89A;  /* bordes de botón terciario */
  --gold-100:  #F5E9D7;  /* fondo de icono circular */

  /* Crema — lienzo */
  --cream-50:  #FBF9F5;  /* fondo de página */
  --cream-100: #F5EFE6;  /* bandas y bloques destacados */
  --cream-200: #EDE5DA;  /* bordes, divisores */
  --white:     #FFFFFF;  /* tarjetas */

  /* Texto */
  --text-900:  #23342C;  /* títulos */
  --text-700:  #3E4B44;  /* cuerpo */
  --text-500:  #6B7A72;  /* secundario, labels, metadatos */
  --text-on-dark:       #FBF9F5;
  --text-on-dark-muted: rgba(251, 249, 245, 0.78);

  /* Semánticos (formularios y avisos) */
  --success: #2F7D5C;
  --error:   #B3453A;
  --warning: #C08A2E;
  --info:    var(--green-700);

  /* Alias semánticos — usa SIEMPRE estos, no los crudos de arriba */
  --color-bg:           var(--cream-50);
  --color-bg-alt:       var(--cream-100);
  --color-surface:      var(--white);
  --color-surface-dark: var(--green-800);
  --color-ink:          var(--green-900);
  --color-accent:       var(--gold-500);
  --color-accent-hover: var(--gold-600);
  --color-border:       var(--cream-200);
}
```

### 1.2 Regla de uso

| Rol | Token | Dónde |
|---|---|---|
| Fondo de página | `--color-bg` | Todo el sitio |
| Bandas de sección | `--color-bg-alt` | Banda San Chárbel, banda de donación, franja de datos |
| Tarjetas | `--color-surface` | Sobre `--color-bg` o `--color-bg-alt` |
| Superficie oscura | `--color-surface-dark` | Footer, header sólido, hero |
| Acento | `--color-accent` | Botón primario, regla bajo títulos, iconos, enlaces destacados |

**El dorado es acento, no superficie.** Nunca pintes un bloque grande de dorado. En los cuatro mockups el dorado solo aparece en botones, reglas de ~48 px, iconos, badges y texto de énfasis.

**Proporción objetivo por pantalla:** ~70 % crema/blanco, ~20 % verde oscuro, ~10 % dorado.

### 1.3 Overlay de hero

Las imágenes de hero nunca van limpias: siempre llevan un degradado que garantiza la legibilidad del texto.

```css
/* Hero oscuro (Inicio, Evento, Horarios) */
background: linear-gradient(
  100deg,
  rgba(22, 40, 31, 0.92) 0%,
  rgba(22, 40, 31, 0.72) 45%,
  rgba(22, 40, 31, 0.25) 100%
);

/* Hero claro (Nosotros) — el texto va oscuro sobre crema */
background: linear-gradient(
  100deg,
  var(--cream-50) 0%,
  rgba(251, 249, 245, 0.85) 40%,
  rgba(251, 249, 245, 0) 75%
);
```

### 1.4 Contraste

Todo texto debe cumplir **WCAG AA (4.5:1)**. Combinaciones aprobadas:

| Texto | Fondo | Uso |
|---|---|---|
| `--text-900` | `--cream-50` / `--white` | Títulos y cuerpo |
| `--text-500` | `--white` | Labels y metadatos — **solo a 14 px o más** |
| `--text-on-dark` | `--green-900` / `--green-800` | Hero, footer |
| `--green-900` | `--gold-500` | Texto dentro del botón primario |

**Prohibido:** dorado sobre crema para texto corrido (no pasa AA). El dorado sobre claro solo se admite en piezas grandes o gruesas: títulos de 24 px o más, iconos, reglas.

### 1.5 Estados

```css
/* Foco visible — obligatorio, mismo tratamiento en todo el sitio */
:focus-visible {
  outline: 2px solid var(--gold-500);
  outline-offset: 2px;
  border-radius: 4px;
}
```
Hover: oscurecer 8 % o subir la sombra un nivel. Activo: bajar 1 px. Deshabilitado: 45 % de opacidad y `cursor: not-allowed`.

### 1.6 Paleta café original de los mockups

Si se decide conservar el café de los diseños en lugar del verde, solo cambian estos valores:

```css
--green-900: #2A1E17;  --green-800: #33241B;
--green-700: #4A362A;  --green-100: #F0E8E0;
--text-900:  #3B2E26;  --text-700:  #5A4A3F;  --text-500: #7A6A5E;
```
Nada más en el sistema depende del matiz.

---

## 2. Tipografía

### 2.1 Familias

```css
--font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
--font-body:    'Nunito Sans', -apple-system, 'Segoe UI', sans-serif;
```

- **Serif (display):** títulos de página, títulos de sección, títulos de tarjeta, cifras de la línea de tiempo, citas.
- **Sans (body):** todo lo demás — párrafos, labels, botones, navegación, metadatos.

> Las fuentes exactas de los mockups no están confirmadas. Playfair Display y Nunito Sans son las coincidencias más cercanas. **Confirmar antes de cerrar la v1** (ver §12).

Cargar solo los pesos que se usan: Playfair 400/600/700, Nunito Sans 400/600/700. `font-display: swap` y self-hosting con `preload` en las dos fuentes del hero.

### 2.2 Escala

Escritorio → móvil. Toda la escala usa `clamp()` para que no haga falta media query por título.

| Token | Tamaño | Line-height | Peso | Familia | Uso |
|---|---|---|---|---|---|
| `display-xl` | 64 → 40 | 1.08 | 700 | serif | Título de página interna ("Horarios") |
| `display-l` | 52 → 34 | 1.14 | 700 | serif | Título de hero de Inicio y de evento |
| `h1` | 40 → 30 | 1.2 | 700 | serif | Título principal de contenido |
| `h2` | 32 → 26 | 1.25 | 700 | serif | Título de sección |
| `h3` | 22 → 20 | 1.3 | 700 | serif | Título de tarjeta |
| `h4` | 18 → 17 | 1.4 | 600 | sans | Subtítulo, título de tarjeta pequeña |
| `body-l` | 17 | 1.7 | 400 | sans | Entradilla, párrafo destacado |
| `body` | 16 | 1.7 | 400 | sans | Cuerpo |
| `body-s` | 14 | 1.6 | 400 | sans | Metadatos, descripciones de tarjeta |
| `caption` | 13 | 1.5 | 400 | sans | Notas al pie |
| `overline` | 12 | 1.4 | 700 | sans | `uppercase`, `letter-spacing: 0.12em` — fechas, etiquetas |

### 2.3 Reglas

- **Máximo 70 caracteres por línea** en texto corrido (`max-width: 65ch`).
- Los títulos serif llevan `letter-spacing: -0.01em`; el `overline` lleva `+0.12em`.
- **Un solo `<h1>` por página.** No saltes niveles de encabezado por razones visuales; para eso está la escala de tamaños.
- Los saltos de línea del hero en los mockups son intencionales: usa `<br>` solo en escritorio (`hidden md:inline`), nunca en móvil.

---

## 3. Espaciado, radios y sombras

### 3.1 Escala de espaciado (base 4 px)

```
4  8  12  16  20  24  32  40  48  64  80  96  120
```
Nada fuera de esta escala. En Tailwind: `1 2 3 4 5 6 8 10 12 16 20 24 30`.

**Ritmo vertical:**

| Contexto | Escritorio | Móvil |
|---|---|---|
| Entre secciones | 96 px | 56 px |
| Título de sección → contenido | 32 px | 24 px |
| Entre tarjetas de una grilla | 24 px | 16 px |
| Padding interno de tarjeta | 24 px | 20 px |
| Padding de banda destacada | 40 px | 28 px |

### 3.2 Radios

```css
--radius-sm:   8px;   /* inputs, badges */
--radius-md:  12px;   /* tarjetas, imágenes dentro de tarjetas */
--radius-lg:  16px;   /* tarjetas grandes, bandas destacadas */
--radius-xl:  24px;   /* panel flotante del hero */
--radius-full: 999px; /* botones, iconos circulares, avatares */
```

**Todos los botones son pill** (`--radius-full`). Sin excepción: es la firma visual más reconocible de los mockups.

### 3.3 Sombras

```css
--shadow-sm: 0 1px 2px rgba(22, 40, 31, 0.04);
--shadow-md: 0 4px 16px rgba(22, 40, 31, 0.06);
--shadow-lg: 0 12px 32px rgba(22, 40, 31, 0.10);
```

Las sombras son **muy suaves y difusas**. `--shadow-lg` se reserva para dos casos: la barra flotante bajo el hero y el panel de inscripción del sidebar. Las tarjetas normales usan `--shadow-sm` más `1px solid var(--color-border)`.

---

## 4. Layout

### 4.1 Contenedor y breakpoints

```css
--container-max: 1200px;
--gutter-desktop: 24px;
--gutter-mobile:  16px;
```

| Nombre | Ancho | Comportamiento |
|---|---|---|
| `sm` | ≥ 480 px | Grillas de 1 → 2 columnas |
| `md` | ≥ 768 px | Aparece el menú horizontal; 2–3 columnas |
| `lg` | ≥ 1024 px | Layout completo; sidebar sticky activo |
| `xl` | ≥ 1280 px | Contenedor tope a 1200 px |

Grilla de **12 columnas**, `gap: 24px`.

### 4.2 Repartos usados en los mockups

| Patrón | Escritorio | Móvil |
|---|---|---|
| Tres columnas del inicio (Horarios / Eventos / Evangelio) | 3 + 6 + 3 | Apiladas |
| Detalle de evento (contenido + inscripción) | 8 + 4 | Apiladas, panel arriba |
| Texto + visual (Su vida, Milagros) | 5 + 7 | Apiladas, texto primero |
| Grilla de ministerios | 8 columnas | 2 columnas |
| Noticias + Galería | 8 + 4 | Apiladas |
| Franja de datos (Fecha / Lugar / Para quién) | 3 iguales con divisor | Apiladas, sin divisor |

### 4.3 Sangrado completo (full-bleed)

Solo tres elementos rompen el contenedor: el **hero**, el **footer** y las **bandas de sección** con fondo `--color-bg-alt`. Su *contenido* sigue respetando el contenedor de 1200 px.

---

## 5. Iconografía e imagen

### 5.1 Iconos

- **Estilo lineal**, trazo de 1.5 px, extremos redondeados, caja de 24 × 24.
- Set: **Lucide** (coincide con el estilo de los mockups y tiene paquete para Astro).
- Color por defecto `--gold-500`. Sobre fondo oscuro, `--text-on-dark`.
- **Icono circular:** el patrón más repetido del sistema. Círculo de fondo `--gold-100`, icono dorado centrado.
  - 40 px (tarjeta de horario, contacto), 56 px (barra flotante, virtudes), 72 px (tarjetas grandes de Misas).
- Los iconos decorativos llevan `aria-hidden="true"`. Los que son el único contenido de un botón necesitan `aria-label`.

### 5.2 Imágenes

- Siempre con `<Image />` de `astro:assets`: WebP/AVIF, `width`/`height` explícitos, `loading="lazy"` salvo la del hero (`loading="eager"` + `fetchpriority="high"`).
- **Relaciones de aspecto fijas por componente:**

| Componente | Relación |
|---|---|
| Hero de inicio | 16:9 (mín. 520 px de alto) |
| Hero interno compacto | 21:9 (mín. 300 px de alto) |
| Tarjeta de evento / noticia | 3:2 |
| Tarjeta de servicio (Confesiones…) | 4:3 |
| Miniatura de galería | 4:3 |
| Retrato circular | 1:1 |

- Foto **real de la parroquia** siempre que exista. Sin bancos de imágenes para personas de la comunidad.
- `alt` descriptivo obligatorio. Si la imagen es puramente decorativa, `alt=""`.
- **Marca de agua:** el patrón de rama de olivo de las bandas va a 6–8 % de opacidad, `aria-hidden`, y nunca debajo de texto.

---

## 6. Componentes

Anatomía de cada componente detectado en los mockups. Los nombres son los de archivo en `src/components/`.

### 6.1 `Header`

Altura 72 px (64 en móvil). Logo circular de 40 px con el retrato + wordmark en dos líneas: `PARROQUIA` en `overline`, `SAN CHARBEL` en serif 700.

Navegación: Inicio · Nosotros · Horarios · Sacramentos · Ministerios · Eventos · Noticias · Contacto. `body-s` 600, separación de 28 px. A la derecha, botón primario "Donar" con icono de corazón.

**Dos variantes:**
- `transparent` — sobre un hero. Fondo transparente, texto claro; al hacer scroll > 80 px pasa a sólido con `--shadow-sm`.
- `solid` — páginas sin hero. Fondo `--color-surface-dark`.

**Estado activo:** texto en `--gold-500` + regla inferior de 2 px del mismo color.
**Móvil:** hamburguesa a la derecha, panel a pantalla completa, foco atrapado dentro, cierre con `Esc`.

### 6.2 `Button`

| Variante | Fondo | Texto | Borde | Uso |
|---|---|---|---|---|
| `primary` | `--gold-500` | `--green-900` | — | Una sola por bloque |
| `secondary` | `--white` | `--text-900` | — | Junto a una primaria sobre imagen |
| `tertiary` | transparente | `--gold-600` | 1 px `--gold-300` | "Ver todos", "Leer completo" |
| `ghost-link` | — | `--gold-600` | — | "Leer más →", "Más información →" |
| `whatsapp` | `--gold-500` | `--green-900` | — | Con icono de WhatsApp |

Padding `12px 24px` (`sm`: `8px 18px`; `lg`: `16px 32px`). Radio pill. Icono opcional a la izquierda, 18 px, `gap: 8px`. **Altura mínima táctil de 44 px.**

### 6.3 `SectionHeader`

Título `h2` en serif + **regla dorada de 48 × 3 px** debajo, separada 12 px. Subtítulo opcional en `body` `--text-500`.

Dos alineaciones: `left` (Inicio, Nosotros) y `center` (página Horarios). La alineación se decide **por página completa**, no por sección suelta.

### 6.4 `InfoBar` — barra flotante del hero

Tarjeta blanca, `--radius-xl`, `--shadow-lg`, que se superpone al hero con `margin-top: -72px`. Tres celdas iguales separadas por divisores verticales de 1 px `--color-border`.

Cada celda: icono circular de 56 px + bloque de texto (label en `body-s` `--text-500`, valor en `h4` `--text-900`).

En móvil: apiladas, divisores horizontales, sin superposición negativa.

### 6.5 `Hero` — cuatro variantes

| Variante | Alto | Fondo | Contenido |
|---|---|---|---|
| `home` | 620 px | Imagen + overlay oscuro | Título `display-l`, subtítulo, 2 botones, `InfoBar` |
| `page` | 300 px | Imagen + overlay oscuro | Título `display-xl`, regla dorada, párrafo |
| `light` | 480 px | Imagen + overlay claro (Nosotros) | Eyebrow dorado, título `display-xl` oscuro, regla, párrafo |
| `event` | 520 px | Imagen + overlay oscuro | Breadcrumb "← Volver", título, regla, cita en itálica + referencia, `MetaRow` |

El texto del hero se ancla a la izquierda con `max-width: 620px`.

### 6.6 Tarjetas

**`ScheduleCard`** — icono circular 40 px a la izquierda, día en `h4`, horas en `body-s`. Blanca, borde, `--radius-md`.

**`EventCard`** — imagen 3:2 arriba con `DateBadge` sobre la esquina inferior izquierda; título `h3` (dos líneas máximo, `line-clamp`); metadatos con icono de 14 px (hora, lugar). Toda la tarjeta es un enlace.

**`NewsCard`** — imagen 3:2, fecha en `overline` `--text-500`, título `h4`, enlace "Leer más →".

**`ServiceCard`** — imagen 4:3 con **icono circular blanco de 48 px flotando sobre la esquina inferior izquierda de la imagen** (`translateY(-50%)`); título con regla dorada corta; líneas de horario; enlace. Es la tarjeta de Confesiones / Adoración / Rosario / Despacho.

**`MinistryCard`** — icono circular 56 px centrado + nombre en `body-s` 600 a dos líneas. Cuadrada, muy compacta.

**`FeatureCard`** — icono circular + título `h4` + descripción `body-s`. Sin borde ni sombra cuando va dentro de un panel (bloque "Virtudes").

### 6.7 `DateBadge`

Caja blanca, `--radius-sm`, `--shadow-sm`. Día en serif 700 a 22 px, mes en `overline` `--text-500`. 56 × 56 px.

### 6.8 `Quote` y `Blockquote`

- **`Quote`** (Evangelio del día): comilla decorativa dorada de 40 px arriba, texto en `body-l`, referencia bíblica en `body-s` 700 debajo.
- **`Blockquote`** (dentro de artículos): fondo `--cream-100`, **barra izquierda de 3 px `--gold-500`**, padding de 24 px, referencia en `--gold-600`.

### 6.9 `PromoBand`

Banda de ancho completo con fondo `--color-bg-alt` y `--radius-lg`. Tres usos: banda de San Chárbel, banda de donación, CTA de cierre de página.

Composición: visual a la izquierda (retrato circular con anillo dorado, o icono circular) + bloque de texto + botón a la derecha. Marca de agua de olivo al 6 % en el extremo opuesto al visual. En móvil se apila y se centra.

### 6.10 `SignupPanel`

Tarjeta blanca `--shadow-lg`, `--radius-lg`, **`position: sticky; top: 96px`** a partir de `lg`. Contiene: título serif, texto breve, botón primario a todo el ancho, lista de contacto con iconos, y una caja `--cream-100` con la fecha límite en `--gold-600`.

Debajo de `lg` deja de ser sticky y se mueve **antes** del contenido principal.

### 6.11 `MetaRow` y `DataStrip`

- **`MetaRow`** — fila horizontal de 2–4 datos con icono + texto, separados 32 px. Va dentro de heros. En móvil se envuelve.
- **`DataStrip`** — tres bloques iguales con divisores verticales sobre fondo `--cream-100`, `--radius-lg`, padding 32 px. Cada bloque: icono, título `h4`, contenido. Es la franja "Fecha / Lugar / ¿Para quién?".

### 6.12 `Timeline`

Horizontal en escritorio: fila de iconos circulares, línea de 2 px `--color-border` que los cruza con puntos dorados de 10 px, y debajo año en serif 700 + descripción en `body-s`. Cinco hitos máximo por fila.

**En móvil pasa a vertical**: línea a la izquierda, hitos apilados. No se resuelve con scroll horizontal.

### 6.13 `Gallery`

Grilla de miniaturas 4:3, `--radius-md`, `gap: 16px`. 3 columnas en el inicio, 6 en una fila en páginas internas, 2 en móvil. Hover: `scale(1.03)` y sombra. Abre un **lightbox** con navegación por teclado (`←` `→` `Esc`) y foco atrapado.

### 6.14 `Footer`

Fondo `--color-ink`. Cuatro columnas: marca + tagline + iconos sociales circulares con borde; "Enlaces rápidos" en dos subcolumnas; "Contacto" con iconos; "Síguenos" con icono + nombre de red.

Copyright centrado abajo, separado por `1px solid rgba(255,255,255,0.12)`, en `caption` `--text-on-dark-muted`.

Móvil: una columna, secciones apiladas, social centrado.

### 6.15 `Form`

No aparece en los mockups pero es necesario (inscripciones, intenciones, contacto).

- Label arriba, en `body-s` 600 `--text-700`.
- Input: fondo blanco, `1px solid var(--color-border)`, `--radius-sm`, padding `12px 16px`, alto mínimo 48 px. Foco: borde `--gold-500` + anillo de 3 px al 20 %.
- Error: borde `--error` + mensaje en `body-s` con icono, vinculado por `aria-describedby`.
- Estado de envío: botón deshabilitado con spinner y texto "Enviando…".
- Confirmación **en la misma página**, no en una página aparte.
- Campos obligatorios marcados con `*` y con `required` real.
- Casilla de consentimiento de datos obligatoria en todos los formularios (§10).

---

## 7. Plantillas de página

### 7.1 Inicio
```
Header(transparent) → Hero(home) → InfoBar
Sección 3-col: ScheduleCard×3 | EventCard×3 (carrusel) | Quote
PromoBand(San Chárbel)
MinistryCard×8
NewsCard×3 (8 col) + Gallery (4 col)
PromoBand(donación)
Footer
```

### 7.2 Página institucional (Nosotros)
```
Header(solid) → Hero(light)
Texto + Timeline
Panel de FeatureCard×5 (Virtudes)
Texto + Card×3 (Milagros)
PromoBand(Oración) + tarjeta de cita
Gallery
PromoBand(CTA)
Footer
```

### 7.3 Página de utilidad (Horarios)
```
Header(solid) → Hero(page)
SectionHeader(center) + 3 tarjetas grandes de misas
Barra de nota
ServiceCard×4
Mapa (7 col) + Panel de contacto (5 col)
Footer
```

### 7.4 Detalle (Evento)
```
Header(solid) → Hero(event con breadcrumb, cita y MetaRow)
Contenido (8 col) + SignupPanel sticky (4 col)
  └ Título, párrafos, FeatureCard×4, Blockquote
DataStrip×3
PromoBand(CTA WhatsApp)
Footer
```

### 7.5 Listado (Eventos, Noticias)
```
Header(solid) → Hero(page)
Filtros opcionales (chips pill)
Grilla de Cards (3 col → 2 → 1)
Paginación o "Cargar más"
Footer
```

**Regla transversal:** toda página termina con un `PromoBand` de llamada a la acción antes del footer. En los cuatro mockups se cumple sin excepción.

---

## 8. Implementación

### 8.1 Estructura de carpetas

```
src/
├── components/
│   ├── layout/     Header, Footer, Container, Section, MobileMenu
│   ├── ui/         Button, SectionHeader, DateBadge, Quote, Blockquote, Icon
│   ├── cards/      ScheduleCard, EventCard, NewsCard, ServiceCard,
│   │               MinistryCard, FeatureCard
│   ├── blocks/     Hero, InfoBar, PromoBand, SignupPanel, MetaRow,
│   │               DataStrip, Timeline, Gallery, ContactPanel, MapEmbed
│   └── forms/      Field, TextArea, Checkbox, SubmitButton, FormStatus
├── layouts/        BaseLayout, PageLayout, ArticleLayout
├── lib/
│   ├── supabase.ts       cliente
│   ├── queries/          una función por consulta, tipada
│   └── format.ts         fechas en es-CO, horas, slugs
├── content/        contenido estático (sacramentos, historia) vía Content Collections
├── styles/         tokens.css, base.css, utilities.css
└── pages/
```

### 8.2 Estilos

Tailwind leyendo los tokens desde variables CSS, para que exista **una sola fuente de verdad**:

```js
// tailwind.config.mjs
colors: {
  ink:     'var(--color-ink)',
  accent:  'var(--color-accent)',
  cream:   { 50: 'var(--cream-50)', 100: 'var(--cream-100)', 200: 'var(--cream-200)' },
  // …
}
```

**Reglas:**
- Prohibido escribir un hex dentro de un componente. Siempre token.
- Prohibido escribir un valor de espaciado fuera de la escala.
- Si una combinación de utilidades se repite más de tres veces, se vuelve componente.

### 8.3 Interactividad

Astro estático por defecto. Solo cinco piezas llevan JS, todas con JS nativo dentro de islas (`client:visible` o `client:idle`):

1. Menú móvil y header que cambia con el scroll
2. Carrusel de eventos del inicio
3. Lightbox de galería
4. Envío y validación de formularios
5. Acordeones de preguntas frecuentes

Sin React, Vue ni Svelte mientras esto siga siendo suficiente.

### 8.4 Presupuesto de rendimiento

| Métrica | Objetivo |
|---|---|
| Lighthouse (Rendimiento y Accesibilidad) | ≥ 95 |
| LCP | < 2.0 s en 4G |
| CLS | < 0.05 |
| JS por página | < 40 KB comprimido |
| Peso de imagen del hero | < 250 KB |

Justificación: buena parte de la comunidad entra desde el celular con datos móviles.

---

## 9. Datos (Supabase)

### 9.1 Qué es dinámico y qué no

| Contenido | Dónde vive | Motivo |
|---|---|---|
| Eventos | Supabase | Cambia cada semana |
| Noticias | Supabase | Cambia cada semana |
| Galería | Supabase Storage | Se agregan fotos seguido |
| Horarios de misas | Supabase | Cambia poco, pero debe poder cambiarse sin desplegar |
| Ministerios | Supabase | |
| Inscripciones, intenciones, mensajes | Supabase | Escritura desde formularios |
| Sacramentos, historia, San Chárbel | Content Collections (repo) | Texto institucional, casi inmutable |

### 9.2 Tablas

```
eventos       (id, slug, titulo, resumen, contenido, imagen_url, fecha_inicio,
               fecha_fin, hora, lugar, dirigido_a, cita_biblica, cita_referencia,
               inscripcion_abierta, fecha_limite_inscripcion, publicado, orden)
noticias      (id, slug, titulo, resumen, contenido, imagen_url, fecha, publicado)
horarios      (id, tipo, dia, horas[], nota, orden, activo)
ministerios   (id, nombre, icono, descripcion, contacto, orden, activo)
galeria       (id, imagen_url, alt, album, orden, publicado)
inscripciones (id, evento_id, nombre, telefono, email, mensaje, creado_en)
intenciones   (id, nombre, intencion, email, consentimiento, creado_en)
mensajes      (id, nombre, email, telefono, asunto, mensaje, creado_en)
```

### 9.3 Seguridad

- **RLS activado en todas las tablas, sin excepción.**
- Contenido: `SELECT` público solo con `publicado = true`. Escritura únicamente con rol autenticado.
- Formularios (`inscripciones`, `intenciones`, `mensajes`): `INSERT` público, **`SELECT` denegado al público**. Contienen datos personales.
- La `anon key` es la única que toca el navegador. La `service_role key` jamás sale del servidor ni entra al repo.
- Anti-spam: honeypot + límite por IP. Sin captcha en la primera versión.

### 9.4 Formato

Fechas y horas siempre en `es-CO`, zona `America/Bogota`, centralizado en `lib/format.ts`.
Formato visible: `3, 4 y 5 de julio de 2026`; hora: `6:00 p.m.` (con puntos, como en los mockups).

---

## 10. Accesibilidad

Piso obligatorio, no aspiracional:

- Contraste AA en todo texto (§1.4).
- `:focus-visible` dorado en todo elemento interactivo. **Prohibido `outline: none` sin reemplazo.**
- Navegable con teclado de principio a fin. Menú móvil, lightbox y modales atrapan el foco y cierran con `Esc`.
- Un `<h1>` por página, jerarquía sin saltos.
- `alt` en toda imagen informativa; `alt=""` en decorativas.
- Blanco táctil mínimo de 44 × 44 px.
- Formularios con `<label>` real vinculado; errores anunciados por `aria-live="polite"`.
- Enlace "Saltar al contenido" como primer elemento enfocable.
- `@media (prefers-reduced-motion: reduce)` desactiva animaciones y autoplay del carrusel.
- El color nunca es el único portador de información.
- Idioma declarado: `<html lang="es">`.

---

## 11. Convenciones y checklist

**Nomenclatura**
- Componentes en `PascalCase.astro`; utilidades en `camelCase.ts`.
- Rutas y slugs en español, en minúscula y con guiones: `/sacramentos/primera-comunion`.
- Sin acentos ni `ñ` en nombres de archivo ni en URLs (`san-charbel`, no `san-chárbel`).
- Clases propias en `kebab-case`, prefijadas por componente: `.event-card__title`.

**Checklist antes de abrir un PR**
- [ ] Sin hex ni espaciados fuera de los tokens
- [ ] Probado a 360, 768, 1024 y 1440 px
- [ ] Navegable solo con teclado; foco siempre visible
- [ ] Imágenes con `alt`, dimensiones y formato moderno
- [ ] Contraste verificado en texto nuevo
- [ ] Sin claves de Supabase en el cliente más allá de la `anon key`
- [ ] Lighthouse ≥ 95 en Rendimiento y Accesibilidad
- [ ] Componente nuevo → documentado en §6 de este archivo

---

## 12. Preguntas abiertas

Ninguna bloquea el arranque, pero todas cambian decisiones concretas:

**Diseño**
1. ¿Confirmas verde oscuro en lugar del café de los mockups, o el verde entra solo como acento secundario? (Es una variable, pero cambia por completo el carácter del sitio.)
2. ¿"forado" era **dorado** o **morado**? Asumí dorado.
3. ¿Cuáles son las fuentes reales de los mockups? Si no hay una decisión tomada, cierro con Playfair Display + Nunito Sans.
4. ¿Existe un logo oficial en vectorial, o el retrato circular del header es un marcador de posición?
5. ¿La foto del hero es real de la parroquia o de referencia? Cambia el plan de producción fotográfica.

**Contenido y alcance**
6. ¿Los mockups muestran datos reales (Cra. 43 # 79-120, Barranquilla) o de relleno?
7. Los mockups traen **Ministerios** en el menú, mientras la arquitectura del documento 02 propone **Pastorales**. ¿Con cuál nos quedamos? El menú de los mockups tiene 8 ítems; el propuesto, 6.
8. ¿El sitio va a tener sección de **peticiones o intenciones de misa** en línea? Está en el modelo de datos pero no aparece en los mockups, y es el elemento que más distingue a un sitio de San Chárbel.
9. ¿Habrá versión en árabe o inglés? Cambia la arquitectura de rutas desde el día uno.

**Técnico**
10. ¿Quién administra el contenido? Si no hay panel de Supabase para personas no técnicas, hay que presupuestar un CMS ligero.
11. ¿Las donaciones se procesan en línea (pasarela) o la página solo muestra los datos de cuenta? Cambia por completo el alcance de `/donar`.
12. ¿Dónde se despliega? Se asume Vercel o Netlify con compilación estática y regeneración al publicar contenido.
