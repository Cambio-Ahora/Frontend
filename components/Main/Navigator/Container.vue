<template lang="pug">

    .uk-container.uk-container-large.main-navigator
        nav.uk-navbar-container.uk-navbar-transparent(uk-navbar)
            .uk-navbar-left
                .uk-navbar-item 
                    a.uk-logo
                        div.uk-flex-middle.uk-grid-small(uk-grid)
                            div(class="uk-visible@s")
                                h4.logo {{ $prismic.asText(menu.data.display_name) }}
                            div.uk-flex-first
                                img(width="30", :src="$prismic.asLink(menu.data.logo)", alt="Logo")
                ul.uk-navbar-nav(class="uk-visible@m")
                    li(v-for="menu in menu.data.nav")
                        a   {{ $prismic.asText(menu.primary.nombre) }}
                        .uk-navbar-dropdown.uk-width-medium(v-if="menu.items.length > 0")
                            ul.uk-nav.uk-navbar-dropdown-nav.list-of-items
                                li(v-for="submenu in menu.items")
                                    a   #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] {{ $prismic.asText(submenu.sub_nav_link_label) }}
            .uk-navbar-right
                .uk-navbar-item
                    a.cta-button.uk-button(@click="$modal.show('modal-contact')") Agenda Tu Hora


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

<style lang="scss" scoped>

    .main-navigator{
        position: relative;
        z-index: 3;
    }

    .list-of-items{
        padding-left: calc(1.5em + 10px);
        a{
            text-transform: uppercase;
        }
        span{
            margin-left: -35px;
            color: $main-color-accent;
        }
    }

    nav{
        ul.uk-navbar-nav{
            li{
                a{
                    color: $dark-color-accent;
                    font-family: $heading-bold-font;
                    font-size: $action-font-size;
                    letter-spacing: $action-letter-spacing;
                }
            }
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