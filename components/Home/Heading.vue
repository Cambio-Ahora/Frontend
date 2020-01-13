<template lang="pug">
    
        div(class="uk-container uk-container-expand-right")
            div(uk-grid, class="uk-grid-collapse uk-flex uk-flex-middle")
                div(class="uk-width-2-5@m") 
                    div
                        div(ref="contentAnimate")
                            .compensate-margin(class="uk-visible@m")
                            h1.uk-heading-small.uk-margin-remove.heading-animate-item {{ $prismic.asText(data.encabezado_principal) }}
                            h2.uk-heading-small.uk-margin-remove.bold.heading-animate-item {{ $prismic.asText(data.encabezado_secundario) }}
                            p.content-header.uk-margin-large-top.heading-animate-item(class="uk-width-large@m uk-visible@l") {{ $prismic.asText(data.descripcion) }}
                            ContactContainer(:data="data").heading-animate-item
                div(class="uk-width-3-5@m")
                    div.uk-container-item-padding-remove-right
                        div
                            img.uk-width-1-1.heading-animate-item(ref="headingImage", :src="$prismic.asLink(data.portada)", :alt="data.portada.alt")

            img.points-decorator(ref="decorator", class="uk-visible@m", src="/images/points.svg", uk-svg, alt="alt")
                        

</template>

<script>
import ContactContainer from '~/components/Home/ContactContainer'
import { gsap } from 'gsap'

export default {
    props: ['data'],
    data(){
        return{
            animationTl: null
        }        
    },
    components:{
        ContactContainer
    },
    beforeMount(){
        this.animationTl = new gsap.timeline({
            paused: true,
        })
    },
    mounted(){
        this.mainAnimation()
        this.animationTl.play()
    },
    methods: {
        mainAnimation(){

            const { headingImage } = this.$refs
            const { decorator } = this.$refs
            const animateContent = this.$refs.contentAnimate.getElementsByClassName('heading-animate-item')
            

            this.animationTl.to('.main-navigator',{
                duration: 1,
                ease: "power2.In",
                startAt: {
                    opacity: 0,
                    y: '-10px'
                },
                opacity: 1,
                y: '0',
                stagger: {
                    amount: .7, 
                },
            })

            this.animationTl.to(headingImage,{
                duration: 1.2,
                ease: "power3.Out",
                startAt: {
                    opacity: 0,
                    y: '10%',
                    rotate: -10,
                    scale: 2,
                },
                opacity: 1,
                y: '0%',
                rotate: 0,
                scale: 1,
                stagger: {
                    amount: .7, 
                },
            },'>-1')

            this.animationTl.to(animateContent,{
                duration: 1.5,
                ease: "power2.Out",
                startAt: {
                    opacity: 0,
                    y: '10%',
                    rotate: -5,
                    scale: 1.02,
                },
                opacity: 1,
                y: '0%',
                rotate: 0,
                scale: 1,
                stagger: {
                    amount: .7, 
                },
            })

            this.animationTl.to(decorator,{
                duration: 1,
                ease: "power2.Out",
                startAt: {
                    opacity: 0,
                },
                opacity: 1,
                stagger: {
                    amount: .7, 
                },
            })
        
        },
    }
}
</script>

<style lang="scss">

    .main-navigator{
        opacity: 0;
    }

    .heading-animate-item{
        opacity: 0;
    }
    
    .points-decorator{
        position: absolute;
        top: 25%;
        left: -2%;
        opacity: 0;
    }

     

    @media(max-width: 1600px){
        .points-decorator{
            left: -6%; 
        }
    }

    @media(max-width: 1400px){
        .points-decorator{
            width: 120px;
            left: -6%;
            top: 20%; 
        }
    }


    

</style>