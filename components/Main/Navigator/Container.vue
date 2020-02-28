<template lang="pug">

        div(uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-background-default uk-box-shadow-small; top: 200")
            .uk-container.uk-container-large.fix-zindex(v-bind:class="{ 'main-navigator': $nuxt.$route.path == '/' }")
                    nav.uk-navbar-container.uk-navbar-transparent.uk-navbar(uk-navbar)
                        .uk-navbar-left
                            .uk-navbar-item 
                                nuxt-link(to="/")
                                    div.uk-flex-middle.uk-grid-small(uk-grid)
                                        div(class="uk-visible@s")
                                            h4.logo {{ $prismic.asText(menu.data.display_name) }}   
                                        div.uk-flex-first
                                            img(width="30", :src="$prismic.asLink(menu.data.logo)", alt="Logo")
                            ul.uk-navbar-nav(class="uk-visible@l")
                                li(v-for="menu in menu.data.nav")
                                    nuxt-link( :to="$prismic.asLink(menu.primary.link)", v-if="menu.primary.link.id" ) {{ $prismic.asText(menu.primary.nombre) }}
                                    .uk-navbar-dropdown.uk-width-medium(v-if="menu.items.length > 0")
                                        ul.uk-nav.uk-navbar-dropdown-nav.list-of-items
                                            li(v-for="submenu in menu.items")
                                                nuxt-link( :to="$prismic.asLink(submenu.sub_nav_link)", v-if="submenu.sub_nav_link.id" )   #[span.uk-margin-small-right(uk-icon="icon: chevron-right")] {{ $prismic.asText(submenu.sub_nav_link_label) }}
                        .uk-navbar-right
                            .uk-navbar-item
                                a.cta-button.secondary.fix-padding-small-link.uk-button(href="tel:+56984392853") #[span(uk-icon="icon: receiver;") ]#[span(class="uk-visible@s") +569 8439 2853]
                            .uk-navbar-item
                                nuxt-link.cta-button.uk-button.fix-padding-small-link(to='/contacto') Agendar #[span(class="uk-visible@s") Tu Hora]
                            .uk-navbar-item(class="uk-hidden@l")
                                a(uk-toggle="target: #offcanvas-nav", uk-navbar-toggle-icon )

            div#offcanvas-nav(uk-offcanvas="overlay: true")
                .uk-offcanvas-bar.navbar-offcanvas
                    ul.uk-nav.uk-nav-default.uk-margin-bottom
                        li
                            nuxt-link(to="/")
                                div.uk-flex-middle.uk-grid-small(uk-grid)
                                    div(class="uk-visible@s")
                                        h4.logo {{ $prismic.asText(menu.data.display_name) }}   
                                    div.uk-flex-first
                                        img(width="30", :src="$prismic.asLink(menu.data.logo)", alt="Logo")
                    ul.uk-nav.uk-nav-default
                        li.uk-parent(v-for="menu in menu.data.nav")
                            nuxt-link( :to="$prismic.asLink(menu.primary.link)", v-if="menu.primary.link.id" ) {{ $prismic.asText(menu.primary.nombre) }}  
                            ul.uk-nav-sub
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

<style lang="scss" scoped>

    .navbar-offcanvas{
        ul{
            li{
                a{
                    color: $dark-color-accent;
                    font-family: $heading-bold-font;
                    font-size: $action-font-size;
                    letter-spacing: $action-letter-spacing;
                    text-transform: uppercase;
                    &:hover{
                        color: $main-color-accent;
                    }
                    &.nuxt-link-exact-active{
                        color: $main-color-accent;
                        
                    }
                }
            }

            &.uk-nav-sub{
                li{
                    padding-left: calc(1.5em + 10px);
                    span{
                        margin-left: -30px;
                        color: $main-color-accent;
                    }
                    a{
                        color: $soft-dark-color-accent;
                        font-size: .7rem;
                        letter-spacing: 0;
                        &:hover{
                            color: $main-color-accent;
                        }
                    }
                }
            }
        }
    }

    .uk-offcanvas-bar{
        background-color: $background-color-accent;
    }

    .fix-zindex{
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
                    transition: all 200ms ease-in-out;
                    &:hover{
                        color: $main-color-accent;
                    }
                    &.nuxt-link-exact-active{
                        color: $main-color-accent;
                        
                    }
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