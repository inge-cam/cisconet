# Estructura de las páginas — Parroquia San Chárbel

Una ficha por página: qué bloques lleva, en qué orden, con qué componentes se arma, qué texto hay que redactar y cómo se sabe que está terminada.

**Cómo se relaciona con los otros documentos:**

| Documento | Responde |
|---|---|
| `01-investigacion-referentes.md` | Qué hacen 20 parroquias reales — la evidencia |
| `02-arquitectura-propuesta.md` | Qué páginas existen y cómo se llaman — el mapa |
| `03-sistema-de-diseno.md` | Cómo se ven — los componentes |
| **`04` (este)** | **Cómo se arma cada una — el plano de construcción** |

Cada ficha cita la evidencia de la investigación que justifica sus decisiones. Cuando algo aquí contradiga a los documentos 02 o 03, gana el documento anterior y este se corrige.

---

## 1. Los cinco principios que gobiernan todas las páginas

Salen directamente de la investigación, no de preferencias.

### 1.1 «No buscan impresionar: guían, informan e invitan»

Es la conclusión repetida en las siete guías consultadas (§3 del doc 01). Traducido a decisiones concretas:

- El dato útil va **antes** que el texto bonito. Horarios antes que historia, requisitos antes que teología.
- Ninguna página abre con tres párrafos de bienvenida. Abre con lo que la persona vino a buscar.
- Si un bloque no ayuda a alguien a hacer algo (venir a misa, bautizar a un hijo, inscribirse, donar, rezar), sobra.

### 1.2 La gente llega por Google, a una página interior

Nadie escribe «parroquiasancharbel.co» y navega. Escribe «horario de misas san charbel barranquilla» y cae directo en `/horarios`. Consecuencias:

- **Cada página debe funcionar sola**, sin depender de que la anterior se haya leído.
- Toda página lleva su propio bloque de contacto o CTA al final. Nunca se asume que bajarán al pie.
- Los nombres son los de la **escuela litúrgica** (§5 del doc 01): `Horarios`, `Sacramentos`, `Catequesis`, `Pastorales`. Son los que la gente teclea.

### 1.3 Anatomía universal

Toda página del sitio, sin excepción, tiene esta estructura:

```
Header (sólido, salvo Inicio)
Hero — título + regla dorada + una frase de contexto
[ bloques propios de la página ]
PromoBand de cierre — llamada a la acción
Footer
```

La banda de cierre no es decorativa: es la que recoge a quien llegó desde Google y terminó de leer.

### 1.4 Presupuesto de contenido

Ninguna página de fase 1 pasa de **6 bloques propios**. Si necesita más, se parte en dos. El error más común en webs parroquiales es lanzar muchas páginas vacías (§2 del doc 02); el segundo es una sola página infinita.

### 1.5 Cada página declara sus datos

Al final de cada ficha va una tabla que dice qué es estático (vive en el repo) y qué es dinámico (vive en Supabase). Si una página es 100 % estática, no se le conecta base de datos.

---

## 2. Orden de construcción

Por frecuencia observada en la investigación (§2 del doc 01), no por gusto:

| Prioridad | Páginas | Evidencia |
|---|---|---|
| **1** | `/horarios` | 20/20 sitios la tienen. Es la más buscada, sin excepción |
| **1** | `/contacto` | 20/20 sitios la tienen |
| **2** | `/sacramentos` + las 6 fichas | 18/20. En Hispanoamérica casi siempre con **requisitos y documentos** |
| **2** | `/san-charbel` + `/vida` + `/oraciones` | Es lo que nos distingue de cualquier parroquia (§6 del doc 01) |
| **3** | `/` completa | Depende de que existan las anteriores para enlazarlas |
| **3** | `/parroquia` + `/historia` + `/clero` | 19/20 tienen «quiénes somos» |
| **4** | `/pastorales`, `/catequesis` | 17/20 y 14/20 |
| **4** | `/agenda`, `/noticias` | 15/20 y 16/20 |
| **5** | `/donar` | 16/20. Versión simple: la pasarela va en otra fase |

**Las dos primeras resuelven el 80 % de las visitas.** Si el proyecto se quedara sin tiempo, un sitio con solo Inicio, Horarios, Sacramentos y Contacto ya sería útil.

