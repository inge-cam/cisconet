// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://parroquiasancharbel.co',
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Formatos modernos por defecto (§5.2 del sistema de diseño)
    responsiveStyles: true,
  },
});
