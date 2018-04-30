module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'reactor-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Web application for Reactor' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://use.fontawesome.com/e88f9ccc5b.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bulma-extensions@1.0.14/dist/bulma-extensions.min.css' }

    ]
  },
  css: [
  ],
  /*
    '~/css/main.css'
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  generate:{
    mode:'spa'
  },
  // router:{
  //   base: 'localhost:8080'
  // },
  build: {
    /*
    ** Run ESLint on save
    */
    // publicPath: 'localhost:8080',
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
