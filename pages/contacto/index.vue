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
                                    input.uk-input.uk-form-large(type="text", placeholder="Nombre", v-model="form.nombre", name="nombre", required)
                                .uk-margin-small
                                    input.uk-input.uk-form-large(type="email", placeholder="Email", v-model="form.email", name="email", required)
                                .uk-margin-small
                                    input.uk-input.uk-form-large(type="text", placeholder="Teléfono", v-model="form.telefono", name="telefono", required)
                                .uk-margin-small
                                    input.uk-input.uk-form-large(type="text", placeholder="Escribe tu motivo de consulta", v-model="form.mensaje", name="mensaje", required)
                                .uk-margin-small
                                    h6.uk-margin-remove Seleccione su previsión:
                                    label.uk-margin-small-right.label-white
                                        input.uk-radio(type="radio", value="Fonasa", v-model="form.prevision",  name="prevision")
                                        span Fonasa
                                    label.uk-margin-small-right.label-white
                                        input.uk-radio(type="radio", value="Isapre", v-model="form.prevision", name="prevision")
                                        span Isapre
                                    label.uk-margin-small-right.label-white
                                        input.uk-radio(type="radio", value="Sin Previsión", v-model="form.prevision",  name="prevision")
                                        span Sin Previsión
                                .uk-margin-small.uk-text-right
                                    button.uk-button.uk-button-large(type="submit") Enviar




</template>

<script>
export default {
    data(){
        return{
            form: {
                subject: 'Formulario de Contacto Psicología Online',
                origen: 'Formulario de Contacto Psicología Online',
                nombre: '',
                email: '',
                mensaje: '',
                telefono: '',
                prevision: ''
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
    resetForm() {
      this.form.nombre = '';
      this.form.email = '';
      this.form.mensaje = '';
      this.form.telefono = '';
      this.form.prevision = '';
    },
    handleSubmit() {

        if(this.form.prevision == ''){
            alert('Debe elegir su previsión para enviar el formulario.')
            /*UIkit.notification({
                message: '',
                status: 'primary',
                pos: 'top-center',
                timeout: 5000
            });*/
        }else{
            this.$axios.post(`https://api.redcollege.net/api/auth/demoMailNewVersion`, {
                datos: this.form
            })
            .then(response => {
                alert('Se Envió Su Mensaje. Nos contactaremos a la brevedad.')
                this.resetForm();
                //UIkit.notification({message: '', pos: 'top-center'})
            })
        }

    },
  }
}
</script>

<style lang="scss" scoped>

    .label-white{
        color: $background-color-accent;
        input{
            margin-right: .2rem;
        }
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
