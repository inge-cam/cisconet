# Arquitectura propuesta — Parroquia San Chárbel

Estructura de contenidos. **Sin diseño**: solo qué páginas existen, cómo se llaman, qué títulos van dentro y en qué orden.

---

## 1. Menú principal (6 ítems + botón)

```
Inicio  |  La Parroquia  |  San Chárbel  |  Sacramentos  |  Comunidad  |  Contacto     [ Donar ]
```

Seis ítems, dentro del rango de todos los referentes (5–7). Razones de cada uno:

- **La Parroquia** agrupa identidad, historia, clero y horarios.
- **San Chárbel** es el ítem que nos distingue de cualquier otra parroquia. Los tres sitios de San Chárbel estudiados le dan un lugar propio en el nivel 1.
- **Sacramentos** es el trámite: la gente llega buscando requisitos para bautizar o casarse.
- **Comunidad** agrupa pastorales, catequesis, agenda y noticias.
- **Donar** va como botón separado, no como ítem de menú (patrón de 16 de 20 referentes).

**Los horarios no son un ítem del menú** porque van fijos en la portada y en el pie de página. Aun así tienen su propia URL (`/horarios`) para que Google la indexe y la gente pueda compartir el enlace directo.

---

## 2. Mapa del sitio

### Fase 1 — Lanzamiento (13 páginas)

```
/                          Inicio
/parroquia                 La Parroquia
  /parroquia/historia        Historia de la parroquia
  /parroquia/clero           Nuestros sacerdotes
  /horarios                  Horarios (misas, confesiones, despacho)
/san-charbel               San Chárbel
  /san-charbel/vida          Vida del santo
  /san-charbel/oraciones     Oraciones y novena
  /san-charbel/peticiones    Envía tu petición
/sacramentos               Sacramentos          (índice con los 7)
  /sacramentos/bautismo      Bautismo
  /sacramentos/matrimonio    Matrimonio
  /sacramentos/comunion      Primera Comunión
  /sacramentos/confirmacion  Confirmación
  /sacramentos/confesion     Confesión
  /sacramentos/uncion        Unción de enfermos
/comunidad                 Comunidad            (índice)
  /pastorales                Pastorales y grupos
  /catequesis                Catequesis
  /agenda                    Agenda de actividades
  /noticias                  Noticias y avisos
/contacto                  Contacto y ubicación
/donar                     Colabora con la parroquia
```

Cuento 13 páginas "de verdad" en fase 1 (las de sacramentos individuales pueden empezar como secciones dentro de `/sacramentos` y separarse después, según cuánto texto tenga cada una).

### Fase 2 — Cuando haya contenido y quien lo mantenga

```
/san-charbel/testimonios   Testimonios y favores recibidos
/san-charbel/maronitas     La tradición maronita
/pastorales/<slug>         Una página por pastoral
/noticias/<slug>           Una entrada por noticia
/agenda/<slug>             Una página por celebración importante
/transmisiones             Misas en vivo y grabadas
/galeria                   Galería de fotos
/boletin                   Boletín parroquial
/preguntas-frecuentes      Preguntas frecuentes
```

**No construir la fase 2 desde el principio.** El error más común en webs parroquiales es lanzar 60 páginas vacías. Mejor 13 páginas completas y actualizadas.

---

## 3. Página de inicio: qué bloques y en qué orden

Numerados de arriba hacia abajo. Cada bloque lleva su título tal como aparecería en pantalla.

| # | Bloque | Contenido | Por qué va ahí |
|---|---|---|---|
| 1 | **Cabecera** | Logo + "Parroquia San Chárbel", menú, botón Donar | Fija al hacer scroll |
| 2 | **Portada** | Imagen del templo o de la imagen de San Chárbel. Nombre de la parroquia + ciudad. Frase breve. | Identidad en 3 segundos |
| 3 | **Horarios de misa** *(sin título, o "Horarios")* | 4 columnas: Misas entre semana · Misas dominicales · Confesiones · Despacho parroquial. Enlace a `/horarios`. | **Sin scroll.** Es el dato #1 que busca la gente en los 20 referentes |
| 4 | **"Bienvenidos a la casa de San Chárbel"** | Párrafo del párroco + su foto. Enlace a `/parroquia`. | Voz humana, no institucional |
| 5 | **"Devoción a San Chárbel"** | Bloque devocional: quién fue, oración del día, y botón grande **"Envía tu petición"**. | Es nuestro diferencial. Los tres sitios de San Chárbel lo destacan |
| 6 | **"¿Qué necesitas?"** | 4 tarjetas: *Bautizar a mi hijo* · *Casarme* · *Inscribir catequesis* · *Pedir una misa*. | Traduce "sacramentos" a lenguaje de la gente |
| 7 | **"Próximas celebraciones"** | 3 próximos eventos con fecha, hora y lugar. Enlace a `/agenda`. | Cronograma visible sin entrar |
| 8 | **"Nuestra comunidad"** | 2–3 fotos reales de las pastorales + enlace a `/pastorales`. | Fotos reales, no de banco de imágenes |
| 9 | **"Noticias y avisos"** | 3 últimas entradas. | Señal de que el sitio está vivo |
| 10 | **"Cómo llegar"** | Mapa + dirección + referencias + transporte. | |
| 11 | **Pie de página** | Horarios resumidos, dirección, teléfono, WhatsApp, correo, redes, enlace a la diócesis, aviso de privacidad. | El pie repite los horarios a propósito |

**Los bloques 3 y 5 son los que no se pueden mover.** El resto se puede reordenar según lo que la parroquia quiera priorizar.

---

## 4. Qué va dentro de cada página

