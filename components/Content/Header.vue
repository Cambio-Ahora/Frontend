<template lang="pug">

    section
        .uk-container
            section.uk-section
                h2.uk-heading-small(class="uk-width-large@m") {{ $prismic.asText(data.encabezado) }}
                p(class="uk-width-large@m") {{ $prismic.asText(data.descripcion) }}
        img.uk-margin-large-bottom(:src="$prismic.asLink(data.portada)", alt="alt")
        img.points-decorator(class="uk-visible@m", src="/images/points-2.svg", alt="alt")


</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>

    .points-decorator{
        position: absolute;
        transform: translate(-50%,-50%);
        top: 25%;
        left: 5%;
        transition: all 200ms ease-in-out;
    }

     

    @media(max-width: 1600px){
        .points-decorator{
            left: 0%; 
        }
    }

    @media(max-width: 1400px){
        .points-decorator{
            width: 120px;
            left: -1%;
            top: 25%; 
        }
    }

</style>