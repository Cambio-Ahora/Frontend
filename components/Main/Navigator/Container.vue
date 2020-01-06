<template lang="pug">

    .uk-container.uk-container-large
        nav.uk-navbar-container.uk-navbar-transparent(uk-navbar)
            .uk-navbar-left
                .uk-navbar-item 
                    a.uk-logo
                        div.uk-flex-middle.uk-grid-small(uk-grid)
                            div
                                h4.logo Cambio Ahora
                            div.uk-flex-first
                                img(width="30", src="/images/logos/logo.svg", alt="alt")
                ul.uk-navbar-nav(class="uk-visible@m")
                    li 
                        a Quiénes Somos
                    li 
                        a Psicología Clínica
                        .uk-navbar-dropdown.uk-width-medium
                            ul.uk-nav.uk-navbar-dropdown-nav.list-of-items
                                li
                                    a   #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Depresión
                                li
                                    a   #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Crisis de Pánico
                                li
                                    a   #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Transtorno de la ansiedad
                                li
                                    a   #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] TRANSTORNO OBSESIVO COMPULSIVO
                                li
                                    a   #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] TRAnSTORNO POR ESTRÉS POSTRAUMÁTICO
                                li
                                    a   #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] TRANSTORNO BIPOLAR
                    li
                        a Psicopedagogía
                        .uk-navbar-dropdown.uk-width-medium
                            ul.uk-nav.uk-navbar-dropdown-nav.list-of-items
                                li
                                    a   #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Diagnóstico de habilidades
                                li
                                    a   #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Diagnóstico de habilidades
                                li
                                    a   #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Diagnóstico de habilidades
                                li
                                    a   #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Diagnóstico de habilidades
            .uk-navbar-right
                .uk-navbar-item
                    a.cta-button.uk-button Agenda Tu Hora


</template>

<script>


export default {
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss" scoped>

    .list-of-items{
        padding-left: calc(1.5em + 10px);
        a{
            text-transform: uppercase;
        }
        span{
            margin-left: -35px;
            color: $main-color-accent;
        }
    }

    nav{
        ul.uk-navbar-nav{
            li{
                a{
                    color: $dark-color-accent;
                    font-family: $heading-bold-font;
                    font-size: $action-font-size;
                    letter-spacing: $action-letter-spacing;
                }
            }
        }
    }

    .cta-button{
        background-color: $main-color-accent;
        color: #fff;
        font-family: $heading-bold-font;
        font-size: $action-font-size;
        letter-spacing: $action-letter-spacing;
    }

</style>