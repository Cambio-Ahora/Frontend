<template lang="pug">

    section.uk-section
        .uk-container
            .uk-text-center
                h3 Ubícanos en: 
                a(href="https://www.google.com/maps/place/Domeyko+1835,+Santiago,+Regi%C3%B3n+Metropolitana/@-33.4554257,-70.6625575,17z/data=!3m1!4b1!4m5!3m4!1s0x9662c50455317b29:0x8937ddec9ae9581a!8m2!3d-33.4554302!4d-70.6603688", target="_blank").uk-button.uk-button-large.secondary.uk-margin(class="uk-visible", to="/contacto") #[span Domeyko 1835 - Metro Toesca]
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