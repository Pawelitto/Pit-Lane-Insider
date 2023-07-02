// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    newsApiUrl: import.meta.env.NEWS_API_URL,
    newsApiKey: import.meta.env.NEWS_API_KEY,
    productsApiUrl: import.meta.env.PRODUCTS_API_URL,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  css: ['@/assets/css/main.scss'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Pit Lane Insider',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#000000' },
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js',
        },
        {
          src: '/vendor/preline/dist/preline.js',
          body: true,
          defer: true
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Pacifico&family=Rubik&display=swap',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
});
