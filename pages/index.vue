<template lang="pug">
  
  div
    Heading
    BusinessList
    SectionHeader
    SectionImageContent
    ResumeList
    InformationSecondaryService
    FaqList
</template>

<script>

import Heading from '~/components/Home/Heading'
import BusinessList from '~/components/Main/BusinessList'
import SectionHeader from '~/components/Main/SectionHeader'
import SectionImageContent from '~/components/Main/SectionImageContent'
import ResumeList from '~/components/Main/Services/ResumeList'
import InformationSecondaryService from '~/components/Main/InformationSecondaryService'
import FaqList from '~/components/Main/Faq/FaqList'

export default {
  components: {
    Heading,
    BusinessList,
    SectionHeader,
    SectionImageContent,
    ResumeList,
    InformationSecondaryService,
    FaqList
  }
}
</script>
