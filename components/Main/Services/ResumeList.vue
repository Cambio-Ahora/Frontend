<template lang="pug">

    section.uk-container.uk-container-expand-right.uk-section(v-view.once="isInView")
        div( class="uk-flex uk-flex-middle", uk-grid)
            div(class="uk-width-3-5@m ")(ref="contentContainer")
                div
                    .uk-grid-row-large(uk-grid, class="uk-child-width-1-2@m")
                        ServiceCard(v-for="(item, index) in data.items", :key="'service-card-' + index", :data="item")
                    .uk-text-center.uk-margin-large-top.container-content
                        a.uk-display-inline-block.link-button Conócenos un poco más #[span(uk-icon="icon: chevron-right; ratio: 0.8;")]
            div(class="uk-width-2-5@m")
                .uk-container-item-padding-remove-right(ref="animationContainer")
                    div(uk-grid)
                        .uk-width-2-5
                            .uk-inline.image-parallax-container.image-a
                                img.uk-width-1-1(:src="$prismic.asLink(data.primary.imagen_secundaria)", :alt="data.primary.imagen_secundaria.alt")
                                .uk-position-cover.foreground
                        .uk-width-3-5
                            div
                                .uk-inline.image-parallax-container.image-b
                                    img.uk-width-1-1(:src="$prismic.asLink(data.primary.imagen_principal)", :alt="data.primary.imagen_principal.alt")
                                    .uk-position-cover.foreground

                    

</template>

<script>

import ServiceCard from '~/components/Main/Services/ServiceCard'
import { gsap } from 'gsap'


export default {
    props: ['data'],
    data(){
        return{
            animationTl: null,
            isLoad: false,
            animationHasBeenPlayed: false
        }
    },
    components: {
        ServiceCard
    },
    created(){
        
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

            const animateImages  = this.$refs.animationContainer.getElementsByTagName('img')
            const foregroundContainers = this.$refs.animationContainer.getElementsByClassName('foreground')
            const contentContainer = this.$refs.contentContainer.getElementsByClassName('container-content')
            
            this.animationTl.to(animateImages,{
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

            this.animationTl.to(foregroundContainers,{
            duration: .6,
            ease: "power2.Out",
            startAt: {
                y: '-110%',
                opacity: 1,
            },
            y: '0%',
            stagger: {
                amount: .6, 
                },
            }, 0)

            this.animationTl.to(foregroundContainers,{
            duration: .6,
            ease: "power2.Out",
            startAt: {
                y: '0%'
            },
            y: '110%',
            stagger: {
                amount: .6, 
                },
            }, .6)

            this.animationTl.to(contentContainer,{
            duration: .6,
            ease: "power4.Out",
            startAt: {
                opacity: 0,
                y: '20%',
                rotate: .6,
                scale: 1.01
            },
            opacity: 1,
            y: '0%',
            rotate: 0,
            scale: 1,
            stagger: {
                amount: .6
            }
            }, '<-.5')

        },
    }
}
</script>

<style lang="scss" scoped>

    .container-content{
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
            transform: translateY(-100%);
        }
    }
    
    .image-b{
        margin-top: 50%;
        height: 70%;
    }

</style>