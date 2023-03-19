<template>
    <Navbar />

    <main>
        <div class="flex justify-center items-start mt-2 mb-6">
            <div class="w-20 mx-5">
                <a :href="t('cv_link')">
                    <img :src="pdf_image" alt="Download" class="h-10 mx-auto dark:invert">
                    <p class="text-sm text-center mt-1">CV</p>
                </a>
            </div>

            <div class="w-20 mx-5">
                <a :href="t('cv_link_color')">
                    <img :src="pdf_image" alt="Download" class="h-10 mx-auto dark:invert">
                    <p class="text-sm text-center mt-1">CV<span class="text-xs">, {{ t("with_colors") }}</span></p>
                </a>
            </div>
        </div>

        <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-2/3 order-1 md:order-2 md:pl-4 [&>*]:mt-8 first:[&>*]:mt-0">
                <Education /> 
                <Certificates /> 
                <Work />
                <Skills />
                <Other />
            </div>

            <div class="w-full md:w-1/3 mt-5 md:mt-0 order-2 md:order-1">
                <ExperienceTimeline />
            </div>
        </div>
    </main>
</template>


<script setup lang="ts">
    import Navbar from "@/components/navbar/Navbar.vue";
    import ExperienceTimeline from "./sections/ExperienceTimeline.vue";
    import Education from "./sections/Education.vue";
    import Certificates from "./sections/Certificates.vue";
    import Skills from "./sections/Skills.vue";
    import Work from "./sections/Work.vue";
    import Other from "./sections/Other.vue";
    import { useI18n } from "vue-i18n";
    import locale from "@/locales/resume";

    import pdf_image from "@/assets/images/icons/pdf.svg";

    const { t } = useI18n({ messages: locale });
</script>