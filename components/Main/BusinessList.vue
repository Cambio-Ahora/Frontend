<template lang="pug">

    section.uk-section
        .uk-container
            div.list-business(uk-scrollspy="cls: uk-animation-slide-bottom-small; target: >div>a; delay: 300;", class="uk-child-width-1-6@l uk-text-center uk-child-width-1-3@m uk-child-width-1-2 uk-flex uk-flex-middle", uk-grid)
                div(v-for="item in data.items")
                    a
                        img(:src="$prismic.asLink(item.logo)", width="150", :alt="item.logo.alt")

</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>

    .list-business{
        div{
            a{
                display: inline-block;
                img{
                    filter: gray; 
                    -webkit-filter: grayscale(1); 
                    filter: grayscale(1);
                    opacity: 0.5;
                    transition: all 200ms ease-in-out;
                    &:hover{
                        opacity: 1;
                        filter: grayscale(0);
                        -webkit-filter: grayscale(0); 
                        filter: grayscale(0%);
                    }
                }
            }
        }
    }

</style>