<template lang="pug">

    section.uk-section(v-view.once="isInView")
        .uk-container
            div.list-business(ref="logoContainer", class="uk-child-width-1-6@l uk-text-center uk-child-width-1-3@m uk-child-width-1-2 uk-flex uk-flex-middle", uk-grid)
                div(v-for="item in data.items")
                    a
                        img(:src="$prismic.asLink(item.logo)", width="150", :alt="item.logo.alt")

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

            const animateLogos  = this.$refs.logoContainer.getElementsByTagName('a')
            this.animationTl.to(animateLogos,{
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

    .list-business{
        div{
            a{
                display: inline-block;
                opacity: 0;
            }
        }
    }

</style>