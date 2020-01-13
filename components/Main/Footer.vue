<template lang="pug">

    div
        .uk-container.uk-container-large
            hr.uk-hr
        .uk-container.uk-container-large.uk-section.uk-section-small
                
                nav
                    div(class="uk-child-width-expand@s", uk-grid)
                        div
                            nuxt-link(to="/")
                                div.uk-flex-middle.uk-grid-small(uk-grid)
                                    div(class="uk-visible@s")
                                        h4.logo {{ $prismic.asText(menu.data.display_name) }}   
                                    div.uk-flex-first
                                        img(width="30", :src="$prismic.asLink(menu.data.logo)", alt="Logo")
                        div(v-for="menu in menu.data.nav")
                            div.uk-navbar-nav
                                div
                                    nuxt-link.title-content( :to="$prismic.asLink(menu.primary.link)", v-if="menu.primary.link.id" ) {{ $prismic.asText(menu.primary.nombre) }}
                                    div(v-if="menu.items.length > 0")
                                        ul.uk-nav.list-of-items
                                            li(v-for="submenu in menu.items")
                                                nuxt-link( :to="$prismic.asLink(submenu.sub_nav_link)", v-if="submenu.sub_nav_link.id" )   #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] {{ $prismic.asText(submenu.sub_nav_link_label) }}

</template>

<script>

import { mapState } from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    computed: {
        ...mapState({
            menu: state => state.menu.menu,
        })
    }
}
</script>

<style lang="scss">

    .title-content{
        text-transform: uppercase;
            color: $main-color-accent;
                    font-family: $heading-bold-font;
                    font-size: $action-font-size;
                    letter-spacing: $action-letter-spacing;
    }

    .list-of-items{
        margin-top: 15px;
        a{
            text-transform: uppercase;
            color: $dark-color-accent;
                    font-family: $heading-bold-font;
                    font-size: $action-font-size;
                    letter-spacing: $action-letter-spacing;
        }
        span{
            margin-left: -35px;
            color: $main-color-accent;
        }
    }

        .uk-navbar-nav{
                a{
                    
                }
        }

    .cta-button{
        background-color: $main-color-accent;
        color: #fff;
        font-family: $heading-bold-font;
        font-size: $action-font-size;
        letter-spacing: $action-letter-spacing;
    }

</style>