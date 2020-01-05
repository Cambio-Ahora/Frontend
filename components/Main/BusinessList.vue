<template lang="pug">

    section.uk-section
        .uk-container
            div.list-business(uk-scrollspy="cls: uk-animation-slide-bottom-small; target: >div>a; delay: 300;", class="uk-child-width-1-6@l uk-text-center uk-child-width-1-3@m uk-child-width-1-2 uk-flex uk-flex-middle", uk-grid)
                div
                    a
                        img(src="/images/logos/empresas/a.png", width="150", alt="alt")
                div
                    a
                        img(src="/images/logos/empresas/b.png", width="150", alt="alt")
                div
                    a
                        img(src="/images/logos/empresas/c.png", width="150", alt="alt")
                div
                    a
                        img(src="/images/logos/empresas/d.png", width="150", alt="alt")
                div
                    a
                        img(src="/images/logos/empresas/e.png", width="150", alt="alt")
                div
                    a
                        img(src="/images/logos/empresas/f.png", width="150", alt="alt")

</template>

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