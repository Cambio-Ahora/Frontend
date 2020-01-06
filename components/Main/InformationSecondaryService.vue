<template lang="pug">

    section.uk-section.uk-position-relative
        div.uk-container.uk-container-expand-right
            div( class="uk-flex uk-flex-middle", uk-grid)
                div(class="uk-width-2-5@m")
                    div
                        h2.uk-heading-small(class="uk-width-medium@m") Psicopedagogía a Domicilio
                        p(class="uk-width-xlarge@m") La psicopedagogía es aquella disciplina que se ocupa de abordar los comportamientos de las personas y los fenómenos psíquicos en el marco educativo. Su misión es lograr mejoras tanto en los métodos didácticos como en los pedagógicos que intervienen en el proceso educativo.
                        a.cta-button.uk-button.uk-button-large Ver Más Información

                        div.uk-margin(class="uk-child-width-1-2@m uk-grid-small", uk-grid)
                            div
                                h4.list-title Necesidades Educativas Especiales
                                ul.uk-list.list-of-items
                                    li #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Diagnóstico de habilidades
                                    li #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Déficit intelectual
                                    li #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Déficit de la atención
                                    li #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Trastorno específico del aprendizaje​asociado a déficit  intelectual
                                    li #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Entrenamiento cognitivo​
                            div
                                h4.list-title Trastorno específico del aprendizaje
                                ul.uk-list.list-of-items
                                    li #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Diagnóstico de habilidades
                                    li #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Déficit intelectual
                                    li #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Déficit de la atención
                                    li #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Trastorno específico del aprendizaje​asociado a déficit  intelectual
                                    li #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] Entrenamiento cognitivo​

                div(class="uk-width-3-5@m")
                    .uk-container-item-padding-remove-right
                        div.uk-position-relative.uk-text-center.side-container
                            .uk-position-absolute.container-background
                            .uk-position-relative
                                img.uk-width-1-2.image-a(src="https://images.unsplash.com/photo-1520642413789-2bd6770d59e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", alt="alt")
                                img.uk-width-1-2.image-b(src="https://images.unsplash.com/photo-1520642413789-2bd6770d59e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", alt="alt")

        img.points-decorator-b(class="uk-visible@m", src="/images/points.svg", uk-svg, alt="alt")


</template>

<style lang="scss">

    .container-background{
        background-color: $background-color-accent;
        width: 65%;
        height: 100%;
        right: 0;
        top: 0;
    }

    .list-of-items{
        padding-left: calc(1.5em + 10px);
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