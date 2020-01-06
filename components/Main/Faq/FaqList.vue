<template lang="pug">

    .uk-section
        .uk-section-large.main-container
            .uk-container
                div(uk-grid, class="uk-child-width-1-2@m")
                    div
                        div
                            h3.light.uk-heading-small  {{ $prismic.asText(data.primary.titulo) }}
                            p(class="uk-width-large@m") {{ $prismic.asText(data.primary.contenido) }}
                    div
                        div
                            ul.uk-list.uk-list-divider
                                li(v-for="question in data.items")
                                    div
                                        h4.light.title-faq {{ $prismic.asText(question.pregunta) }}
                                        p  {{ $prismic.asText(question.respuesta) }}

</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>

    .main-container{
        background-color: $dark-color-accent;
    }

    .title-faq{
        letter-spacing: -0.02rem;
    }

</style>