export const actions = {
    async nuxtServerInit ({ commit }, { app, req }) {
        let menu = await app.$prismic.api.getSingle('nav')
        
        commit('menu/setMenu', menu)
    }
  }