<template>
    <div id="services-container">
        
        <div id="content">
            
            <header>
                <h1>Our</h1>
                <h2>Services</h2>
                <span class="underblock"></span>
            </header>
            
            <div id="services-grid">
                <div id="services-row">
                    <div id="service-item" v-for="item in serviceItems" :key="item.title">
                        <div id="service-item-wrapper">
                            <header>
                                <span><component v-bind:is="item.icon" /></span>
                                <h1>{{ item.title }}</h1>
                            </header>
                            <p>{{ item.text }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">

    import Vue, { Component as VueComponent } from 'vue';
    import Component from 'vue-class-component';
    // @ts-ignore
    import BrushIcon from "@assets/icons/brush.svg";

    class ServiceElement {

        icon: VueComponent;
        title: string;
        text: string;
        

        constructor(obj: { icon: VueComponent, title: string, text: string }) {
            this.icon = obj.icon;
            this.title = obj.title;
            this.text = obj.text;
        }
    }

    @Component({
        components: {
            BrushIcon
        }
    })
    export default class extends Vue {

        serviceItems: ServiceElement[] = [
            new ServiceElement({
                icon: BrushIcon,
                title: "Painting & Plastering", 
                text: "Painting and plastering services to reinvigerate old spaces, repair abnormal damages or just to try somthing new."
            }),
            new ServiceElement({
                icon: BrushIcon,
                title: "Tiling", 
                text: "Both indoor and outdoor tiling services with a keen eye for detail."
            }),
            new ServiceElement({
                icon: BrushIcon,
                title: "Roof Works", 
                text: "Various roofwork services and solutions including but not limited to; gutter cleaning, leak repairs and signage installation."
            }),
            new ServiceElement({
                icon: BrushIcon,
                title: "Shop Fitting", 
                text: ""
            }),
            new ServiceElement({
                icon: BrushIcon,
                title: "Landscaping", 
                text: ""
            })
        ];

    }

</script>

<style lang="scss" scoped>

    @import url('https://fonts.googleapis.com/css?family=Lato:300,900|Raleway:700|Roboto:300,600');
    @import "@scss/main.scss";

    div#services-container {
        min-height: 100vh;

        display: flex;
        justify-content: center;

        #content {
            width: 80vw;
            font-size: 90px;

            @include breakTarget(ipad-pro, (max-width: width), portrait) {
                width: calc(80vw + 40px);
                font-size: 90px;
            }
            @include breakTarget(ipad, (max-width: width), portrait) {
                font-size: 80px;
            }
            @include breakTarget(iphone8-plus, (max-width: width), portrait) {
                font-size: 60px;
            }

            > header {
                padding-left: 20px;
                h1, h2 {
                    margin: 0 !important;
                    color: #4c4b4d;
                    font-family: 'Lato', sans-serif;
                }
                h1 {
                    font-size: 80%;
                }
                h2 {
                    font-size: 70%;
                    font-weight: 300;
                }
                // TODO: Move underblock into standard component
                .underblock {
                    background-color: #ea6c56;
                    width: 6%;
                    height: 11px;

                    margin-top: 20px;
                    display: block;
                }
            }

            #services-grid {

                margin: 50px auto;

                #services-row {
                    
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: flex-start;
                    align-content: flex-start;

                    #service-item {
                        
                        width: 400px;
                        height: 300px;

                        padding: 20px;

                        position: relative;
                        box-sizing: border-box;

                        flex-basis: 100%;
                        -ms-flex: auto;

                        
                        @media(min-width: 1055px) {
                            flex-basis: 50%;
                        }
                        @media(min-width: 1583px) {
                            flex-basis: 33.33%;
                        }
                        @media(min-width: 2111px) {
                            flex-basis: 25%;
                        }
                        @include breakTarget(ipad-pro, (max-width: width), portrait) {
                            flex-basis: 50%;
                        }
                        @include breakTarget(ipad, (max-width: width), portrait) {
                            flex-basis: 100%;
                            margin: 0 30px;
                        }
                        @include breakTarget(iphone8-plus, (max-width: width), portrait) {
                            flex-basis: 100%;
                            margin: 0;
                        }

                        #service-item-wrapper {
                            
                            width: 100%;
                            height: 100%;

                            position: relative;
                            box-sizing: border-box;
                            
                            padding: 5%;
                            border: 2px solid #f4f4f4;

                            background-color: #fafafa;

                            overflow: hidden;

                            header {

                                display: flex;

                                span {
                                    width: 100px;
                                    height: 100px;
                                    //background-color: #ea6c5685;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;

                                    svg {
                                        width: 70%;
                                    }

                                    @include breakTarget(iphone8-plus, (max-width: width), portrait) {
                                        min-width: 70px;
                                        height: 70px;
                                    }
                                }
                                h1 {
                                    margin-left: 40px;
                                    margin-top: 10px;

                                    color: #333;
                                    font-size: 25px;
                                    font-family: 'Raleway', sans-serif;
                                    text-transform: uppercase;

                                    @include breakTarget(iphone8-plus, (max-width: width), portrait) {
                                        margin-left: 20px;
                                        font-size: 20px;
                                    }
                                }
                            }

                            p {
                                color: #888;
                                font-size: 18px;
                                font-family: 'Roboto', sans-serif;
                                font-weight: 300;
                            }
                        }
                    }
                }
            }
        }
    }
</style>