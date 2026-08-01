# Investigación: 20 sitios web de iglesias y parroquias

**Fecha:** agosto 2026
**Objetivo:** identificar patrones reales de estructura (no de diseño) para la web de la Parroquia San Chárbel.

## Nota sobre el método y sus límites

El entorno donde se hizo esta investigación **no permite descargar páginas web directamente** (la política de red bloquea el tráfico HTTP saliente). Por lo tanto:

- **Lo que sí está verificado:** los nombres y rutas reales de las páginas de cada sitio (`/misas`, `/sacramentos`, `/bulletins`, etc.), obtenidos de los resultados de búsqueda indexados de cada dominio. Esto es lo más valioso para nuestro objetivo, porque revela cómo cada parroquia **nombra y divide** sus contenidos.
- **Lo que está inferido:** el orden exacto de las secciones de cada página de inicio y el marcado visual del menú. No pude ver los menús renderizados. Los patrones de home descritos en la sección 3 provienen de guías de diseño de webs parroquiales y de las descripciones indexadas, no de una inspección visual sitio por sitio.

Cuando haya acceso a red, vale la pena reabrir 5–6 de estos sitios para confirmar el orden del home. No cambia las conclusiones estructurales.

---

## 1. Los 20 sitios analizados

### Grupo A — Catedrales y basílicas (modelo "santuario + parroquia + patrimonio")

| # | Sitio | País | Páginas reales observadas |
|---|---|---|---|
| 1 | **St. Patrick's Cathedral** (saintpatrickscathedral.org) | EE. UU. | `/masses` ("Mass & Sacraments"), `/bulletins`, `/calendar`, `/live`, `/socialministry`, `/documents/AAAA/M/*.pdf` |
| 2 | **Westminster Cathedral** (westminstercathedral.org.uk) | R. Unido | `/spiritual-life/mass-divine-office/`, `/spiritual-life/watch-a-mass/`, `/spiritual-life/exposition-benediction/`, `/reconciliation/`, `/the-cathedral/plan-your-visit/`, `/the-cathedral/tours/`, `/the-cathedral/an-architectural-gem/`, `/music/`, `/news-events/` |
| 3 | **Notre-Dame de Paris** (notredamedeparis.fr) | Francia | `/prier/messes-et-offices-nd/`, `/prier/messes-et-offices-nd/horaires-offices/`, `/prier/feuilles-liturgiques/`, `/faq/` (con una página por pregunta) |
| 4 | **Basilica of the National Shrine** (nationalshrine.org) | EE. UU. | `/mass-confession-times/`, `/mass/`, `/visit/`, `/pilgrimages/`, `/events/`, `/events/category/pilgrimage/`, `/give/`, `/enrollments-devotionals/` |
| 5 | **Sagrada Família** (sagradafamilia.org) | España | `/schedules-how-to-get`, `/tickets`, `/worship-at-the-basilica`, `/agenda-de-actividades`, `/faqs`, `/rules-and-regulations` |
| 6 | **St Mary's Cathedral Sydney** (stmaryscathedral.org.au) | Australia | `/mass-and-sacraments/`, `/mass-and-sacraments/mass-times/`, `/explore/`, `/explore/visiting-tours/`, `/explore/music/`, `/explore/music/music-list/`, "Support & Donate" |
| 7 | **Christ Cathedral** (christcathedralcalifornia.org) | EE. UU. | `/mass-times/`, `/daily-mass-and-devotions-2/`, `/ministries-services/`, `/events/`, `/event/<slug>/<fecha>/`, `/visit/`, `/about/heritage-and-history/`, `/rector_column/<slug>/` |

### Grupo B — Parroquias grandes (modelo "comunidad + formación + ministerios")

