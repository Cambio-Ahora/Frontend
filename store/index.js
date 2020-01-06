export const actions = {
    async nuxtServerInit ({ commit }, { app, req }) {
        let menu = await app.$prismic.api.getSingle('nav' , { fetchLinks: ['pagina.titulo'] })
        
        commit('menu/setMenu', menu)
    }
  }