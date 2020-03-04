<template lang="pug">
    div
        form.heading-form.uk-display-inline-block.uk-margin-medium-bottom(class="uk-form uk-hidden")
            div
                .uk-inline
                    a.icon-form.uk-form-icon(href="#", uk-icon="icon: pencil")
                    input.uk-input.uk-form-large(@click="$modal.show('modal-contact')", type="text", placeholder="Tu Correo Electrónico")
                    button.uk-button.uk-button-large(type="button", @click="$modal.show('modal-contact')") Agendar Ahora
        .communication-links
            a.uk-padding-small.uk-display-inline-block.uk-margin-small-right #[span.uk-margin-small-right(uk-icon="icon: phone;")] +569 8439 2853
            a.uk-padding-small.uk-display-inline-block #[span.uk-margin-small-right(uk-icon="icon: location;")]  Domeyko 1835 - Metro Toesca
            div(class="uk-width-large@m")
                h6.uk-padding-small.uk-margin-remove.uk-text-center Horarios de Atención
            a.uk-padding-small.uk-display-block #[span.uk-margin-small-right(uk-icon="icon: clock;")] Lun - Vie: 09:00 hrs. a 21:00 hrs \ Sáb. de 09:00 hrs a 17:00 hrs.
</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss">

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

    @media(max-width: 1225px){
        .heading-form{
            display: none!important;
        }
    }

</style>