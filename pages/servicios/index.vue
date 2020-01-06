<template lang="pug">
    div.container
        Header
        ButtonGroup
</template>

<script>

import Header from '~/components/Content/Header'
import ButtonGroup from '~/components/Content/ButtonGroup'

export default {
    components: {
        Header,
        ButtonGroup
    }
}
</script>

<style lang="scss">
    .container{
        margin-top: 0px;
    }
</style>