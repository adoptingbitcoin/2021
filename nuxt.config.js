export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Adopting Bitcoin – A Lighting Summit 2021',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { 'http-equiv': 'Cache-control', content: 'no-cache, no-store, must-revalidate' },
      { 'http-equiv': 'Pragma', content: 'no-cache' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: []
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // router: {
  //   mode: 'hash'
  // },

  i18n: {
    lazy: false,
    baseUrl: 'https://adoptingbitcoin.org',
    seo: true,
    locales: [
      { code: 'en', file: 'en.json', iso: 'en-US' },
      { code: 'es', file: 'es.json', iso: 'es-ES' }
    ],
    langDir: '~/locales',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },
  sitemap: {
    hostname: 'https://adoptingbitcoin.org',
    gzip: true,
    i18n: true
  }
}
