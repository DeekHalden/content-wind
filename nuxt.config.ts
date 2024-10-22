export default defineNuxtConfig({
  extends: 'content-wind',
  routeRules: {
    '/': { prerender: true }
  },
  build: {
    extend(config) {
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== 'RequestIdleCallbackPolyfill'
      );
    },
  },
})
