<template lang="pug">

    
        .uk-container.uk-container-expand-right
            div(class="uk-flex uk-flex-middle", uk-grid)
                div(class=" uk-width-xlarge@m")
                    div
                        div(class="uk-text-center uk-text-left@m")
                            h1.uk-heading-small.uk-margin-remove ¿Necesitas ayuda psicológica de un especialista?
                            .communication-links.uk-margin-top
                                a.uk-padding-small.uk-display-inline-block.uk-margin-small-right #[span.uk-margin-small-right(uk-icon="icon: phone;")] +569 8439 2853
                                a(href="https://www.google.com/maps/place/Domeyko+1835,+Santiago,+Regi%C3%B3n+Metropolitana/@-33.4554257,-70.6625575,17z/data=!3m1!4b1!4m5!3m4!1s0x9662c50455317b29:0x8937ddec9ae9581a!8m2!3d-33.4554302!4d-70.6603688", target="_blank").uk-padding-small.uk-display-inline-block #[span.uk-margin-small-right(uk-icon="icon: location;")] Domeyko 1835 - Metro Toesca
                                div(class="uk-width-large@m uk-text-center")
                                    h6.uk-padding-small.uk-margin-remove Horarios de Atención
                                a.uk-padding-small.uk-display-block #[span.uk-margin-small-right(uk-icon="icon: clock;")] Lun - Vie: 09:00 hrs. a 21:00 hrs \ Sáb. de 09:00 hrs a 17:00 hrs.

                div(class="uk-width-expand@m")
                    div.uk-flex.uk-flex-middle.uk-section.uk-container.background-modal.uk-container-item-padding-remove-right(uk-height-viewport)
                        .uk-padding(class="uk-width-xlarge@m uk-margin-auto")
                            form(name="contact", class="uk-form", @submit.prevent="handleSubmit")
                                input(type="hidden", name="form-name", value="contact")
                                .uk-margin
                                    h2.light.uk-heading-small Agenda tu hora
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
                origen: '',
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
        var currentSlug = this.$route.params.slug
        if(!currentSlug){
            currentSlug = 'Inicio'
        }

        this.form.origen = currentSlug
        
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

<style lang="scss" scoped>

    

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


    .background-modal{
        background-color: rgba($dark-color-accent, 0.5);
    }

    form{
        input.uk-input{
            border: 0;
            font-family: $content-font;
            font-size: 1rem;
        }
        button.uk-button{
        background-color: $dark-color-accent;
        color: #fff;
        font-family: $heading-bold-font;
        font-size: $action-font-size;
        letter-spacing: $action-letter-spacing;
            &.secondary{
                background-color: $dark-color-accent;
            }
            &.close-button{
                background-color: $soft-dark-color-accent
            }
        }
    }

    @media(max-width: 960px){
        .uk-container-item-padding-remove-right{
            width: 100%;
            margin-right: 0;
        }
        .background-modal{
            min-height: 300px!important;
        }
    }


</style>