<template>
    <div 
        v-bind:active="active"
        v-bind:pushLabel="pushLabel"
        class="matTextInput"
    >
        <input 
            :id="id" 
            type="text" 
            :spellcheck="spellcheck"

            ref="textInput"
            v-on="inputHandlers"
        />
        <label :for="id">{{ label }}</label>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    props: {
        id: String,
        label: String,
        spellcheck: String
    },
    components: {}
})
export default class MatTextInput extends Vue {

    active: boolean = false;
    pushLabel: boolean = false;

    data(): object {
        const context = this;
        return {
            inputHandlers: {
                focus: context.focusInputHandler,
                blur: context.blurInputHandler
            }
        };
    }

    focusInputHandler(): void {
        this.active = true;
        this.pushLabel = true;
    }

    blurInputHandler(): void {
        this.active = false;
        if (this.getInputLength() <= 0) this.pushLabel = false;
    }

    getInputLength(): number {
        return (<HTMLInputElement>this.$refs.textInput).value.length;
    }
}
</script>

<style lang="scss" scoped>

    @import "@scss/main.scss";

    $base-colour: #bfbfbf;

    div {

        width: 100%;
        display: block;
        position: relative;

        > input, > label {
            transition: transform 0.3s, border-color 0.3s, color 0.3s ease-out;
        }
        > input {
            width: 100%;
            height: 2.5rem;

            margin: 0;
            padding: 0;

            background: transparent;
            border: none;
            border-bottom: 1px solid $base-colour;
            border-radius: 0;
            outline: none;

            color: black;
            font-size: 105%;
        }

        > label {

            cursor: text;

            position: absolute;
            top: 0;
            left: 0;

            color: $base-colour;
            font-family: 'Roboto', sans-serif;
            font-size: 100%;
            font-weight: 300;

            transform-origin: 0% 100%;
            transform: translateY(70%);
        }

        &[active="true"] {
            > input {
                border-color: $actual-orange;
            }
            > label {
                color: $actual-orange;
            }
        }

        &[pushLabel="true"] {
             > label {
                transform: translateY(-70%) scale(0.8);
            }
        }
    }
</style>