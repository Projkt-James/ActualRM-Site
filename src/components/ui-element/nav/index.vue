<template>
    <nav>
        <div class="left"></div>
        <div class="right">
            <ul>
                <li>Company</li>
                <li>Our Services</li>
                <li>Partners</li>
            </ul>
            <ContactButton></ContactButton>
        </div>
    </nav>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

import ContactButton from "~/components/ui-element/buttons/wavey/index.vue";

@Component({
    components: {
        ContactButton
    }
})
export default class extends Vue {
    
}
</script>

<style lang="scss">
    
    @import "../../../scss/main.scss";

    nav {
        z-index: 99;
        width: 100%;
        height: 100px;
        
        display: flex;
        justify-content: space-between;
        position: fixed;

        background: white;

        .left {
            width: 300px;
            height: 100%;
            padding-left: 100px;

            background: #f3f3f3;
        }

        .right {
            height: 100%;
            padding-right: 100px;

            display: flex;
            align-items: center;

            ul {
                margin-right: 50px;
                padding-top: 5px;
                list-style: none;

                li {
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

            // TODO button
        }
    }

</style>

