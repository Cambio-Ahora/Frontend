<template lang="pug">

    div.uk-container.uk-container-small.uk-section
        div.service-content-html(v-html="$prismic.asHtml(data.primary.contenido)")

</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss">

    .service-content-html{
        p{
            word-wrap: break-word;
        }
    }
    
</style>