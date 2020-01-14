<template lang="pug">

    section.uk-section.uk-background-cover.fix-position.uk-position-relative(uk-img, :data-src="$prismic.asLink(data.portada)")
        .overlay-gradient.uk-position-cover
        .uk-container.uk-section.uk-position-relative
            .uk-text-center
                .fix-margin(class="uk-hidden@s")
                h1.uk-heading-small.uk-margin-auto(class="uk-width-4-5@m") {{ $prismic.asText(data.encabezado) }}
                div.uk-margin-auto(class="uk-width-large@m")
                    p.content-header.uk-margin-remove {{ $prismic.asText(data.descripcion) }}
        


</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>

    .overlay-gradient{
        background-color: rgba($background-color-accent, 0.89);
        background: linear-gradient(rgba(255,255,255, 0.8) 30%, rgba(255,255,255, 9) 95%, rgba(255,255,255, 1) 98%);
    }

    .fix-margin{
        height: 20px;
    }

    @media (max-width: 960px) {

        .fix-position{
        margin-top: -130px;
        }

    }
  

</style>