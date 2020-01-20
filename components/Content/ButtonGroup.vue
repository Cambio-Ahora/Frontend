<template lang="pug">

    section.uk-section
        .uk-container
            .uk-text-center
                h3 Ubícanos en: 
                button.uk-button.uk-button-large.secondary(class="uk-visible", @click="$modal.show('modal-contact')") #[span Domeyko 1835 - Metro Toesca]
                    img.uk-margin-small-left(uk-svg, width="20", src="/images/logos/santiago-metro-logo.svg") 
                button.uk-button.uk-button-large(class="uk-visible", @click="$modal.show('modal-contact')") Monseñor Félix Cabrera 14, Of. 43 - Metro Pedro de Valdivia
                    img.uk-margin-small-left(uk-svg, width="20", src="/images/logos/santiago-metro-logo.svg") 
                button.uk-button.uk-button-large.secondary(type="button", @click="$modal.show('modal-contact')") #[span(uk-icon="phone")] +569 8439 2853

</template>


<style lang="scss" scoped>

    button{
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