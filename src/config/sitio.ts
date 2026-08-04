/**
 * Datos de la parroquia y navegación.
 *
 * Fuente única: si un teléfono, una dirección o un ítem del menú aparece en
 * más de un componente, sale de aquí. Nunca se escribe a mano en el markup.
 */

export const PARROQUIA = {
  nombre: 'Parroquia San Chárbel',
  nombreCorto: 'San Chárbel',
  advocacion: 'San Chárbel Makhlouf',
  barrio: 'Villa Carolina',
  ciudad: 'Barranquilla',
  departamento: 'Atlántico',
  pais: 'Colombia',

  // PENDIENTE: dirección exacta y jurisdicción — §12.2 del sistema de diseño
  direccion: 'Villa Carolina, Barranquilla',
  arquidiocesis: 'Arquidiócesis de Barranquilla',

  telefono: '',
  whatsapp: '',
  email: '',

  redes: {
    facebook: '',
    instagram: '',
    youtube: '',
  },
} as const;

/**
 * Menú principal: 6 ítems + botón Donar.
 * Decisión cerrada en §0.2 del sistema de diseño — NO es el menú de 8 ítems
 * de los mockups originales.
 */
export interface ItemMenu {
  nombre: string;
  href: string;
  hijos?: { nombre: string; href: string }[];
}

export const MENU: ItemMenu[] = [
  { nombre: 'Inicio', href: '/' },
  {
    nombre: 'La Parroquia',
    href: '/parroquia',
    hijos: [
      { nombre: 'Historia', href: '/parroquia/historia' },
      { nombre: 'Nuestros sacerdotes', href: '/parroquia/clero' },
      { nombre: 'Horarios', href: '/horarios' },
    ],
  },
  {
    nombre: 'San Chárbel',
    href: '/san-charbel',
    hijos: [
      { nombre: 'Su vida', href: '/san-charbel/vida' },
      { nombre: 'Oraciones y novena', href: '/san-charbel/oraciones' },
      { nombre: 'Envía tu petición', href: '/san-charbel/peticiones' },
    ],
  },
  {
    nombre: 'Sacramentos',
    href: '/sacramentos',
    hijos: [
      { nombre: 'Bautismo', href: '/sacramentos/bautismo' },
      { nombre: 'Primera Comunión', href: '/sacramentos/comunion' },
      { nombre: 'Confirmación', href: '/sacramentos/confirmacion' },
      { nombre: 'Matrimonio', href: '/sacramentos/matrimonio' },
      { nombre: 'Confesión', href: '/sacramentos/confesion' },
      { nombre: 'Unción de enfermos', href: '/sacramentos/uncion' },
    ],
  },
  {
    nombre: 'Comunidad',
    href: '/comunidad',
    hijos: [
      { nombre: 'Pastorales y grupos', href: '/pastorales' },
      { nombre: 'Catequesis', href: '/catequesis' },
      { nombre: 'Agenda', href: '/agenda' },
      { nombre: 'Noticias', href: '/noticias' },
    ],
  },
  { nombre: 'Contacto', href: '/contacto' },
];

/** Enlaces del pie, en dos subcolumnas (§6.16) */
export const ENLACES_PIE = [
  [
    { nombre: 'La Parroquia', href: '/parroquia' },
    { nombre: 'Horarios', href: '/horarios' },
    { nombre: 'Sacramentos', href: '/sacramentos' },
    { nombre: 'San Chárbel', href: '/san-charbel' },
  ],
  [
    { nombre: 'Pastorales', href: '/pastorales' },
    { nombre: 'Catequesis', href: '/catequesis' },
    { nombre: 'Agenda', href: '/agenda' },
    { nombre: 'Noticias', href: '/noticias' },
  ],
];
