export default defineNuxtConfig({
  extends: 'content-wind',
  routeRules: {
    '/': { prerender: true }
  },
  build: {
    transpile: ['@vue/runtime-core'],
  },
})
