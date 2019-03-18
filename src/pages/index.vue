<template>
    <div>
        <LandingSection />
        <CompanySection />
        <ServicesSection />
        <PartnersSection />
        <ContactSection />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// Sections Components
import LandingSection from "~/components/sections/landing/index.vue";
import CompanySection from "~/components/sections/company/index.vue";
import ServicesSection from "~/components/sections/services/index.vue";
import PartnersSection from "~/components/sections/partners/index.vue";
import ContactSection from "~/components/sections/contact/index.vue";

@Component({
    name: 'app',
    components: {
        LandingSection,
        CompanySection,
        ServicesSection,
        PartnersSection,
        ContactSection
    }
})
// @ts-ignore
export default class Index extends Vue {

}
</script>

<style lang="scss">

    body {
        margin: 0;
    }

</style>
