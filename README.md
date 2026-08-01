# Web Parroquia San Chárbel

Sitio web para la parroquia bajo la advocación de San Chárbel Makhlouf, en **Villa Carolina, Barranquilla (Atlántico, Colombia)**.

## Estado

**Fase actual: sistema de diseño.** La arquitectura de información está definida y el sistema visual está derivado de los mockups.

## Stack

- **Frontend:** Astro (estático, con islas de JS nativo)
- **Backend:** Supabase (contenido dinámico, formularios, almacenamiento)
- **Estilos:** Tailwind sobre tokens en variables CSS

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

1. Confirmar el único punto abierto de la sección 12.1 de `03-sistema-de-diseno.md` (si el formulario de peticiones a San Chárbel sigue en pie).
2. Resolver las decisiones pendientes en la parroquia: día de la misa mensual al santo, fiesta patronal, rito, dirección exacta y quién mantiene el sitio.
3. Montar el proyecto Astro con los tokens y los componentes base de `layout/` y `ui/`.
4. Conseguir fotos reales del templo, el párroco y las pastorales.
5. Redactar los textos de las páginas de la fase 1.
