<template lang="pug">
  div
    Navigator
    div
      nuxt.main-container
      Footer
</template>

<script>
import Navigator from '~/components/Main/Navigator/Container'
import Footer from '~/components/Main/Footer'
export default {
  components:{
    Navigator,
    Footer
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
