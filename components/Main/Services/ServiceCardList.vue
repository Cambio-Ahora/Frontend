<template lang="pug">
    section.uk-section(v-view.once="isInView")
        .uk-container
            div.uk-grid-row-large(ref="serviceContainer", uk-grid, class="uk-child-width-1-3@m")
                ServiceCard(v-for="(item, index) in data.items", :key="'service-card' + item", :data="item")

</template>


<script>

import ServiceCard from '~/components/Main/Services/ServiceCard'

import { gsap } from 'gsap'

export default {
    components: {
        ServiceCard
    },
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

            const animateLogos  = this.$refs.serviceContainer.getElementsByClassName('container-content')
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

<style lang="scss">
    .icon{
        color: $main-color-accent;
    }

</style>