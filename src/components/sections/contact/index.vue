<template>
    <div id="contact-container">
        
        <div id="content">
            <section class="contact">
                <header>Contact</header>
                <ul>
                    <li>Phone: <span>+6149617511</span></li>
                    <li>Email: <span>mark@actualrepairs.com.au</span></li>
                </ul>
            </section>

            <section class="in-touch">
                <header>Get In Touch</header>

                <!-- TODO: Break this out to component -->
                <div id="form-panel">
                    <div>
                        <MatTextInput 
                            id="name"
                            label="Name"
                            spellcheck="off"
                        />
                        <MatTextInput 
                            id="email" 
                            label="Email"
                            spellcheck="off"
                        />
                    </div>
                    <button></button>
                </div>
            </section>

            
        </div>

        <!-- TODO: Break this out to wrapper component -->
        <googlemaps-map
            id="map"
            :center="{lat: -25.363, lng: 131.044}"
            :zoom="7"
            :options="mapOptions"
        />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    import MapStyle from '~/map-style.js';
    import MatTextInput from "~/components/ui-element/input/mat-textinput.vue";

    @Component({
        components: {
            MatTextInput
        }
    })
    export default class extends Vue {

        mapOptions: any = {
            disableDefaultUI: true,
            styles: MapStyle
        };
        styles: any = MapStyle;

    }
</script>

<style lang="scss" scoped>

    @import "../../../scss/main.scss";

    #contact-container {

        width: 100%;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        #content {
            position: relative;
            width: 70%;
            margin-bottom: 10vh;

            display: flex;
            justify-content: center;


            section.contact, section.in-touch {
                width: 50%;
                height: 100%;
                display: block;

                header {
                    margin-bottom: 20%;

                    color: #bfbfbf;
                    font-family: 'Open Sans', sans-serif;
                    font-size: 18px;
                    font-weight: 600;
                    text-transform: uppercase;
                }
            }

            section.contact {
                ul {
                    list-style-type: none;
                    padding: 0;

                    li {
                        padding: 5px 0;
                        color: #4f4f4f;
                        font-size: 18px;
                        font-family: 'Lato', sans-serif;
                        span {
                            padding-left: 10px;
                            color: $actual-orange;
                        }
                    }
                }
            }

            section.in-touch {
                position: relative;

                #form-panel {
                    width: 100%;
                    height: 350px;

                    background: white;
                    position: absolute;

                    display: flex;

                    -webkit-box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.15);
                    -moz-box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.15);
                    box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.15);

                    > div {
                        padding: 50px;
                        
                        display: flex;
                        justify-content: space-between;
                        flex-grow: 1;

                        .matTextInput {
                            width: 45%;
                        }
                    }

                    button {
                        width: 50px;
                        height: 100%;

                        background-color: $actual-orange;
                        border: none;
                        outline: none;
                    }
                }
            }

            @include breakTarget(ipad-pro, (max-width: width), portrait) {
                margin-bottom: 20vh;
                flex-direction: column;

                section.contact, section.in-touch {
                    width: 100%;

                    header {
                        margin-bottom: 10%;
                    }
                }
            }

            @include breakTarget(ipad, (max-width: width), portrait) {

                margin-bottom: 30vh;

                

                section.contact ul {
                    margin-bottom: 20%;
                }
            }

            @include breakTarget(iphone8-plus, (max-width: width), portrait) {
                width: 80%;

                section.in-touch {
                    #form-panel {

                        width: 110%;
                        margin-left: -5%;

                        flex-direction: column;

                        > div .matTextInput {
                            width: 100%;
                        }

                        button {
                            width: 100%;
                            height: 50px;
                        }
                    }
                }
            }
        }

        #map {
            width: 100%;
            height: 400px;

            z-index: -1;
        }
    }
</style>