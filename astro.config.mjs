// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [
    react(),
    svelte(),
    vue(),
    starlight({ title: {
        es: 'Galería de componentes',
        en: 'Component Gallery'
      },
      defaultLocale: 'en',
      locales: {
        es: {
          label: 'Español',
          lang: 'es'
        },
        en: {
          label: 'English',
          lang: 'en'
        },
      },
    })
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: "manual"
  },

  vite: {
    plugins: [tailwindcss()]
  }
});