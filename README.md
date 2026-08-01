# Web Parroquia San Chárbel

Sitio web para una parroquia católica bajo la advocación de San Chárbel Makhlouf.

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

El sistema visual se apoya en tres constantes: fondo crema, superficies oscuras y dorado como único acento. Botones siempre pill, títulos en serif con regla dorada debajo, sombras muy suaves y el patrón de icono circular repetido en todo el sitio.

## Próximos pasos

1. Resolver las preguntas abiertas de la sección 12 de `03-sistema-de-diseno.md` (verde vs. café, fuentes definitivas, Ministerios vs. Pastorales, alcance de donaciones).
2. Resolver las decisiones pendientes de la sección 6 de `02-arquitectura-propuesta.md` (día de la misa mensual al santo, rito, ciudad y diócesis, quién mantiene el sitio).
3. Montar el proyecto Astro con los tokens y los componentes base de `layout/` y `ui/`.
4. Redactar los textos reales de las páginas de la fase 1.
