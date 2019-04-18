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
    }
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  generate: {
    routes: function () {
      return axios.get(`/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?content_type=blogPost?access_token=${process.env.CONTENTFUL_SPACE_ID}`)
      .then((res) => {
        return res.data.map((blog) => {
          return '/blog/' + blog.id
        })
      })
    }
  },

  axios: {
    // proxyHeaders: false
    baseURL: 'https://cdn.contentful.com'
  }

}
