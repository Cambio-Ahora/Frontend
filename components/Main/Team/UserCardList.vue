<template lang="pug">

    section.uk-section
        .uk-container
            div(class="uk-child-width-expand@m uk-grid-match", uk-grid)
                div(v-for="user in data.items")
                    UserCard(:data="user")
    
    
</template>

<script>
import UserCard from '~/components/Main/Team/UserCard'
export default {
    props: ['data'],
    components:{
        UserCard
    },
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>

    

</style>