---

## 3. Fichas de página

Formato de cada ficha:
**Propósito** · **Evidencia** · **Plantilla** (del doc 03 §7) · **Bloques** · **Contenido a redactar** · **Datos** · **SEO** · **Terminada cuando**

---

### 3.1 `/` — Inicio

**Propósito.** Orientar en tres segundos: qué parroquia es, cuándo hay misa, y por dónde entrar a lo demás.

**Evidencia.** Patrón dominante de portada (§3 del doc 01). Los 11 bloques están fijados en §3 del doc 02, con dos inamovibles.

**Plantilla.** §7.1 del sistema de diseño.

**Bloques**

| # | Bloque | Componentes | Estado |
|---|---|---|---|
| 1 | Cabecera | `Header(transparent)` | ✅ construido |
| 2 | Portada | `Hero(home)` | ✅ construido |
| 3 | **Horarios** | `InfoBar` de 4 celdas | ✅ construido |
| 4 | Bienvenida del párroco | Retrato + texto + `Button(tertiary)` | ⬜ falta contenido |
| 5 | **Devoción a San Chárbel** | `PromoBand` + `Quote` | ✅ construido |
| 6 | ¿Qué necesitas? | `NeedCard` × 4 | ✅ construido |
| 7 | Próximas celebraciones | `AgendaCard` × 3 | ⬜ necesita Supabase |
| 8 | Nuestra comunidad | Fotos reales + enlace | ⬜ faltan fotos |
| 9 | Noticias y avisos | `NewsCard` × 3 | ⬜ necesita Supabase |
| 10 | Cómo llegar | `MapEmbed` + `ContactPanel` | ⬜ falta dirección |
| 11 | Pie | `Footer` | ✅ construido |

**Los bloques 3 y 5 no se mueven.** El 3 debe verse sin hacer scroll: es el consenso de todas las guías (§3.3 del doc 01) y ya está resuelto con la superposición negativa de la `InfoBar`.

**Contenido a redactar**
- Frase de portada (máx. 2 líneas).
- Párrafo del párroco: 3–4 frases, en primera persona, firmado con su nombre. **Voz humana, no institucional.**
- Los 4 textos de «¿Qué necesitas?», en primera persona del fiel.

**Datos.** Bloques 3, 7 y 9 desde Supabase (`horarios`, `celebraciones`, `noticias`). El resto, estático.

**SEO**
- `<title>`: `Parroquia San Chárbel — Villa Carolina, Barranquilla`
- Schema: `Church` con `address`, `telephone`, `openingHoursSpecification`.

**Terminada cuando** los horarios se ven sin scroll a 1440 px y a un gesto en móvil, y los 11 bloques enlazan a páginas que existen.

---

### 3.2 `/horarios` — Horarios

**Propósito.** Responder «¿a qué hora es la misa?» en menos de cinco segundos, sin scroll y sin clics.

**Evidencia.** **20/20 sitios la tienen** — la única característica presente en toda la muestra. Modelo B de la §4 del doc 01: tabla fija semanal, que es como la resuelven las cuatro parroquias hispanas estudiadas.

**Plantilla.** §7.3 del sistema de diseño.

**Bloques**
1. `Hero(page)` — título «Horarios», regla dorada, una frase.
2. **Misas** — `SectionHeader(center)` + 3 tarjetas grandes: *Lunes a viernes* · *Sábado* · *Domingo*.
3. **Barra de nota** — aviso de horarios especiales en Semana Santa, Navidad y fiesta patronal.
4. **Otros servicios** — `ServiceCard` × 4: Confesiones · Adoración al Santísimo · **Misa a San Chárbel** · Despacho parroquial.
5. **Dónde y cómo** — `MapEmbed` + `ContactPanel` con botón de WhatsApp.
6. `PromoBand` de cierre.

**La misa mensual a San Chárbel va aquí, no escondida en la agenda.** Es el dato devocional que más se consulta después de las misas dominicales.

**Contenido a redactar**
- Todos los horarios reales.
- La nota de temporadas especiales.
- **PENDIENTE crítico:** el día del mes de la misa a San Chárbel. Annaya usa el 22, Morelia el 8 (§6 del doc 01). Sin este dato la página queda incompleta.

