<template lang="pug">

    section.uk-section
        .uk-container
            .uk-margin-auto.price-container.uk-card.uk-card-body(class="uk-width-large@s")
                div
                    h3 Valores
                    p.content La evaluación tiene un valor de #[span.hl-bold ${{ data.primary.precio_de_evaluacion_psicologica | currency }}] y se realiza en una sesión de una hora. 
                    p.content El valor de cada sesión es de #[span.hl-bold ${{ data.primary.precio_por_sesion | currency }}]

</template>

<script>
export default {
    props: ['data'],
    filters: {
        currency(value){
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }
}
</script>

<style lang="scss" scoped>

    .price-container{
        background-color: $background-color-accent;
        .content{
            
            .hl-bold{
                font-family: $heading-font;
                color: $dark-color-accent;
                font-size: 1.1rem;
                text-decoration: underline;
            }
        }
    }

</style>