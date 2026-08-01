# Web Parroquia San Chárbel

Sitio web para una parroquia católica bajo la advocación de San Chárbel Makhlouf.

## Estado

**Fase actual: arquitectura de información.** Todavía no hay decisiones de diseño ni de tecnología.

## Documentación

| Documento | Contenido |
|---|---|
| [`docs/01-investigacion-referentes.md`](docs/01-investigacion-referentes.md) | Análisis de 20 sitios de iglesias, catedrales, santuarios y parroquias. Características comunes, estructura de la portada, número y nombres de páginas, y cómo resuelven el cronograma de actividades. |
| [`docs/02-arquitectura-propuesta.md`](docs/02-arquitectura-propuesta.md) | Propuesta concreta: menú, mapa del sitio, bloques de la página de inicio, contenido de cada página y decisiones pendientes. |

## Resumen de la propuesta

Menú de seis ítems más un botón de donación:

```
Inicio | La Parroquia | San Chárbel | Sacramentos | Comunidad | Contacto    [Donar]
```

13 páginas en el lanzamiento, ampliables a ~22 en una segunda fase. La portada se organiza en 11 bloques, de los cuales dos son fijos: los **horarios de misa sin necesidad de hacer scroll** y el **bloque devocional a San Chárbel** con el formulario de peticiones.

## Próximos pasos

1. Resolver las decisiones pendientes de la sección 6 de `02-arquitectura-propuesta.md` (día de la misa mensual al santo, rito, ciudad y diócesis, quién mantiene el sitio).
2. Redactar los textos reales de las 13 páginas de la fase 1.
3. Definir diseño visual y stack técnico.
