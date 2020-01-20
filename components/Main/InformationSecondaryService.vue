<template lang="pug">

    section.uk-section.uk-position-relative(v-view.once="isInView")
        div.uk-container.uk-container-expand-right
            div( class="uk-flex uk-flex-middle", uk-grid)
                div(class="uk-width-2-5@m")
                    div.content-secondary(ref="animateContent")
                        h2.uk-heading-small.animate-content(class="uk-width-medium@m") {{ $prismic.asText(data.primary.encabezado) }}
                        p.animate-content(class="uk-width-xlarge@m") {{ $prismic.asText(data.primary.contenido) }}
                        nuxt-link(:to="$prismic.asLink(data.primary.accion_del_boton)", v-if="data.primary.accion_del_boton.id").cta-button.uk-button.uk-button-large.animate-content {{ data.primary.texto_del_boton }}

                        div.uk-margin.uk-grid-row-large(class="uk-child-width-1-2@m uk-grid-small", uk-grid)
                            div(v-for="listItem in data.items")
                                h4.animate-content.list-title {{ $prismic.asText(listItem.titulo) }}
                                ul.animate-content.uk-list.list-of-items
                                    div(v-html="$prismic.asHtml(listItem.listado)")

                div(class="uk-width-3-5@m")
                    .uk-container-item-padding-remove-right
                        div.uk-position-relative.uk-text-center.side-container
                            .uk-position-absolute.container-background
                            .uk-position-relative.padding-content(ref="imageContainer")
                                .uk-inline.image-parallax-container.uk-width-1-1
                                    img(:src="$prismic.asLink(data.primary.imagen_primaria)", :alt="data.primary.imagen_primaria.alt")
                                    .uk-position-cover.foreground

        img.points-decorator-b(class="uk-visible@m", src="/images/points.svg", uk-svg, alt="alt")


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
            delay: .1
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
            const animateContent  = this.$refs.animateContent.getElementsByTagName('*')
            const images = this.$refs.imageContainer.getElementsByTagName('img')
            const foreground = this.$refs.imageContainer.getElementsByClassName('foreground')

            this.animationTl.to(images,{
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

            this.animationTl.to(foreground,{
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

            this.animationTl.to(foreground,{
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
            }, .7)
        }
    }
}
</script>

<style lang="scss">

    .content-secondary .animate-content{
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
            transform: translateX(00%);
        }
    }

    .container-background{
        background-color: $background-color-accent;
        width: 65%;
        height: 100%;
        right: 0;
        top: 0;
    }

    .padding-content{
        padding: 20px 0;
    }

    .list-of-items{
        li:nth-child(n+2){
            margin-top: 20px;
        }
        span{
            margin-left: -35px;
            color: $main-color-accent;
        }
    }

    .image-a{
        position: relative;
        left: 15%;
        margin-top: 25%;
        z-index: 2;
    }

    .list-title{
        letter-spacing: -.03rem;
    }



    .points-decorator-b{
        position: absolute;
        transform: translate(-50%,-50%);
        top: 30%;
        left: 3%;
        transition: all 200ms ease-in-out;
    }

    @media(max-width: 1600px){
        .points-decorator-b{
            left: 0%; 
        }
    }

    @media(max-width: 1400px){
        .points-decorator-b{
            width: 120px;
            left: -3%;
            top: 40%; 
        }
    }

</style>