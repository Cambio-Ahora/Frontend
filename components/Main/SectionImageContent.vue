<template lang="pug">

    section.uk-section(v-view.once="isInView")
        div(class="uk-container uk-container-expand-left")
            div(uk-grid, class="uk-flex uk-grid-large uk-flex-middle")
                div(class="uk-width-3-5@m") 
                    div.uk-container-item-padding-remove-left(ref="containerAnimation")
                        .uk-inline.image-parallax-container
                            img(:src="$prismic.asLink(data.primary.imagen_referencial)", :alt="data.primary.imagen_referencial.alt")
                            .uk-position-cover.foreground
                div(class="uk-width-2-5@m")
                    div
                        div.animate-content(ref="animateContent")
                            h2.uk-heading-small(class="uk-width-medium@m") {{ $prismic.asText(data.primary.encabezado) }}
                            p(class="uk-width-xlarge@m")    {{ $prismic.asText(data.primary.contenido) }}
                            a.cta-button.uk-button.uk-button-large Agenda Tu Hora


</template>

<script>

import { gsap } from 'gsap'

export default {
    props: ['data'],
    data(){
        return{
            animationTl: null,
        }
    },
    beforeMount(){
        this.animationTl = new gsap.timeline({
            paused: true,
            delay: .3
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

            const animateTexts = this.$refs.animateContent.getElementsByTagName('*')
            const image = this.$refs.containerAnimation.getElementsByTagName('img')[0]
            const foregroundContainer = this.$refs.containerAnimation.getElementsByClassName('foreground')[0]

            this.animationTl.to(image,{
            duration: .6,
            ease: "power2.Out",
            startAt: {
                scale: 1.1,
            },
            opacity: 1,
            scale: 1,
            stagger: {
                amount: .6, 
                },
            }, .6)

            

             this.animationTl.to(foregroundContainer,{
            duration: .6,
            ease: "power2.Out",
            startAt: {
                x: '-110%',
                opacity: 1,
            },
            x: '0%',
            stagger: {
                amount: .6, 
                },
            }, 0)

            this.animationTl.to(foregroundContainer,{
            duration: .6,
            ease: "power2.Out",
            startAt: {
                x: '0%'
            },
            x: '110%',
            stagger: {
                amount: .6, 
                },
            }, .6)

            this.animationTl.to(animateTexts,{
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
            }, .7)

        },
    }
}
</script>

<style lang="scss" scoped>

    .animate-content *{
        opacity: 0;
    }

    .image-parallax-container{
        overflow: hidden;
        img{
            opacity: 0;
        }
        .foreground{
            background: $main-color-accent;
            opacity: 0;
            transform: translateX(-100%);
        }
    }


</style>