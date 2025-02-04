<template lang="pug">

    section.uk-section.uk-section-small(v-view.once="isInView", :style="{ 'background-color' : data.primary.color_de_fondo }")
        div.uk-container
            div.uk-text-center(ref="animateImage")
                h2.uk-margin-bottom.animate-image {{ $prismic.asText(data.primary.encabezado) }}
                h4.animate-image(class="uk-width-4-5@m uk-margin-auto uk-margin-remove-top") {{ data.primary.titulo }}
                div.animate-image(class="uk-width-xlarge@m uk-margin-auto uk-margin-remove-top")
                    div(v-html="$prismic.asHtml(data.primary.contenido)")
                nuxt-link(:to="$prismic.asLink(data.primary.link)", v-if="data.primary.link.id").animate-image.uk-display-inline-block.link-button {{ data.primary.texto_del_link }} #[span(uk-icon="icon: chevron-right; ratio: 0.8;")]

</template>

<script>
import { gsap } from 'gsap'
export default {
    props: ['data'],
    data(){
        return{
            animationTl: null
        }
    },
    beforeMount(){
        this.animationTl = new gsap.timeline({
            paused: true
        })
    },
    mounted(){
        this.mainAnimation()
    },
    methods: {
        isInView(e){
            this.animationTl.play()
        },
        mainAnimation(){

            const animateImages  = this.$refs.animateImage.getElementsByClassName('animate-image')
            this.animationTl.to(animateImages,{
                duration: .7,
                ease: "power2.Out",
                startAt: {
                    opacity: 0,
                    y: '10%'
                },
                opacity: 1,
                y: '0%',
                stagger: {
                    amount: .7,
                },
            }, .5)
        },
    }
}
</script>

<style lang="scss" scoped>

    .animate-image{
        opacity: 0;
    }

</style>
