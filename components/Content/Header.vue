<template lang="pug">

    section
        .uk-container
            section.uk-section
                h2.uk-heading-small(class="uk-width-large@m") Depresión of clients that I don't know 
                p(class="uk-width-large@m") Trabajamos junto al paciente para lograr un cambio clínico significativo hasta que mejore sus problemas.
        img.uk-margin-large-bottom(src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1967&q=80", alt="alt")
        img.points-decorator(class="uk-visible@m", src="/images/points-2.svg", alt="alt")


</template>

<style lang="scss" scoped>

    .points-decorator{
        position: absolute;
        transform: translate(-50%,-50%);
        top: 25%;
        left: 5%;
        transition: all 200ms ease-in-out;
    }

     

    @media(max-width: 1600px){
        .points-decorator{
            left: 0%; 
        }
    }

    @media(max-width: 1400px){
        .points-decorator{
            width: 120px;
            left: -1%;
            top: 25%; 
        }
    }

</style>