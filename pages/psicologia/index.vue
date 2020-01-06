<template lang="pug">
    div
        //-Header
        //-ServiceCardList
        //-BusinessList
</template>

<script>
import Header from '~/components/Main/Header'
import BusinessList from '~/components/Main/BusinessList'
import ServiceCardList from '~/components/Main/Services/ServiceCardList'
export default {
    components: {
        Header,
        BusinessList,
        ServiceCardList
    }
}
</script>