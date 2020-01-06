<template lang="pug">
    div
        Header(:data="document.data")
        p {{ document.data }}
        
            
        ButtonGroup
</template>

<script>

import Header from '~/components/Main/Header'
import ButtonGroup from '~/components/Content/ButtonGroup'
import ServiceCardList from '~/components/Main/Services/ServiceCardList'

function getByUID(prismic, uid) {
  return prismic.api.getByUID('pagina', uid)
}

export default {
    components: {
        Header,
        ButtonGroup
    },
    async asyncData({ app, error, params }) {
        let document = await getByUID(app.$prismic, params.slug)
        console.log(document)
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
}
</script>

<style lang="scss">
</style>