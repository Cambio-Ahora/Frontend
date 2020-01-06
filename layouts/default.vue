<template lang="pug">
  div
    Navigator
    nuxt.main-container
    Navigator.uk-margin-large-bottom
    ContactModal
</template>

<script>
import Navigator from '~/components/Main/Navigator/Container'
import ContactModal from '~/components/Contact/Modal'
export default {
  components:{
    Navigator,
    ContactModal
  },
  mounted(){
    
  },
  methods: {

  }
}
</script>

<style lang="scss">

  .main-container{
    margin-top: -80px;
  }

  @media (max-width: 960px) {

    .main-container{
      margin-top: 50px;
    }

  }

</style>