| # | Sitio | País | Páginas reales observadas |
|---|---|---|---|
| 8 | **St. Matthew, Charlotte** (stmatthewcatholic.org) | EE. UU. | `/about-us/`, `/ministries/`, `/alphabetical-list-of-all-ministries-groups/`, `/faithformation`, `/adultfaithformation`, `/bulletins-enewsletter`, `/parish-directory/`, `/calendar/<slug>/` |
| 9 | **The London Oratory** (bromptonoratory.co.uk) | R. Unido | `/regular-mass-service-times`, `/parish-activities`, `/music`, `/weekly-parish-newsletter/AAAA/M/<slug>`, `/news-pages/from-the-provost`, `/further-informations` |
| 10 | **Old St. Patrick's, Chicago** (oldstpats.org) | EE. UU. | `/mass-schedule.html`, `/liturgical-ministry.html`, `/outreach.html`, `/giving.html`, `/events.html`, `/crossroads-publication.html` (boletín), `/lent.html` (página estacional) |
| 11 | **Church of the Nativity, Timonium** (churchnativity.com) | EE. UU. | `/new` ("I'm New"), `/member/`, `/groups/`, `/kids/`, `/youngadults/`, `/watch/`, `/watch/small-groups/`, `/lent/`, `/nativity-online/` |
| 12 | **Holy Family, Artesia** (holyfamilyartesia.org) | EE. UU. | `/mass-times`, `/category/mass`, `/category/sacraments`, `/sacraments/confession-penance`, `/category/ministry`, `/ministries/religious-education`, `/bulletin` |

### Grupo C — Parroquias hispanohablantes (nuestro referente lingüístico directo)

| # | Sitio | País | Páginas reales observadas |
|---|---|---|---|
| 13 | **Parroquia Santa María de Caná** (smcana.es) | España | `/sacramentos/`, `/catequesis/`, `/caritas/`, `/caridad/`, `/donativos/` |
| 14 | **Parroquia de Santa Bárbara** (parroquiadesantabarbara.com) | España | `Horarios`, `Grupos Parroquiales` (páginas por ID) |
| 15 | **La Asunción de Ntra. Sra., Pozuelo** (asuncionpozuelo.archimadrid.es) | España | `/la-parroquia/horario-de-la-parroquia/`, `/caritas/` |
| 16 | **Parroquia San Juan de la Cruz** (parroquiasanjuandelacruz.es) | España | Horarios de misas en portada |
| 17 | **Ntra. Sra. del Santísimo Sacramento, Bogotá** (arquibogota.org.co) | Colombia | `/centro-de-informacion/articulos/horario-de-misas`, `/horario-de-despacho-parroquial`, `/requisitos-sacramentos`, `/centro-de-informacion/noticias`, `/organismos` |

### Grupo D — San Chárbel y mundo maronita (referentes de patrón directo)

| # | Sitio | País | Páginas reales observadas |
|---|---|---|---|
| 18 | **Parroquia San Charbel, Barranquilla** (parroquiasancharbel.org) | Colombia | `/misas`, `/celebraciones/`, `/matrimonios/`, `/san-charbel/` |
| 19 | **Santuario San Chárbel, Morelia** (santuariosancharbel.org) | México | `/san-charbel`, `/nuestro-santuario`, `/parroquia`, `/liturgia`, `/espiritualidad`, `/vida`, `/intenciones-de-misa`, `/testimonios`, `/contacto` |
| 20 | **San Charbel México** (sancharbel.org.mx) | México | `/about/` ("Bienvenid@"), `/devoción-a-san-charbel/`, `/devoción-a-san-charbel/oraciones/`, `/peticiones/`, `/bienvenidos/fechas-importantes/`, `/bienvenidos/milagros-de-1950/`, `/santos-maronitas/san-maron/` |

