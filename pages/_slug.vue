<template lang="pug">
    div
        Header(:data="document.data")
        template(v-for="slice in document.data.body")
            SectionHeader(v-if="slice.slice_type == 'sectionheader'", :data="slice")
            ServiceCardList(v-if="slice.slice_type == 'servicecardlist'", :data="slice")
            UserCardList(v-if="slice.slice_type == 'teamlist'", :data="slice")
        ButtonGroup
</template>

<script>

import Header from '~/components/Main/Header'
import ButtonGroup from '~/components/Content/ButtonGroup'
import ServiceCardList from '~/components/Main/Services/ServiceCardList'
import SectionHeader from '~/components/Main/SectionHeader'
import UserCardList from '~/components/Main/Team/UserCardList'

function getByUID(prismic, uid) {
  return prismic.api.getByUID('pagina', uid)
}

export default {
    components: {
        Header,
        ButtonGroup,
        ServiceCardList,
        SectionHeader,
        UserCardList
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
      title: this.$prismic.asText(this.document.data.encabezado_principal) + ' | Cambio Ahora',
      meta: [
        { hid: 'description', name: 'description', content: this.$prismic.asText(this.document.data.descripcion) },
        {property: 'og:title', content: this.$prismic.asText(this.document.data.encabezado_principa) + ' | Cambio Ahora' },
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
</style>