var Prismic = require('prismic-javascript');
const prismicEndpoint = 'https://cambioahorafrontend.cdn.prismic.io/api/v2';

// TODO: Factor in Page Size > 100
const routes = () =>
	Prismic.getApi(prismicEndpoint)
		.then(api =>
			api.query([
        Prismic.Predicates.at('document.type', 'pagina'),
        Prismic.Predicates.at('document.type', 'servicio'),
      ]
        , {
				pageSize: 100
			}),
		)
		.then(res => {
			if (res.total_pages > 1) {
				console.warn('we have more than 100 pages, fix it');
				process.exit(1);
			}
			return [
				'/',
				...res.results.map(page => `${page.uid.replace(/_/g, '/')}/`),
				'404',
			];
		});

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
          case Elements.listItem:
          return '<li><span class="uk-margin-small-right" uk-icon="icon: chevron-right"></span>' + children.join('') + '</li>'
          case Elements.image:
            return '<div class="uk-text-center"><img  src="' + element.url + '" alt="' + element.alt + '"></div>';
        }
      }
    }]
  ],
  styleResources: {
    scss: [
      './assets/variables.scss',
      ]
  },
  generate: {
    fallback: 'app.html',
    routes,
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
