<template lang="pug">
  div
    Navigator
    nuxt.main-container
    Navigator.uk-margin-large-bottom
</template>

<script>
import Navigator from '~/components/Main/Navigator'
export default {
  components:{
    Navigator
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
