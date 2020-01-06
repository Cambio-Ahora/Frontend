<template lang="pug">

    modal(name="modal-contact", scrollable=true, height="auto", transition="nice-modal-fade")
        div
            div(class="uk-child-width-1-2@m uk-flex uk-flex-middle", uk-grid)
                div(class="uk-visible@m")
                    div.uk-container
                        h1.uk-heading-small.uk-margin-remove ¿Necesitas ayuda psicológica de un especialista?
                        h2.uk-heading-small.uk-margin-remove.bold Agenda tu hora.
                        .communication-links.uk-margin-top
                            a.uk-display-inline-block.uk-margin-small-right #[span.uk-margin-small-right(uk-icon="icon: phone;")] +569 4044 4172
                            a.uk-display-inline-block #[span.uk-margin-small-right(uk-icon="icon: mail;")] josepuma@sayrin.cl
                div
                    div.uk-section.uk-container.background-modal
                        form(class="uk-form")
                            .uk-margin
                                h2.light.uk-heading-small Cuéntanos un poco sobre ti
                            .uk-margin-small
                                input.uk-input.uk-form-large(type="text", placeholder="Nombre")
                            .uk-margin-small
                                input.uk-input.uk-form-large(type="text", placeholder="Email")
                            .uk-margin-small
                                input.uk-input.uk-form-large(type="text", placeholder="Teléfono")
                            .uk-margin-small
                                input.uk-input.uk-form-large(type="text", placeholder="Mensaje")
                            .uk-margin-small.uk-text-right
                                button.uk-button.uk-button-large(type="submit") Enviar 
                        
            

</template>

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

    .v--modal-box {
        max-width: 1200px!important;
        width: 90% !important;
        
        //to align modal center
        margin: 0 auto;
        // to avoid class v--modal-box to have weird "left" property value
        left: 0 !important;
    }

    .background-modal{
        background-color: $dark-color-accent;
    }

    form{
        input.uk-input{
            border: 0;
            font-family: $content-font;
            font-size: 1rem;
        }
        button.uk-button{
        background-color: $main-color-accent;
		color: #fff;
        font-family: $heading-bold-font;
        font-size: $action-font-size;
        letter-spacing: $action-letter-spacing;
        &.secondary{
            background-color: $dark-color-accent;
        }
    }
    }


</style>