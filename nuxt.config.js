import pkg from './package'
import axios from 'axios'

require('dotenv').config()

// Make contentful client accessible in config,
// (can't use plugin as env variables are not accessible there until nuxt config is finished parsing)
const contentful = require('contentful')
const config = {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
}
const client = contentful.createClient(config)

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Verity Stothard | Front End Developer',
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
    '~/assets/css/base.css',
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global-components.js',
    '~/plugins/contentful.js',
    '~/plugins/filters.js'
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
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  generate: {
    routes: async function () {
      const entries = await client.getEntries({ content_type: "blogPost" });
      const routes = []
      entries.items.forEach(item => {
        routes.push(`blog/${item.fields.slug}`)
      })
      return routes
    }
  }
}
