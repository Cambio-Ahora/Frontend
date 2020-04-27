<template lang="pug">
    .uk-section(v-if="data", :class="{ 'uk-text-left': data.primary.alineamiento == 'izquierda' ,'uk-text-center': data.primary.alineamiento == 'centrado', 'uk-text-right': data.primary.alineamiento == 'derecha' }")
        div(class="uk-width-3-5@m uk-width-1-1 uk-margin-auto")
            h2 {{ $prismic.asText(data.primary.titulo) }}
            .uk-margin
                div(v-html="$prismic.asHtml(data.primary.contenido)")
</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>

</style>