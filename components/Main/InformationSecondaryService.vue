<template lang="pug">

    section.uk-section.uk-position-relative
        div.uk-container.uk-container-expand-right
            div( class="uk-flex uk-flex-middle", uk-grid)
                div(class="uk-width-2-5@m")
                    div
                        h2.uk-heading-small(class="uk-width-medium@m") {{ $prismic.asText(data.primary.encabezado) }}
                        p(class="uk-width-xlarge@m") {{ $prismic.asText(data.primary.contenido) }}
                        a.cta-button.uk-button.uk-button-large {{ data.primary.texto_del_boton }}

                        div.uk-margin.uk-grid-row-large(class="uk-child-width-1-2@m uk-grid-small", uk-grid)
                            div(v-for="listItem in data.items")
                                h4.list-title {{ $prismic.asText(listItem.titulo) }}
                                ul.uk-list.list-of-items
                                    div(v-html="$prismic.asHtml(listItem.listado)")

                div(class="uk-width-3-5@m")
                    .uk-container-item-padding-remove-right
                        div.uk-position-relative.uk-text-center.side-container
                            .uk-position-absolute.container-background
                            .uk-position-relative
                                img.uk-width-1-2.image-a(:src="$prismic.asLink(data.primary.imagen_primaria)", :alt="data.primary.imagen_primaria.alt")
                                img.uk-width-1-2.image-b(:src="$prismic.asLink(data.primary.imagen_secundaria)", :alt="data.primary.imagen_primaria.alt")

        img.points-decorator-b(class="uk-visible@m", src="/images/points.svg", uk-svg, alt="alt")


</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss">

    .container-background{
        background-color: $background-color-accent;
        width: 65%;
        height: 100%;
        right: 0;
        top: 0;
    }

    .list-of-items{
        li:nth-child(n+2){
            margin-top: 20px;
        }
        span{
            margin-left: -35px;
            color: $main-color-accent;
        }
    }

    .image-a{
        position: relative;
        left: 15%;
        margin-top: 25%;
    }

    .list-title{
        letter-spacing: -.03rem;
    }



    .points-decorator-b{
        position: absolute;
        transform: translate(-50%,-50%);
        top: 30%;
        left: 3%;
        transition: all 200ms ease-in-out;
    }

    @media(max-width: 1600px){
        .points-decorator-b{
            left: 0%; 
        }
    }

    @media(max-width: 1400px){
        .points-decorator-b{
            width: 120px;
            left: -3%;
            top: 40%; 
        }
    }

</style>