<template lang="pug">
    div.container
        Header(:data="document.data")
        template(v-for="slice in document.data.body")
            ContenidoAlineado(v-if="slice.slice_type == 'contenido_alineado'", :data="slice")
            HtmlContent(v-if="slice.slice_type == 'bloque_de_contenido'", :data="slice")
            Price(v-if="slice.slice_type == 'precio'", :data="slice")
        ButtonGroup
</template>

<script>

import Header from '~/components/Content/Header'
import HtmlContent from '~/components/Content/HtmlContent'
import ButtonGroup from '~/components/Content/ButtonGroup'
import Price from '~/components/Content/Price'
import ContenidoAlineado from '@/components/Main/ContenidoAlineado'

function getByUID(prismic, uid) {
  return prismic.api.getByUID('servicio', uid)
}

export default {
    components: {
        Header,
        ButtonGroup,
        HtmlContent,
        Price,
        ContenidoAlineado
    },
    async asyncData({ app, error, params }) {
        let document = await getByUID(app.$prismic, params.slug)
        if (document) {
        return { document }
        } else {
        error({ statusCode: 404, message: 'Page not found' })
        }
    },
    created() {
        getByUID(this.$prismic, this.$route.params.slug).then(document => {
        this.document = document
        })
    },
    mounted(){
      UIkit.offcanvas('#offcanvas-nav').hide()
    },
    head () {
    return {
      title: this.$prismic.asText(this.document.data.encabezado) + ' | Cambio Ahora',
      meta: [
        { hid: 'description', name: 'description', content: this.$prismic.asText(this.document.data.descripcion) },
        {property: 'og:title', content: this.$prismic.asText(this.document.data.encabezado) + ' | Cambio Ahora' },
        {property: 'og:type', content: 'website'},
        {property: 'og:description', content: this.$prismic.asText(this.document.data.descripcion)},
        {property: 'og:image', content: this.$prismic.asLink(this.document.data.portada)},
        {property: 'twitter:image:src', content: this.$prismic.asLink(this.document.data.portada)},
        {property: 'og:site_name', content: 'Cambio Ahora'}
      ]
    }
  }
}
</script>

<style lang="scss">
    .container{
        margin-top: 0px;
    }
</style>