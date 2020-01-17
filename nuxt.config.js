var Prismic = require('prismic-javascript');
const prismicEndpoint = 'https://cambioahorafrontend.cdn.prismic.io/api/v2';

// TODO: Factor in Page Size > 100
function generateRoutes(){
// Fetch again all the blog posts, but this time generating each post's page
const pages = Prismic.getApi(prismicEndpoint).then(api => {
  return api
    .query(Prismic.Predicates.at('document.type', 'pagina'))
    .then(response => {
      return response.results.map(payload => {
        return {
          route: `/${payload.uid}`,
          payload
        }
      })
    })
})

const services = Prismic.getApi(prismicEndpoint).then(api => {
  return api
    .query(Prismic.Predicates.at('document.type', 'servicio'))
    .then(response => {
      return response.results.map(payload => {
        return {
          route: `/servicios/${payload.uid}`,
          payload
        }
      })
    })
})
// Here I return an array of the results of each promise using the spread operator.
// It will be passed to each page as the `payload` property of the `context` object,
// which is used to generate the markup of the page.
return Promise.all([pages, services]).then(values => {
  return [...values[0], ...values[1]]
})
}
    

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/uikit@3.2.7/dist/js/uikit.min.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#4B56F1' },
  /*
  ** Global CSS
  */
  css: [
    'uikit/dist/css/uikit.css',
    './assets/main.scss',
    'vue-stripe-menu/dist/vue-stripe-menu.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~/plugins/vue-check-view', ssr: false },{ src: '~/plugins/uikit', ssr: false }, { src: '~/plugins/modal', ssr: false }, { src: '~/plugins/onload', ssr: false }],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    ['prismic-nuxt', {
      endpoint: 'https://cambioahorafrontend.cdn.prismic.io/api/v2',
      linkResolver: function(doc, ctx) {
        if (doc.type === 'pagina') return "/" + doc.uid;
        if (doc.type === 'servicio') return "/servicios/" + doc.uid;
        return '/'
      },
      htmlSerializer: function(type, element, content, children) {
        var Elements = PrismicDOM.RichText.Elements;
        switch (type) {
          case Elements.heading1: return `<h1 class="uk-text-break">${children.join('')}</h1>`;
          case Elements.heading2: return `<h2 class="uk-text-break">${children.join('')}</h2>`;
          case Elements.heading3: return `<h3 class="uk-text-break">${children.join('')}</h3>`;
          case Elements.heading4: return `<h4 class="uk-text-break">${children.join('')}</h4>`;
          case Elements.heading5: return `<h5 class="uk-text-break">${children.join('')}</h5>`;
          case Elements.heading6: return `<h6 class="uk-text-break">${children.join('')}</h6>`;
          case Elements.strong: return `<strong class="hl-text">${children.join('')}</strong>`;
          case Elements.listItem:
          return '<li><span class="uk-margin-small-right" uk-icon="icon: chevron-right"></span>' + children.join('') + '</li>'
          case Elements.list: return `<ul class="uk-list">${children.join('')}</ul>`;
          case Elements.image:
            return '<div class="uk-text-center"><img  src="' + element.url + '" alt="' + element.alt + '"></div>';
        }
      }
    }]
  ],
  sitemap: {
    hostname: 'https://cambioahora.cl',
    routes: generateRoutes
  },
  styleResources: {
    scss: [
      './assets/variables.scss',
      ]
  },
  generate: {
    fallback: 'app.html',
    routes: generateRoutes

  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
