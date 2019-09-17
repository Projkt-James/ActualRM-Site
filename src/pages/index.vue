<template>
    <div>
        <Navbar />
        <LandingSection />
        <CompanySection />
        <ServicesSection />
        <ContactSection />
    </div>
</template>

<script lang="ts">

    import { Component, Vue } from "vue-property-decorator";

    // Sections Components
    import Navbar from "~/components/ui-element/nav/index.vue";
    import LandingSection from "~/components/sections/landing/index.vue";
    import CompanySection from "~/components/sections/company/index.vue";
    import ServicesSection from "~/components/sections/services/index.vue";
    import PartnersSection from "~/components/sections/partners/index.vue";
    import ContactSection from "~/components/sections/contact/index.vue";

    @Component({
        name: 'app',
        components: {
            Navbar,
            LandingSection,
            CompanySection,
            ServicesSection,
            PartnersSection,
            ContactSection
        }
    })
    export default class Index extends Vue {}

</script>

<style lang="scss">

    body {
        margin: 0;
    }

</style>
