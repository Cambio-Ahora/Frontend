<template lang="pug">

    section.uk-section
        .uk-container
            .uk-text-center
                button.uk-button.uk-button-large(class="uk-visible@s") Agenda tu hora ya!
                button.uk-button.uk-button-large.uk-margin-bottom(class="uk-hidden@s") Agenda tu hora ya!
                button.uk-button.uk-button-large.secondary(type="button", @click="$modal.show('modal-contact')") #[span(uk-icon="phone")] +569 4044 4172

</template>

<script>
export default {
    methods: {
        openModal(){
           
        }
    }
}
</script>

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