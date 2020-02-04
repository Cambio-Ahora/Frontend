<template lang="pug">

    section.uk-section
        .uk-container
            .uk-margin-auto.price-container.uk-card.uk-card-body(class="uk-width-xlarge@s")
                div
                    h3 {{ $prismic.asText(data.primary.titulo) }}
                    div(uk-grid, v-for="service in data.items")
                        div(class="uk-width-expand", uk-leader) {{ $prismic.asText(service.detalle) }}
                        div
                            p.hl-bold ${{ service.precio | currency }}

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