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
</template>

<script>

import Heading from '~/components/Home/Heading'
import BusinessList from '~/components/Main/BusinessList'
import SectionHeader from '~/components/Main/SectionHeader'
import SectionImageContent from '~/components/Main/SectionImageContent'
import ResumeList from '~/components/Main/Services/ResumeList'
import InformationSecondaryService from '~/components/Main/InformationSecondaryService'
import FaqList from '~/components/Main/Faq/FaqList'

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
    FaqList
  },
  async asyncData({ app, error }) {
    let document = await getSingle(app.$prismic)
    console.log(document)
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
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>
