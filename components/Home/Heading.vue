<template lang="pug">
    
    div(class="uk-container uk-container-expand-right")
        div(uk-grid, class="uk-grid-collapse uk-flex uk-flex-middle")
            div(class="uk-width-2-5@m") 
                div
                    div
                        .compensate-margin(class="uk-visible@m")
                        h1.uk-heading-small.uk-margin-remove ¿Necesitas ayuda psicológica de un especialista?
                        h2.uk-heading-small.uk-margin-remove.bold Te podemos ayudar.
                        p.content-header.uk-margin-large-top(class="uk-width-large@m") Trabajamos junto al paciente para lograr un cambio clínico significativo hasta que mejore sus problemas.
                        form.heading-form.uk-display-inline-block.uk-margin-medium-bottom(class="uk-form")
                            div
                                .uk-inline
                                    a.icon-form.uk-form-icon(href="#", uk-icon="icon: pencil")
                                    input.uk-input.uk-form-large(type="text", placeholder="Tu Correo Electrónico")
                                button.uk-button.uk-button-large Agendar Ahora
                        .communication-links
                            a.uk-display-inline-block.uk-margin-small-right #[span.uk-margin-small-right(uk-icon="icon: phone;")] +569 4044 4172
                            a.uk-display-inline-block #[span.uk-margin-small-right(uk-icon="icon: mail;")] josepuma@sayrin.cl
            div(class="uk-width-3-5@m")
                div.uk-container-item-padding-remove-right
                    div
                        img.uk-width-1-1(src="/images/header-image@2x.png", alt="alt")

        img.points-decorator(class="uk-visible@m", src="/images/points.svg", uk-svg, alt="alt")
                        

</template>

<script>
export default {
    
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

    .communication-links{
        a{
            span{
                color: $secondary-color-accent;
            }
            font-family: $content-font;
            color: $soft-dark-color-accent;
            font-size: 1rem;
        }
    }

    .heading-form{

        box-shadow: 2px 5px 10px 2px rgba($soft-dark-color-accent, 0.15);

        .icon-form{
            color: $main-color-accent;
        }
        input.uk-input{
            font-size: 1rem;
            background-color: #fff;
            font-family: $content-font;
            border: 0;
            letter-spacing: -0.02rem;
            color: $soft-dark-color-accent;
            width: 260px;
        }

        input::placeholder{
            color: $soft-color-accent;
        }

        button{
            background-color: $main-color-accent;
            color: #fff;
            font-family: $heading-bold-font;
            font-size: $action-font-size;
            letter-spacing: $action-letter-spacing;
            
        }

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


    @media(max-width: 1225px){
        .heading-form{
            display: none!important;
        }
    }

</style>