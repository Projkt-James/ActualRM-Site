<template>
    <nav>
        <div class="pull-left">
            <ActualLogo />
        </div>
        <div class="pull-right">
            <ul>
                <li v-scroll-to="'#company-container'">Company</li>
                <li v-scroll-to="{
                    el: '#services-container',
                    offset: -125
                }">
                    Our Services
                </li>
            </ul>
            <ContactButton text="Contact Us" v-scroll-to="'#contact-container'"></ContactButton>
        </div>
    </nav>
</template>

<script lang="ts">

    import { Component, Vue } from "vue-property-decorator";
    // @ts-ignore
    import ActualLogo from "../../../assets/logo.svg";

    import ContactButton from "~/components/ui-element/buttons/wavey/index.vue";

    @Component({
        components: {
            ContactButton,
            ActualLogo
        }
    })
    export default class extends Vue {}

</script>

<style lang="scss" scoped>

    @import "@/scss/main.scss";

    nav {
        user-select: none;
        z-index: 99;
        width: 100%;
        height: 100px;
        
        display: flex;
        justify-content: space-between;
        position: fixed;

        background: white;

        @include breakTarget(iphone8-plus, (max-width: width), portrait) {
            height: 70px;
        }

        .pull-left {
            width: 250px;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            #ActualLogo {
                width: 100%;
                max-height: 60%;
                
                #Roof, #ctual {
                    fill: #333;
                }
                #A {
                    fill: $actual-orange;
                }
                
            }
        }

        .pull-right {
            height: 100%;
            padding-right: 5%;

            display: flex;
            align-items: center;

            @include breakTarget(ipad, (max-width: width), portrait) {
            //& { padding: 0 10px; }
            }

            ul {
                margin-right: 50px;
                padding-top: 5px;
                list-style: none;

                li {
                    user-select: none;
                    padding: 0 20px;
                    display: inline;

                    color: #4c4b4d;
                    font-size: 0.9em;
                    font-weight: 600;
                    font-family: 'Open Sans', sans-serif;
                    text-transform: uppercase;

                    &:hover {
                        cursor: pointer;
                        color: $actual-orange;
                    }
                }
            }
        }
    }

</style>

