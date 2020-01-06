<template lang="pug">
    section.uk-section
        .uk-container
            div.uk-grid-row-large(uk-grid, class="uk-child-width-1-3@m")
                ServiceCard

</template>


<script>

import ServiceCard from '~/components/Main/Services/ServiceCard'

export default {
    components: {
        ServiceCard
    },
    props: ['data']
}
</script>

<style lang="scss">
    .icon{
        color: $main-color-accent;
    }

</style>