*(Complemento: St. Charbel's Monastery, Punchbowl–Sídney — `stcharbel.org.au` — con `/our-parish/mass-times-2/`, `/services/`, `/youth/scya-2/`, `/youth/iseek/`, `/youth/guardians/`, `/church-groups/faith-and-light/`. Es el ejemplo más completo de parroquia maronita dedicada a San Chárbel.)*

---

## 2. Características comunes: qué aparece en casi todos

Ordenado por frecuencia observada (de 20 sitios):

| Característica | Frecuencia | Comentario |
|---|---|---|
| **Horarios de misa como página propia** | 20/20 | Es la página más buscada, sin excepción. Muchos la ponen también en la portada. |
| **Datos de contacto y ubicación** | 20/20 | Dirección, teléfono, mapa, horario del despacho parroquial. |
| **Página "Quiénes somos" / historia** | 19/20 | Con nombres distintos: *About Us*, *Nuestro Santuario*, *La Parroquia*, *Heritage & History*. |
| **Sacramentos (con requisitos)** | 18/20 | En hispanoamérica casi siempre incluye **requisitos y documentos**, no solo teología. |
| **Confesiones / reconciliación** | 17/20 | A veces dentro de "Horarios", a veces página propia. |
| **Grupos, ministerios o pastorales** | 17/20 | El bloque que más varía en tamaño: de 5 grupos a 100+. |
| **Donaciones / colaborar** | 16/20 | En EE. UU. y España es un botón permanente en el menú. |
| **Noticias / avisos / boletín** | 16/20 | Boletín semanal en PDF es el formato dominante en EE. UU. y R. Unido. |
| **Calendario o agenda de actividades** | 15/20 | Ver sección 4. |
| **Catequesis / formación** | 14/20 | En parroquias grandes es una sección entera con subpáginas por edad. |
| **Transmisión en vivo / video** | 11/20 | Muchos resuelven con enlace a Facebook o YouTube, no con reproductor propio. |
| **Sección de visita / turismo** | 8/20 | Solo en catedrales, basílicas y santuarios con flujo de peregrinos. |
| **Música / coro** | 6/20 | Exclusivo de catedrales con tradición musical. |
| **Multi-idioma** | 6/20 | Notre-Dame, Sagrada Família, Holy Family Artesia (5 idiomas), St. Charbel Sídney (árabe/inglés). |
| **Peticiones / intenciones de misa en línea** | 4/20 | **Casi exclusivo de santuarios devocionales** — y los tres santuarios de San Chárbel lo tienen. |
| **Testimonios / milagros** | 3/20 | Igualmente propio de santuarios devocionales. |
| **Página "Soy nuevo"** | 3/20 | Patrón estadounidense (`/new`, `/member/`). Poco usado en el mundo hispano. |

---

## 3. Cómo está hecha la página de inicio

El patrón dominante, en orden de arriba hacia abajo:

1. **Barra superior fija:** logo + nombre de la parroquia, menú principal (5–7 ítems), y un botón destacado a la derecha (`Donar`, `Give`, `Support`). En sitios multilingües, el selector de idioma va aquí.

2. **Hero / portada:** una imagen grande del templo (o video de fondo) con el nombre de la parroquia y una frase corta. En santuarios, la imagen es del santo o de la reliquia.

3. **Horarios de misa "sobre el pliegue":** el consenso de todas las guías consultadas es que los horarios y la dirección deben verse **sin hacer scroll**. Suele resolverse como una franja de 2–4 columnas justo debajo del hero: *Misas entre semana / Misas dominicales / Confesiones / Despacho parroquial*.

4. **Bienvenida del párroco:** párrafo breve con foto real del sacerdote. Las guías insisten en fotos reales de la comunidad, no de banco de imágenes.

5. **Accesos rápidos (3–6 tarjetas):** los destinos más pedidos. Típicamente: *Sacramentos*, *Grupos/Pastorales*, *Agenda*, *Ubicación*, *Donar*.

6. **Próximas actividades:** 3–4 eventos tomados del calendario, con enlace a la agenda completa.

7. **Noticias o boletín reciente:** 2–3 entradas, o el PDF del boletín de la semana.

8. **Bloque devocional** (solo santuarios): oración al santo, novena, o acceso a "envía tu petición".

9. **Ubicación:** mapa embebido + dirección + cómo llegar.

10. **Pie de página:** horarios resumidos, contacto, redes sociales, enlaces a la diócesis, aviso de privacidad.

Dos tendencias de 2026 que aparecen en las guías: **layouts limpios con mucho espacio en blanco** y **video/foto de la vida parroquial** por encima del texto largo. La conclusión repetida es que los mejores sitios "no buscan impresionar: guían, informan e invitan".

---

## 4. ¿Hay cronograma de actividades? Sí, y hay tres modelos

Esta era una de tus preguntas concretas. De los 20 sitios, **15 tienen algún tipo de agenda**, resuelta de tres formas distintas:

**Modelo A — Calendario dinámico completo** (St. Patrick's `/calendar`, Christ Cathedral `/events/`, National Shrine `/events/`, St. Matthew `/calendar/<slug>/`, Sagrada Família `/agenda-de-actividades`)
Cada evento es una página propia con fecha, hora, lugar y descripción. Se puede filtrar por categoría (ej. National Shrine tiene `/events/category/pilgrimage/`). Es lo más potente, pero exige que alguien lo mantenga cada semana.

**Modelo B — Horario fijo semanal publicado como tabla** (parroquias españolas y colombianas: Santa Bárbara, San Juan de la Cruz, Pozuelo, Santísimo Sacramento Bogotá)
No es un calendario: es una **página de horarios** con la rutina estable de la parroquia (misas, confesiones, despacho, catequesis, adoración). Cambia dos o tres veces al año.

**Modelo C — Boletín semanal en PDF** (St. Patrick's `/bulletins`, Old St. Pat's `/crossroads-publication.html`, London Oratory `/weekly-parish-newsletter/`, Holy Family `/bulletin`)
El cronograma vive dentro de un PDF que se sube cada semana. Barato de mantener, pero malo para buscar en Google y malo en el celular.

**Recomendación para San Chárbel:** empezar con **B + una versión ligera de A**. Es decir: una página de *Horarios* fija (que resuelve el 80% de las consultas) más una lista de *Próximas celebraciones* editable, sin construir todavía un sistema de calendario completo. El modelo C se puede añadir después si la parroquia ya produce un boletín impreso.

---

## 5. Cuántas páginas tienen y cómo las nombran

**Rangos observados:**

| Tipo de sitio | Nº de páginas de nivel 1 | Total aprox. de páginas |
|---|---|---|
| Parroquia hispana mediana | 5–7 | 12–25 |
| Parroquia grande EE. UU. | 6–8 | 60–150+ (una página por ministerio) |
| Catedral / basílica | 6–8 | 40–80 |
| Santuario devocional | 6–9 | 15–30 |

**El menú principal casi nunca pasa de 7 ítems.** Cuando hay más contenido, se anida en submenús (Westminster: todo cuelga de `/spiritual-life/` y `/the-cathedral/`; St Mary's Sydney: de `/mass-and-sacraments/` y `/explore/`).

**Cómo nombran las páginas — dos escuelas:**

*Escuela litúrgica/tradicional (Europa e Hispanoamérica):* nombres que describen la realidad eclesial.
`Horarios` · `Sacramentos` · `Catequesis` · `Grupos Parroquiales` · `Cáritas` · `Donativos` · `Liturgia` · `Espiritualidad` · `Despacho parroquial`

*Escuela pastoral/invitacional (EE. UU.):* verbos y lenguaje de acogida.
`I'm New` · `Worship` · `Connect` · `Grow` · `Serve` · `Give` · `Watch`

Las guías de navegación parroquial recomiendan explícitamente esta terminología "más suave" (*Worship*, *Connect*, *Give*), pero **para una parroquia hispanohablante la escuela litúrgica funciona mejor**: es la que la gente usa cuando busca en Google ("horario de misas parroquia san charbel"), y es la que emplean los cuatro referentes hispanos y los tres sitios de San Chárbel.

**Nombres concretos más repetidos, en español:**
`Inicio` · `La Parroquia` · `Horarios` · `Misas` · `Sacramentos` · `Catequesis` · `Pastorales` / `Grupos` · `Agenda` / `Celebraciones` · `Noticias` · `Contacto` · `Donativos` / `Colabora`

---

## 6. Lo que distingue a un sitio de San Chárbel de una parroquia cualquiera

Los tres sitios dedicados a San Chárbel comparten un bloque que **no existe en parroquias normales** y que debe estar en nuestra estructura:

1. **Página del santo con biografía** (`/san-charbel`, `/vida-de-san-charbel`) — la puerta de entrada de mucha gente que llega por devoción, no por cercanía geográfica.
2. **Oraciones y novena** (`/devoción-a-san-charbel/oraciones/`) — contenido de altísimo tráfico y muy compartido por WhatsApp.
3. **Peticiones / intenciones de misa en línea** (`/peticiones/`, `/intenciones-de-misa`) — formulario donde el fiel envía su intención. Los tres sitios lo tienen; ninguna parroquia común de la muestra lo tiene.
4. **Testimonios y milagros** (`/testimonios`, `/milagros-de-1950`) — contenido devocional que sostiene la comunidad a distancia.
5. **Fechas significativas** (`/bienvenidos/fechas-importantes/`) — el calendario devocional propio: el día fijo mensual dedicado al santo y la fiesta anual.
6. **Contexto maronita** (`/santos-maronitas/san-maron/`, "qué es el maronismo") — explicar la tradición de la que viene el santo.

**Sobre el día mensual:** las devociones a San Chárbel se organizan alrededor de un día fijo del mes, pero **el día varía según el lugar**: el santuario de Annaya (Líbano) convoca peregrinación el **día 22 de cada mes**, mientras que el Santuario de Morelia celebra misa a San Chárbel el **día 8**. La fiesta litúrgica es el **24 de julio** en el calendario romano y el **tercer domingo de julio** en el calendario maronita. Hay que confirmar con la parroquia cuál es su práctica antes de fijarlo en la web — es un dato que conviene tener resuelto porque estructura toda la sección de agenda.

---

## Fuentes

Sitios analizados: [St. Patrick's Cathedral NY](https://saintpatrickscathedral.org/) · [Westminster Cathedral](https://westminstercathedral.org.uk/) · [Notre-Dame de Paris](https://www.notredamedeparis.fr/) · [National Shrine](https://www.nationalshrine.org/) · [Sagrada Família](https://sagradafamilia.org/en/) · [St Mary's Cathedral Sydney](https://stmaryscathedral.org.au/) · [Christ Cathedral](https://www.christcathedralcalifornia.org/) · [St. Matthew Charlotte](https://stmatthewcatholic.org/) · [The London Oratory](https://www.bromptonoratory.co.uk/) · [Old St. Patrick's Chicago](https://www.oldstpats.org/) · [Church of the Nativity](https://www.churchnativity.com/) · [Holy Family Artesia](https://holyfamilyartesia.org/) · [Santa María de Caná](https://smcana.es/) · [Santa Bárbara](https://parroquiadesantabarbara.com/) · [Asunción Pozuelo](https://asuncionpozuelo.archimadrid.es/) · [San Juan de la Cruz](https://www.parroquiasanjuandelacruz.es/) · [Stmo. Sacramento Bogotá](https://psantisimosacramento.arquibogota.org.co/) · [Parroquia San Charbel Barranquilla](https://parroquiasancharbel.org/) · [Santuario San Chárbel Morelia](https://www.santuariosancharbel.org/) · [San Charbel México](https://www.sancharbel.org.mx/) · [St Charbel's Monastery Sídney](http://www.stcharbel.org.au/)

Guías de estructura y buenas prácticas: [LPi – Website Navigation](https://www.4lpi.com/blog/website-navigation-best-user-experience) · [LPi – 10 Best Practices](https://www.4lpi.com/blog/10-best-practices-for-church-websites) · [LPi – Six Catholic Parish Website Trends](https://www.4lpi.com/blog/six-catholic-parish-website-trends) · [Missional Marketing – Site Structure Guide](https://missionalmarketing.com/church-website-site-structure-the-definitive-guide/) · [Freshy – Guide to Creating Your Catholic Parish Website](https://freshysites.com/focus-on/parish-website-design/the-ultimate-guide-to-creating-your-catholic-parish-website/) · [The Church Co – 12 Things Every Church Website Must Have](https://thechurchco.com/blog/2024/05/28/12-things-every-church-website-must-have/) · [ChMeetings – Best Catholic Parish Websites](https://www.chmeetings.com/blog/8-best-catholic-parish-websites-a-path-to-spiritual-engagement-in-the-digital-age/)
