<template lang="pug">

    section.uk-container.uk-container-expand-right.uk-section
        div( class="uk-flex uk-flex-middle", uk-grid)
            div(class="uk-width-3-5@m ")
                div
                    .uk-grid-row-large(uk-grid, class="uk-child-width-1-2@m")
                        ServiceCard 
                        ServiceCard
                        ServiceCard
                        ServiceCard                    
                        ServiceCard
                        ServiceCard
                    .uk-text-center.uk-margin-large-top
                        a.uk-display-inline-block.link-button Conócenos un poco más #[span(uk-icon="icon: chevron-right; ratio: 0.8;")]
            div(class="uk-width-2-5@m")
                .uk-container-item-padding-remove-right
                    div(uk-grid)
                        .uk-width-2-5
                            .uk-inline.image-parallax-container.image-a
                                img.uk-width-1-1(src="https://images.unsplash.com/photo-1529086005036-bbc8d628e109?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=704&q=80", alt="")
                                .uk-position-cover.foreground
                        .uk-width-3-5
                            div
                                .uk-inline.image-parallax-container.image-b
                                    img.uk-width-1-1(src="https://images.unsplash.com/photo-1520642413789-2bd6770d59e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", alt="")
                                    .uk-position-cover.foreground

                    

</template>

<script>

import ServiceCard from '~/components/Main/Services/ServiceCard'

export default {
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