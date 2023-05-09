// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  css: ['@/assets/css/main.scss'],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js',
        },
      ],
    },
  },
});
