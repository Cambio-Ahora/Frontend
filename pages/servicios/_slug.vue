<template lang="pug">
    div.container
        Header(:data="document.data")
        ButtonGroup
</template>

<script>

import Header from '~/components/Content/Header'
import ButtonGroup from '~/components/Content/ButtonGroup'

function getByUID(prismic, uid) {
  return prismic.api.getByUID('servicio', uid)
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
    .container{
        margin-top: 0px;
    }
</style>