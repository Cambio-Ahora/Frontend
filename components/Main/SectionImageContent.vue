<template lang="pug">

    section.uk-section
        div(class="uk-container uk-container-expand-left")
            div(uk-grid, class="uk-flex uk-grid-large uk-flex-middle")
                div(class="uk-width-3-5@m") 
                    div.uk-container-item-padding-remove-left
                        img(:src="$prismic.asLink(data.primary.imagen_referencial)", :alt="data.primary.imagen_referencial.alt")
                div(class="uk-width-2-5@m")
                    div
                        div
                            h2.uk-heading-small(class="uk-width-medium@m") {{ $prismic.asText(data.primary.encabezado) }}
                            p(class="uk-width-xlarge@m")    {{ $prismic.asText(data.primary.contenido) }}
                            a.cta-button.uk-button.uk-button-large Agenda Tu Hora


</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>

    


</style>