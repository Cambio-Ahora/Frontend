<template lang="pug">
  
  div
    Heading(:data="document.data")
    template(v-for="slice in document.data.body")
      BusinessList(v-if="slice.slice_type == 'businesslist'", :data="slice")
      SectionHeader(v-if="slice.slice_type == 'sectionheader'", :data="slice")
      SectionImageContent(v-if="slice.slice_type == 'sectionimagecontent'", :data="slice")
      ResumeList(v-if="slice.slice_type == 'resumelist'", :data="slice")
      InformationSecondaryService(v-if="slice.slice_type == 'informationsecondaryservice'", :data="slice")
      FaqList(v-if="slice.slice_type == 'faqlist'", :data="slice")
      ContenidoAlineado(v-if="slice.slice_type == 'contenido_alineado'", :data="slice")
</template>

<script>

import Heading from '~/components/Home/Heading'
import BusinessList from '~/components/Main/BusinessList'
import SectionHeader from '~/components/Main/SectionHeader'
import SectionImageContent from '~/components/Main/SectionImageContent'
import ResumeList from '~/components/Main/Services/ResumeList'
import InformationSecondaryService from '~/components/Main/InformationSecondaryService'
import FaqList from '~/components/Main/Faq/FaqList'
import ContenidoAlineado from '@/components/Main/ContenidoAlineado'

function getSingle(prismic) {
  return prismic.api.getSingle('inicio')
}

export default {

  components: {
    Heading,
    BusinessList,
    SectionHeader,
    SectionImageContent,
    ResumeList,
    InformationSecondaryService,
    FaqList,
    ContenidoAlineado
  },
  async asyncData({ app, error }) {
    let document = await getSingle(app.$prismic)
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  created() {
    getSingle(this.$prismic).then(document => {
      this.document = document
    })
  },
  mounted(){
      UIkit.offcanvas('#offcanvas-nav').hide()
    },
  head () {
    return {
      title: this.document.data.meta_title,
      meta: [
        { hid: 'description', name: 'description', content: this.document.data.meta_description },
        {property: 'og:title', content: this.document.data.meta_title},
        {property: 'og:type', content: 'website'},
        {property: 'og:description', content: this.document.data.meta_description},
        {property: 'og:image', content: this.$prismic.asLink(this.document.data.meta_image)},
        {property: 'twitter:image:src', content: this.$prismic.asLink(this.document.data.meta_image)},
        {property: 'og:site_name', content: 'Cambio Ahora'}
      ]
    }
  }
}
</script>
