<template lang="pug">
  div
    Navigator
    div
      nuxt.main-container
      Footer
    .uk-position-bottom-right.uk-position-small.uk-position-fixed
      a(:href="whatsappLink")
        img(src="/images/logos/whatsapp.png", width="60", uk-tooltip="Comunícate con nosotros por WhatsApp")
</template>

<script>
import Navigator from '~/components/Main/Navigator/Container'
import Footer from '~/components/Main/Footer'
export default {
  components:{
    Navigator,
    Footer
  },
  data(){
    return{
      phone: '56940444172',
      message: '😉 Hola'
    }
  },
  async fetch(){
    const { data } = await this.$prismic.api.getSingle('configuracion')
    this.phone = data.whatsapp_numero
    this.message = data.mensaje
  },
  computed: {
    whatsappLink(){
      return 'https://api.whatsapp.com/send?phone='+ this.phone +'&text=' + this.message
    }
  },
  mounted(){
    
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

  .main-container{
    margin-top: -80px;
  }

  @media (max-width: 960px) {

    .main-container{
      margin-top: 50px;
    }

  }

</style>
