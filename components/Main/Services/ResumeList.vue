<template lang="pug">

    section.uk-container.uk-container-expand-right.uk-section
        div( class="uk-flex uk-flex-middle", uk-grid)
            div(class="uk-width-3-5@m ")
                div
                    .uk-grid-row-large(uk-grid, class="uk-child-width-1-2@m")
                        ServiceCard(v-for="item in data.items", :data="item")
                    .uk-text-center.uk-margin-large-top
                        a.uk-display-inline-block.link-button Conócenos un poco más #[span(uk-icon="icon: chevron-right; ratio: 0.8;")]
            div(class="uk-width-2-5@m")
                .uk-container-item-padding-remove-right
                    div(uk-grid)
                        .uk-width-2-5
                            .uk-inline.image-parallax-container.image-a
                                img.uk-width-1-1(:src="$prismic.asLink(data.primary.imagen_secundaria)", :alt="data.primary.imagen_secundaria.alt")
                                .uk-position-cover.foreground
                        .uk-width-3-5
                            div
                                .uk-inline.image-parallax-container.image-b
                                    img.uk-width-1-1(:src="$prismic.asLink(data.primary.imagen_principal)", :alt="data.primary.imagen_principal.alt")
                                    .uk-position-cover.foreground

                    

</template>

<script>

import ServiceCard from '~/components/Main/Services/ServiceCard'

export default {
    props: ['data'],
    components: {
        ServiceCard
    }
}
</script>

<style lang="scss" scoped>

    
    .image-b{
        margin-top: 50%;
        height: 70%;
    }

</style>