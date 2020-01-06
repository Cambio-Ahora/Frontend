<template lang="pug">

    section.uk-section
        div.uk-container
            div.uk-text-center
                h4.uk-margin-remove {{ $prismic.asText(data.primary.encabezado) }}
                h2(class="uk-width-large@m uk-margin-auto uk-margin-remove-top") {{ $prismic.asText(data.primary.titulo_principal) }}
                p(class="uk-width-xlarge@m uk-margin-auto uk-margin-remove-top") {{ $prismic.asText(data.primary.contenido) }}
                a.uk-display-inline-block.link-button Conócenos un poco más #[span(uk-icon="icon: chevron-right; ratio: 0.8;")]

</template>

<script>
export default {
    props: ['data']
}
</script>