<template lang="pug">

    div.uk-text-center.card-user.uk-padding
        img(:src="$prismic.asLink(data.foto)")
        .uk-margin
            h4.uk-margin-remove {{ $prismic.asText(data.nombre) }}
            p.uk-margin-remove {{ $prismic.asText(data.titulo_profesional) }}
        hr.uk-hr.uk-margin
        div.uk-text-left.content-html-curriculo(v-html="$prismic.asHtml(data.curriculo)")
    
</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss">

    .card-user{
        background-color: $background-color-accent;
    }

    .content-html-curriculo{
        li{
            padding-left: calc(1.5em + 10px);
            span{
                margin-left: -30px;
                color: $main-color-accent;
            }
        }
    }

</style>