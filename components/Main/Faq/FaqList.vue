<template lang="pug">

    .uk-section(v-view.once="isInView")
        .uk-section-large.main-container
            .uk-container
                div(uk-grid, class="uk-child-width-1-2@m", ref="animateContent")
                    div
                        div
                            h3.light.uk-heading-small.animate-content  {{ $prismic.asText(data.primary.titulo) }}
                            p.animate-content(class="uk-width-large@m") {{ $prismic.asText(data.primary.contenido) }}
                    div
                        div
                            ul.uk-list.uk-list-divider
                                li.animate-content(v-for="question in data.items")
                                    div
                                        h4.light.title-faq {{ $prismic.asText(question.pregunta) }}
                                        p  {{ $prismic.asText(question.respuesta) }}

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

            const animateContent  = this.$refs.animateContent.getElementsByClassName('animate-content')
            this.animationTl.to(animateContent,{
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

    .main-container{
        background-color: $dark-color-accent;
    }

    .title-faq{
        letter-spacing: -0.02rem;
    }

    .animate-content{
        opacity: 0;
    }

</style>