import pkg from './package'
import axios from 'axios'

require('dotenv').config()

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global-components.js',
    '~/plugins/contentful.js',
  ],

  /*
  ** Nuxt.js modules
  */
 modules: [
  '@nuxtjs/axios',
],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
        if (ctx.isDev && ctx.isClient) {
            config.devtool = '#source-map'
        }
    }
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  // generate: {
  //   routes: [
  //     '/blog/static-sites-are-great/',
  //     '/blog/hello-world',
  //     '/blog/automate-with-webhooks'
  //   ]
  // },
  generate: {
    routes: async function () {
      return [
        '/blog/static-sites-are-great/',
        '/blog/hello-world/',
        '/blog/automate-with-webhooks/',
        '/course/level-up-in-css-advanced-selectors/',
        '/course/html-css-how-to-build-a-website/'
      ]
    }
  }
}