**Datos.** Todo desde Supabase (`horarios`), para que la parroquia pueda cambiarlos sin desplegar.

**SEO**
- `<title>`: `Horarios de misa — Parroquia San Chárbel, Barranquilla`
- Es la página que más tráfico de búsqueda va a recibir: la descripción debe incluir los horarios dominicales literales.
- Schema: `openingHoursSpecification` + `Event` para la misa mensual.

**Terminada cuando** alguien que llega desde Google ve los horarios de misa sin hacer scroll en un celular de 360 px.

---

### 3.3 `/contacto` — Contacto y ubicación

**Propósito.** Que puedan llegar, llamar o escribir.

**Evidencia.** 20/20 sitios.

**Plantilla.** §7.3.

**Bloques**
1. `Hero(page)`.
2. **Cómo llegar** — mapa embebido + dirección + referencias del barrio + transporte público.
3. **Datos de contacto** — `DataStrip`: teléfono · WhatsApp · correo, con horario del despacho.
4. **Escríbenos** — formulario (nombre, correo, teléfono, asunto, mensaje, consentimiento).
5. **Redes sociales**.
6. `PromoBand` de cierre.

**Las referencias del barrio importan más que la dirección exacta.** En Barranquilla la gente se orienta por puntos conocidos, no por nomenclatura.

**Contenido a redactar.** Dirección completa, referencias («frente a…», «a una cuadra de…»), rutas de bus, teléfonos, horario del despacho.

**Datos.** Estático (`config/sitio.ts`), salvo el formulario → `mensajes`.

**SEO.** `<title>`: `Contacto y ubicación — Parroquia San Chárbel`. Schema `Church` completo con `geo`.

**Terminada cuando** el botón de WhatsApp abre un chat con mensaje prellenado y el mapa carga sin bloquear la página.

---

### 3.4 `/sacramentos` — Índice

**Propósito.** Repartir hacia los siete sacramentos y responder de una vez las dudas comunes.

**Evidencia.** 18/20 sitios. En Hispanoamérica **casi siempre con requisitos y documentos, no solo teología** (§2 del doc 01). Los referentes colombianos tienen páginas específicas de «Requisitos Sacramentos» precisamente por esto.

**Plantilla.** §7.3.

**Bloques**
1. `Hero(page)`.
2. Párrafo breve: qué son los sacramentos (máximo 4 líneas).
3. **Grilla de 6 tarjetas** con enlace a cada ficha.
4. **Barra de nota:** «Todos los trámites se hacen en el despacho parroquial», con horario y teléfono.
5. `PromoBand` de cierre.

**Contenido a redactar.** El párrafo introductorio y una línea por sacramento.

**Datos.** Estático (Content Collections).

**SEO.** `<title>`: `Sacramentos y requisitos — Parroquia San Chárbel`. Incluir «requisitos» en el título: es la palabra que la gente busca.

---

### 3.5 `/sacramentos/<slug>` — Las seis fichas

Bautismo · Primera Comunión · Confirmación · Matrimonio · Confesión · Unción de enfermos.

**Propósito.** Que alguien sepa exactamente qué papeles necesita y a dónde ir, sin llamar.

**Evidencia.** El hallazgo más claro de la investigación para el mundo hispano: la gente no viene por teología, viene por el trámite.

**Plantilla.** §7.6 del sistema de diseño — estructura fija, idéntica en las seis.

**Bloques — siempre en este orden**
1. `Hero(page)`.
2. **Qué es** — un párrafo. Uno.
3. **Requisitos y documentos** — lista con iconos o `DataStrip`. ← *lo que la persona vino a buscar*
4. **Cómo solicitarlo** — pasos numerados: a quién, dónde, con cuánta anticipación.
5. **Costos o aportes** — caja crema. Si no aplica, se dice explícitamente.
6. `SidePanel` sticky con despacho, teléfono y WhatsApp.
7. `PromoBand` de cierre.

**Regla dura:** el bloque 3 va **arriba del pliegue en móvil** y **nunca dentro de un acordeón cerrado**. Es el contenido más consultado de toda la sección.

