<template lang="pug">

    .uk-section
        .uk-section-large.main-container
            .uk-container
                div(uk-grid, class="uk-child-width-1-2@m")
                    div
                        div
                            h3.light.uk-heading-small  Preguntas Frecuentes
                            p(class="uk-width-large@m") Our customer support team are available to troubleshoot app errors and provide account recovery assistance.
                    div
                        div
                            ul.uk-list.uk-list-divider
                                li
                                    div
                                        h4.light.title-faq ¿Hacen visitas a domicilio?
                                        p  Currently, we only support iPhone. You can view your accounts on other devices using a block explorer. In the meantime, we’re working on making it possible to submit draft transactions through our web API for our customers’ benefit.
                                li
                                    div
                                        h4.light.title-faq ¿Cuáles son los costos de atención?
                                        p  Currently, we only support iPhone. You can view your accounts on other devices using a block explorer. In the meantime, we’re working on making it possible to submit draft transactions through our web API for our customers’ benefit.
                                li
                                    div
                                        h4.light.title-faq ¿Tienen un establecimiento físico para la atención?
                                        p  Currently, we only support iPhone. You can view your accounts on other devices using a block explorer. In the meantime, we’re working on making it possible to submit draft transactions through our web API for our customers’ benefit.

</template>

<style lang="scss" scoped>

    .main-container{
        background-color: $dark-color-accent;
    }

    .title-faq{
        letter-spacing: -0.02rem;
    }

</style>