### `/parroquia` — La Parroquia
- Quiénes somos (3–4 párrafos)
- Misión de la parroquia
- Nuestros sacerdotes (nombre, cargo, foto)
- Datos: dirección, diócesis a la que pertenece, año de fundación
- Enlaces a Historia y Horarios

### `/horarios` — Horarios
Tabla simple, sin adornos:
- **Misas:** lunes a viernes / sábado / domingo
- **Confesiones:** días y franjas
- **Adoración al Santísimo:** si la hay
- **Misa a San Chárbel:** el día fijo del mes *(confirmar cuál — ver nota abajo)*
- **Despacho parroquial:** días y horas de atención, teléfono
- Nota sobre horarios especiales en Semana Santa, Navidad y la fiesta patronal

### `/san-charbel` — San Chárbel
Página índice con tres accesos: Vida · Oraciones · Peticiones. Encima, un resumen de 2 párrafos de quién fue y por qué esta parroquia lleva su nombre.

- **`/san-charbel/vida`**: biografía (1828–1898, monje maronita del Líbano, ermitaño en Annaya), beatificación (1965), canonización (1977), los milagros, la devoción en América Latina, y la tradición de los listones o cintas con peticiones.
- **`/san-charbel/oraciones`**: oración a San Chárbel, novena (9 días), oración por los enfermos. Con botón de compartir por WhatsApp — este contenido circula muchísimo por ahí.
- **`/san-charbel/peticiones`**: formulario. Campos mínimos: nombre, intención, correo (opcional), casilla de consentimiento. Explicar qué se hace con la petición (en qué misa se lee o presenta).

### `/sacramentos` — Sacramentos
Índice con los siete. Cada sacramento responde siempre las mismas cuatro preguntas, en este orden:
1. Qué es (breve, 1 párrafo)
2. **Requisitos y documentos** ← lo que la gente viene a buscar
3. Cómo solicitarlo (a quién, dónde, con cuánta anticipación)
4. Costos o aportes, si aplica

Los referentes colombianos (Bogotá, Barranquilla) tienen páginas específicas de "Requisitos Sacramentos" y de "Matrimonios" precisamente por esto.

### `/pastorales` — Pastorales y grupos
Lista de grupos. Por cada uno: nombre, a quién va dirigido, cuándo se reúne, responsable, cómo unirse.
Referencia de nomenclatura (Barranquilla): Pastoral Familiar, Pastoral de la Salud, Pastoral Social, Pastoral Juvenil, Pastoral Infantil, Pastoral del Adulto Mayor, Pastoral Pro-Vida, Equipo Misionero, Equipo de Comunicación.

### `/catequesis` — Catequesis
Por etapas: Primera Comunión · Confirmación · Adultos · Prebautismal. Con fechas de inscripción, días de clase y requisitos.

### `/agenda` — Agenda de actividades
Lista cronológica de las próximas celebraciones. Cada una: fecha, hora, lugar, descripción corta.
Debe incluir siempre el **ciclo devocional de San Chárbel** (el día fijo mensual y la fiesta patronal) y los tiempos litúrgicos fuertes: Cuaresma, Semana Santa, Navidad.

### `/noticias` — Noticias y avisos
Entradas con fecha. Sirve tanto para avisos breves ("no habrá misa de 7") como para crónicas de eventos.

### `/contacto` — Contacto y ubicación
Dirección, mapa, teléfono, WhatsApp, correo, horario del despacho, formulario, redes sociales.

### `/donar` — Colabora con la parroquia
Para qué se usa lo recaudado, formas de aportar (transferencia, datáfono, en misa), datos de cuenta, y transparencia sobre el destino.

---

## 5. Nombres alternativos que descartamos, y por qué

| Descartado | Elegido | Motivo |
|---|---|---|
| `Soy nuevo` / `I'm New` | (no se usa) | Patrón estadounidense; en el mundo hispano la gente no lo busca |
| `Worship` / `Culto` | `Horarios` + `Sacramentos` | "Culto" suena a otra confesión en contexto latinoamericano |
| `Conecta` / `Crece` | `Comunidad` | Lenguaje de megaiglesia evangélica; desencaja en una parroquia católica |
| `Ministerios` | `Pastorales` | "Pastoral" es el término estándar en Colombia y México |
| `Eventos` | `Agenda` | Los referentes hispanos usan "Agenda" o "Celebraciones" |
| `Blog` | `Noticias` | |
| `Give` / `Ofrenda` | `Donar` / `Colabora` | Más neutro y directo |

---

## 6. Decisiones pendientes (te toca preguntar en la parroquia)

Ninguna bloquea el arranque, pero todas cambian contenido:

1. **¿Qué día del mes es la misa a San Chárbel?** Annaya (Líbano) usa el día 22; el Santuario de Morelia usa el día 8. Estructura toda la agenda.
2. **¿Qué día celebran la fiesta patronal?** 24 de julio (calendario romano) o tercer domingo de julio (calendario maronita).
3. **¿Es una parroquia de rito latino o maronita?** Si es maronita, cambia el vocabulario litúrgico (Qurbono en vez de Misa, etc.) y conviene una página sobre la tradición maronita.
4. **¿Ciudad y diócesis?** Necesario para el pie de página, el mapa y el SEO local.
5. **¿Quién va a actualizar el sitio?** Determina si la agenda es dinámica o una página estática. Si no hay nadie con tiempo semanal, la agenda debe ser estática.
6. **¿Hay boletín impreso?** Si ya existe, se sube en PDF y ahorra trabajo de redacción.
7. **¿Aceptan donaciones en línea o solo presenciales?** Cambia por completo la página `/donar`.