**Contenido a redactar.** Los seis juegos de requisitos reales, con nombres exactos de documentos («registro civil de nacimiento», no «papeles del niño»), plazos y costos.

**Datos.** Estático (Content Collections). Cambia una o dos veces al año.

**SEO**
- `<title>`: `Bautismo: requisitos y documentos — Parroquia San Chárbel`
- Schema: `FAQPage` si los requisitos se redactan como preguntas.

**Terminada cuando** alguien puede reunir todos sus documentos sin llamar a la parroquia.

---

### 3.6 `/san-charbel` — Índice del santo

**Propósito.** Recibir a quien llega por devoción, no por cercanía geográfica.

**Evidencia.** §6 del doc 01: es el bloque que **no existe en parroquias normales** y que tienen los tres sitios de San Chárbel estudiados. Es nuestro diferencial.

**Plantilla.** §7.2 (institucional, hero claro).

**Bloques**
1. `Hero(light)` — eyebrow «Conoce a», título grande.
2. Resumen de 2 párrafos: quién fue y por qué esta parroquia lleva su nombre.
3. **Tres accesos:** Su vida · Oraciones y novena · Envía tu petición.
4. **Fechas devocionales** — `DataStrip`: la misa mensual y la fiesta patronal.
5. `PromoBand` con la oración breve.

**Contenido a redactar.** Los dos párrafos de resumen y la explicación de por qué la parroquia lleva su nombre — que es información local, no biográfica.

---

### 3.7 `/san-charbel/vida` — Su vida

**Propósito.** La biografía completa, que es puerta de entrada de mucho tráfico de búsqueda.

**Plantilla.** §7.2.

**Bloques**
1. `Hero(light)`.
2. Texto + **`Timeline` horizontal** con los cinco hitos: **1828** nace en Bekaa Kafra · **1851** entra al monasterio · **1875** se retira a la ermita de Annaya · **1965** beatificación · **1977** canonización.
3. **Virtudes** — `FeatureCard` × 5.
4. **Milagros y devoción en América Latina** — texto + 3 tarjetas.
5. **La tradición de los listones** — las cintas con peticiones, que es lo que la gente ve al llegar al templo.
6. `PromoBand` → peticiones.

**Contenido a redactar.** Biografía (~800 palabras), las cinco virtudes y la explicación de los listones.

**Datos.** Estático.

**SEO.** `<title>`: `¿Quién fue San Chárbel? Vida del santo del Líbano`. Esta página compite por búsquedas nacionales, no locales: vale la pena redactarla bien.

---

### 3.8 `/san-charbel/oraciones` — Oraciones y novena

**Propósito.** Dar el texto que la gente busca para rezar y compartir.

**Evidencia.** §6.2 del doc 01: **contenido de altísimo tráfico y muy compartido por WhatsApp**. Es la página con más potencial de difusión de todo el sitio.

**Bloques**
1. `Hero(light)`.
2. **Oración a San Chárbel** — `Blockquote` grande, texto completo.
3. **Novena de nueve días** — acordeón, un día por panel.
4. **Oración por los enfermos** — es el patronazgo del santo.
5. **Botón de compartir por WhatsApp** en cada oración.
6. `PromoBand` → peticiones.

**Decisión de diseño:** cada oración lleva su propio botón de compartir, no uno solo al final. La gente comparte una oración concreta, no la página.

**Contenido a redactar.** Los textos litúrgicos, verificados con el párroco.

**Terminada cuando** compartir por WhatsApp envía el texto de la oración, no solo el enlace.

---

### 3.9 `/san-charbel/peticiones` — Envía tu petición

> **Página pendiente de confirmación** — §12.1 del sistema de diseño. Si se descarta, el bloque 5 de la portada pierde su botón y `/san-charbel` baja a dos accesos.

**Propósito.** Recoger la intención de quien no puede venir al templo.

**Evidencia.** 4/20 sitios en total, pero **los tres santuarios de San Chárbel lo tienen** y ninguna parroquia común de la muestra (§6.3 del doc 01).

**Bloques**
1. `Hero(light)`.
2. **Qué hacemos con tu petición** — explicar en qué misa se lee o presenta. Sin esto, el formulario no genera confianza.
3. **Formulario** — nombre, intención, correo (opcional), consentimiento obligatorio.
4. **Confirmación en la misma página**, no en otra.
5. `PromoBand` con horarios de la misa mensual.

