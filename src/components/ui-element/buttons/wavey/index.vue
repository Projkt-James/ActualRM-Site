<template>
    <button>
        {{ text }}
    </button>
</template>

<script lang="ts">

import { Component, Vue} from "vue-property-decorator";

    @Component({
        props: {
            text: String
        },
        components: {}
    })
    export default class extends Vue {
    }

</script>

<style lang="scss" scoped>

    @import "~/scss/main.scss";

    button {
        padding: 14px 24px;
        border: 2px solid $actual-orange;
        border-radius: 5px;
        background: transparent;

        color: $actual-orange;
        font-size: 0.8em;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        text-transform: uppercase;
        outline: none;
    }

</style>