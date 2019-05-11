<template>
    <div id="services-container">
        
        <div id="content">
            
            <header>
                <h1>Our</h1>
                <h2>Services</h2>
                <span class="underblock"></span>
            </header>
            
            <div id="services">
                <div id="service-item" v-for="item in serviceItems" :key="item.title">
                    <header>
                        <span></span>
                        <h1>{{ item.title }}</h1>
                    </header>
                    <p>{{ item.text }}</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    import Vue from 'vue';
    import Component from 'vue-class-component';

    class ServiceElement {

        title: string;
        text: string;

        constructor(title: string, text: string) {
            this.title = title;
            this.text = text;
        }
    }

    // @ts-ignore
    @Component({
        components: {}
    })
    export default class extends Vue {

        serviceItems: ServiceElement[] = [
            new ServiceElement(
                "Painting & Plastering", 
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"
            ),
            new ServiceElement(
                "Tiling", 
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"
            ),
            new ServiceElement("Landscaping", ""),
            new ServiceElement("Element4", ""),
            new ServiceElement("Element5", "")
        ];

    }

</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css?family=Lato:300,900|Raleway:700');

    div#services-container {
        min-height: 100vh;

        display: flex;
        justify-content: center;
        //align-items: center;

        #content {
            width: 80vw;

            > header {
                h1, h2 {
                    margin: 0 !important;
                    color: #4c4b4d;
                    font-family: 'Lato', sans-serif;
                }
                h1 {
                    font-size: 80px;
                }
                h2 {
                    font-size: 70px;
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

            #services {

                display: flex;
                justify-content: flex-start;
                align-items: baseline;
                flex-flow: wrap;
                margin-top: 50px;

                #service-item {
                    width: 360px;
                    max-width: 360px;
                    min-height: 220px;
                    
                    margin: 20px 25px;
                    padding: 20px 40px;
                    background-color: #fafafa;
                    border: 2px solid #f4f4f4;

                    overflow: hidden;

                    header {

                        display: flex;

                        span {
                            min-width: 100px;
                            height: 100px;
                            background-color: #ea6c5685;
                            display: block;
                        }
                        h1 {
                            margin-left: 40px;

                            color: #333;
                            font-size: 25px;
                            font-family: 'Raleway', sans-serif;
                            text-transform: uppercase
                        }
                    }

                    p {
                        color: #b1b1b1;
                        font-size: 20px;
                        font-family: 'Lato', sans-serif;
                        font-weight: 300;
                    }
                }
            }
        }
    }
</style>