**Trato de los datos.** Las peticiones contienen información sensible sobre salud y situaciones familiares. `SELECT` denegado al público, `INSERT` público (§9.3 del sistema de diseño). Se tratan con el mismo cuidado que una conversación privada con el párroco, y eso se dice en la página.

**Datos.** Supabase (`peticiones`).

---

### 3.10 `/parroquia` — La Parroquia

**Propósito.** Identidad: quiénes somos y desde cuándo.

**Evidencia.** 19/20 sitios tienen «quiénes somos», con nombres variados.

**Bloques**
1. `Hero(light)`.
2. Quiénes somos — 3–4 párrafos.
3. Misión de la parroquia.
4. **Nuestros sacerdotes** — tarjetas con foto, nombre y cargo.
5. `DataStrip` — dirección, arquidiócesis, año de fundación.
6. Accesos a Historia y Horarios.
7. `PromoBand` de cierre.

**Subpáginas:** `/parroquia/historia` (relato + `Timeline` + galería histórica) y `/parroquia/clero` (ficha por sacerdote).

**Contenido a redactar.** Historia real de la parroquia, año de fundación, nombres y cargos del clero, **fotos reales**.

---

### 3.11 `/pastorales` — Pastorales y grupos

**Propósito.** Que alguien encuentre un grupo y sepa cómo entrar.

**Evidencia.** 17/20 sitios. Es el bloque que **más varía en tamaño**: de 5 grupos a más de 100. Nomenclatura de referencia en Barranquilla (§4 del doc 02): Pastoral Familiar, de la Salud, Social, Juvenil, Infantil, del Adulto Mayor, Pro-Vida, Equipo Misionero, Equipo de Comunicación.

**Plantilla.** §7.5 (listado).

**Bloques**
1. `Hero(page)`.
2. Párrafo de invitación.
3. **Grilla de `PastoralCard`** — 4 columnas en escritorio, 2 en móvil.
4. **Cómo unirse** — `PromoBand` con contacto directo.

**Por cada pastoral:** nombre, a quién va dirigida, cuándo se reúne, responsable, cómo unirse. **Las cinco, siempre.** Un grupo sin día de reunión ni responsable es un grupo al que nadie se puede unir.

**Datos.** Supabase (`pastorales`).

---

### 3.12 `/catequesis` — Catequesis

**Propósito.** Fechas de inscripción y requisitos por etapa.

**Evidencia.** 14/20 sitios. En parroquias grandes es una sección entera con subpáginas por edad.

**Bloques**
1. `Hero(page)`.
2. **Cuatro etapas** — `ServiceCard`: Primera Comunión · Confirmación · Adultos · Prebautismal.
3. Por cada etapa: edades, día y hora de clase, duración, requisitos.
4. **Inscripciones** — `SidePanel` con fechas y formulario.
5. `PromoBand` de cierre.

**El dato que la gente busca es la fecha de inscripción.** Va arriba, con fecha límite visible.

**Datos.** Estático + formulario → `inscripciones`.

---

### 3.13 `/agenda` — Agenda de actividades

**Propósito.** Las próximas celebraciones, en orden cronológico.

**Evidencia.** 15/20 sitios tienen agenda. La recomendación de §4 del doc 01 es **modelo B + una versión ligera de A**: horarios fijos en `/horarios` más una lista editable aquí. **No se construye un sistema de calendario completo.**

**Plantilla.** §7.5.

**Bloques**
1. `Hero(page)`.
2. `Chip` de filtro por categoría (opcional).
3. **Lista cronológica** de `AgendaCard`.
4. `PromoBand` de cierre.

**Debe incluir siempre** el ciclo devocional de San Chárbel (día mensual y fiesta patronal) y los tiempos litúrgicos fuertes: Cuaresma, Semana Santa, Navidad.

**Datos.** Supabase (`celebraciones`). Detalle en `/agenda/<slug>` con plantilla §7.4.

**Aviso de mantenimiento.** Una agenda desactualizada es peor que no tener agenda. Si no hay quien la actualice cada semana, esta página debe ser estática y limitarse al ciclo anual fijo (decisión pendiente §12.2 del sistema de diseño).

