<template>
    <div class="contact-container">
        
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
                    <div></div>
                    <button></button>
                </div>
            </section>

            
        </div>
        <div id="map-placeholder"></div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        components: {}
    })
    export default class extends Vue {}
</script>

<style lang="scss" scoped>

    @import "../../../scss/main.scss";

    .contact-container {

        width: 100%;
        min-height: calc(100vh - 100px);

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        #content {
            position: relative;
            width: 70%;

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

                    div {
                        display: block;
                        flex-grow: 1;
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
        }

        #map-placeholder {
            width: 100%;
            height: 400px;

            background-color: #f3f3f3;

            display: block;
        }
    }
</style>