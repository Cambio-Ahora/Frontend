<template lang="pug">

    .uk-container.uk-container-large
        nav.uk-navbar-container.uk-navbar-transparent(uk-navbar)
            .uk-navbar-left
                .uk-navbar-item 
                    a.uk-logo
                        img(width="30", src="/images/logos/logo.svg", alt="alt")
                ul.uk-navbar-nav(class="uk-visible@m")
                    li 
                        a Quiénes Somos
                    li 
                        a Psicología Clínica
                    li
                        a Psicopedagogía
            .uk-navbar-right
                .uk-navbar-item
                    a.cta-button.uk-button Agenda Tu Hora
        vsm-menu

</template>

<script>
export default {
    data(){
        return{
            menu: [
                { title: 'Features', dropdown: 'features', content: 'featuresDropdown' },
                { title: 'Enterprise', dropdown: 'enterprise', content: 'enterpriseDropdownTop', secondaryContent: 'enterpriseDropdownBottom' },
                { title: 'Customers', attributes: { href: '#' } },
                { title: 'Github', attributes: { href: 'https://github.com/Alexeykhr/vue-stripe-menu', target: '_blank' } },
                { title: 'Login', attributes: { href: '#' } }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

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