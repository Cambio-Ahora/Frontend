<template lang="pug">
    
    div(class="uk-container uk-container-expand-right")
        div(uk-grid, class="uk-grid-collapse uk-flex uk-flex-middle")
            div(class="uk-width-2-5@m") 
                div
                    div
                        .compensate-margin(class="uk-visible@m")
                        h1.uk-heading-small.uk-margin-remove {{ $prismic.asText(data.encabezado_principal) }}
                        h2.uk-heading-small.uk-margin-remove.bold {{ $prismic.asText(data.encabezado_secundario) }}
                        p.content-header.uk-margin-large-top(class="uk-width-large@m") {{ $prismic.asText(data.descripcion) }}
                        ContactContainer
            div(class="uk-width-3-5@m")
                div.uk-container-item-padding-remove-right
                    div
                        img.uk-width-1-1(:src="$prismic.asLink(data.portada)", :alt="data.portada.alt")

        img.points-decorator(class="uk-visible@m", src="/images/points.svg", uk-svg, alt="alt")
                        

</template>

<script>
import ContactContainer from '~/components/Home/ContactContainer'
export default {
    props: ['data'],
    components:{
        ContactContainer
    }
}
</script>

<style lang="scss">

    
    .points-decorator{
        position: absolute;
        transform: translate(-50%,-50%);
        top: 50%;
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
            left: -3%;
            top: 40%; 
        }
    }


    

</style>