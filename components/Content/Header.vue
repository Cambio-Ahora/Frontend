<template lang="pug">

    section.uk-section.uk-background-cover.fix-position.uk-position-relative(uk-img, :data-src="$prismic.asLink(data.portada)")
        .overlay-gradient.uk-position-cover
        .uk-container.uk-section.uk-position-relative
            .uk-text-center
                h2.uk-heading-small.uk-margin-auto(class="uk-width-large@m") {{ $prismic.asText(data.encabezado) }}
                p.uk-margin-auto.content-header(class="uk-width-large@m") {{ $prismic.asText(data.descripcion) }}
        


</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>

    .overlay-gradient{
        background-color: rgba($background-color-accent, 0.89);
    }

    @media (max-width: 960px) {

        .fix-position{
        margin-top: -130px;
        }

    }
  

</style>