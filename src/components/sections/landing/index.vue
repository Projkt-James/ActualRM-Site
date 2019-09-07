<template>
    <div class="container">
        <div class="overlay">
            <h1>Your <span class="light">Repairs</span> <br/>partner</h1>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    // @ts-ignore
    @Component({
        components: {}
    })
    export default class extends Vue {
    }
</script>

<style lang="scss" scoped>

    @import "../../../scss/main.scss";

    div.container {
        width: 100%;
        height: 100vh;
        
        background-image: url("../../../assets/bg.png");

        position: relative;

        .overlay {
            width: 100%;
            height: 100%;

            background: $actual-orange;
            opacity: 0.94;

            padding: 0 100px;
        }

        h1 {
            position: absolute;
            bottom: 12%;

            color: white;
            font-family: 'Open Sans';
            font-size: 70px;
            font-weight: 600;
            text-transform: uppercase;

            span.light {
                font-weight: 300;
            }
        }
    }
</style>