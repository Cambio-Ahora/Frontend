<template lang="pug">

    modal(name="modal-contact", scrollable=true, height="auto", transition="nice-modal-fade")
        div
            div(class="uk-child-width-1-2@m uk-flex uk-flex-middle", uk-grid)
                div(class="uk-visible@m")
                    div.uk-container
                        h1.uk-heading-small.uk-margin-remove ¿Necesitas ayuda psicológica de un especialista?
                        h2.uk-heading-small.uk-margin-remove.bold Agenda tu hora.
                        .communication-links.uk-margin-top
                            a.uk-padding-small.uk-display-inline-block.uk-margin-small-right #[span.uk-margin-small-right(uk-icon="icon: phone;")] +569 8439 2853
                            a.uk-padding-small.uk-display-inline-block #[span.uk-margin-small-right(uk-icon="icon: location;")] Domeyko 1835 - Metro Toesca
                            a.uk-padding-small.uk-display-inline-block #[span.uk-margin-small-right(uk-icon="icon: location;")] Monseñor Félix Cabrera 14, Of. 43 - Metro Pedro de Valdivia
                div
                    div.uk-section.uk-container.background-modal
                        form(name="contact", class="uk-form", @submit.prevent="handleSubmit")
                            input(type="hidden", name="form-name", value="contact")
                            .uk-margin
                                h2.light.uk-heading-small Cuéntanos un poco sobre ti
                            .uk-margin-small
                                input.uk-input.uk-form-large(type="text", placeholder="Nombre", v-model="form.name", name="name", required)
                            .uk-margin-small
                                input.uk-input.uk-form-large(type="email", placeholder="Email", v-model="form.email", name="email", required)
                            .uk-margin-small
                                input.uk-input.uk-form-large(type="text", placeholder="Teléfono", v-model="form.phone", name="phone", required)
                            .uk-margin-small
                                input.uk-input.uk-form-large(type="text", placeholder="Mensaje", v-model="form.message", name="message", required)
                            .uk-margin-small.uk-text-right
                                button.uk-button.uk-button-large(type="submit") Enviar 
                        
            

</template>

<script>
export default {
    data(){
        return{
            form: {
                name: '',
                email: '',
                message: '',
            },
        }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
    },
    handleSubmit() {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'contact', ...this.form }),
      })
        .then(reponse => {
            UIkit.notification({message: 'Se Envió Su Mensaje. Nos contactaremos a la brevedad.', pos: 'top-center'})
        })
        .catch(error => alert(error));
    },
  }
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