---

### 3.14 `/noticias` — Noticias y avisos

**Propósito.** Señal de que el sitio está vivo. Sirve igual para un aviso breve («no habrá misa de 7») que para la crónica de una fiesta.

**Evidencia.** 16/20 sitios. En EE. UU. y R. Unido domina el boletín semanal en PDF (modelo C), que la investigación descarta por ser **malo para buscar en Google y malo en el celular**.

**Plantilla.** §7.5, detalle en §7.4.

**Bloques**
1. `Hero(page)`.
2. Grilla de `NewsCard` con paginación.
3. `PromoBand` de cierre.

**Datos.** Supabase (`noticias`).

**SEO.** Cada entrada con schema `NewsArticle` y fecha visible.

---

### 3.15 `/donar` — Colabora con la parroquia

> **Versión simple en fase 1.** La pasarela de pago y su interfaz se diseñan después (§0.3 del sistema de diseño).

**Propósito.** Explicar para qué se usa lo recaudado y cómo aportar.

**Evidencia.** 16/20 sitios. En EE. UU. y España es un botón permanente del menú — por eso `Donar` va como botón separado y no como ítem.

**Bloques**
1. `Hero(page)`.
2. **Para qué se usa** — 2–3 párrafos concretos. La transparencia es lo que convierte.
3. **Formas de aportar** — `DataStrip`: transferencia · datáfono en el templo · colecta en misa.
4. **Datos de cuenta** — caja crema, con botón de copiar.
5. `PromoBand` de agradecimiento.

**Contenido a redactar.** El destino real de los fondos y los datos bancarios.

---

## 4. Qué necesitamos de la parroquia

Ordenado por lo que más bloquea. Sin lo del primer grupo no se puede publicar.

**Bloquea el lanzamiento**
- [ ] Horarios reales completos: misas, confesiones, adoración, despacho
- [ ] **Día del mes de la misa a San Chárbel** (¿8? ¿22? ¿otro?)
- [ ] Día de la fiesta patronal (24 de julio o tercer domingo)
- [ ] Dirección exacta + referencias del barrio
- [ ] Teléfono, WhatsApp y correo
- [ ] Requisitos y documentos de los 6 sacramentos
- [ ] Nombre y cargo de los sacerdotes

**Bloquea que se vea bien**
- [ ] Fotos del templo por fuera y por dentro (para los heros)
- [ ] Foto del párroco (bloque 4 de la portada)
- [ ] Fotos de las pastorales en actividad
- [ ] Logo en vectorial, si existe

**Bloquea páginas concretas**
- [ ] Historia de la parroquia y año de fundación → `/parroquia/historia`
- [ ] Lista de pastorales con día, responsable y cómo unirse → `/pastorales`
- [ ] Fechas de inscripción de catequesis → `/catequesis`
- [ ] Textos de la oración y la novena → `/san-charbel/oraciones`
- [ ] Datos bancarios y destino de los fondos → `/donar`
- [ ] ¿Rito latino o maronita? → afecta el vocabulario de todo el sitio

**Decisiones**
- [ ] ¿Sigue en pie el formulario de peticiones? (§12.1 del sistema de diseño)
- [ ] ¿Quién actualiza el sitio cada semana? Define si `/agenda` es dinámica o estática

---

## 5. Fase 2

No construir hasta que la fase 1 esté completa y actualizada. El error más común es lanzar 60 páginas vacías.

| Página | Cuándo tiene sentido |
|---|---|
| `/san-charbel/testimonios` | Cuando haya testimonios reales recogidos. 3/20 sitios, pero propio de santuarios |
| `/san-charbel/maronitas` | Si la parroquia es de rito maronita |
| `/pastorales/<slug>` | Cuando una pastoral tenga contenido propio suficiente |
| `/galeria` | Cuando haya un archivo fotográfico que valga la pena |
| `/boletin` | Solo si ya existe un boletín impreso |
| `/preguntas-frecuentes` | Cuando el despacho identifique las preguntas repetidas |

**Descartadas:** `/transmisiones` (fuera de alcance) y el modelo de boletín en PDF como cronograma principal.
