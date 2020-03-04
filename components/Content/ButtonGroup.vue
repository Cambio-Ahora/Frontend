<template lang="pug">

    section.uk-section
        .uk-container
            .uk-text-center
                h3 Ubícanos en: 
                nuxt-link.uk-button.uk-button-large.secondary.uk-margin(class="uk-visible", to="/contacto") #[span Domeyko 1835 - Metro Toesca]
                    img.uk-margin-small-left(uk-svg, width="20", src="/images/logos/santiago-metro-logo.svg") 
                a.uk-button.uk-button-large.primary.uk-margin(type="button", to="/contacto") #[span(uk-icon="phone")] +569 8439 2853

</template>


<style lang="scss" scoped>

    a{
        background-color: $main-color-accent;
		color: #fff;
        font-family: $heading-bold-font;
        font-size: $action-font-size;
        letter-spacing: $action-letter-spacing;
        &.secondary{
            background-color: $dark-color-accent;
        }
    }

</style>