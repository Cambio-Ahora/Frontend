<template lang="pug">
    
    div
        div.container-content
            div(class="uk-grid-small", uk-grid)
                div.uk-width-auto
                    img.icon(width="30", uk-svg, :src="$prismic.asLink(data.icono)", alt="")
                div.uk-width-expand
                    div
                        h4.uk-margin-remove {{ data.titulo }} 
                        p.uk-margin-small(class="uk-width-medium@m") {{ $prismic.asText(data.contenido) }}
                        nuxt-link(:to="$prismic.asLink(data.boton_de_accion)", v-if="data.boton_de_accion.id").uk-display-inline-block.link-button {{ data.texto_del_boton }} #[span(uk-icon="icon: chevron-right; ratio: 0.8;")]

</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss">

    svg.icon{
        color: $main-color-accent;
    }

    .container-content{
        opacity: 0;
    }

</style>