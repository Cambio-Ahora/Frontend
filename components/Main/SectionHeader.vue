<template lang="pug">

    section.uk-section
        div.uk-container
            div.uk-text-center(uk-scrollspy="cls: uk-animation-slide-bottom-small; target: .animate-item; delay: 300;")
                h4.uk-margin-remove.animate-item {{ $prismic.asText(data.primary.encabezado) }}
                h2.animate-item(class="uk-width-large@m uk-margin-auto uk-margin-remove-top") {{ $prismic.asText(data.primary.titulo_principal) }}
                p.animate-item(class="uk-width-xlarge@m uk-margin-auto uk-margin-remove-top") {{ $prismic.asText(data.primary.contenido) }}
                a.animate-item.uk-display-inline-block.link-button Conócenos un poco más #[span(uk-icon="icon: chevron-right; ratio: 0.8;")]

</template>

<script>
export default {
    props: ['data']
}
</script>