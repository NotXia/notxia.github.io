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
    import ExperienceTimeline from "./ExperienceTimeline.vue";
    import Education from "./sections/Education.vue";
    import Certificates from "./sections/Certificates.vue";
    import Skills from "./sections/Skills.vue";
    import Work from "./sections/Work.vue";
    import Other from "./sections/Other.vue";
    import { useI18n } from "vue-i18n";

    import pdf_image from "@/assets/icons/pdf.svg";
    import cv_it from "@/assets/cv/it.pdf";
    import cv_en from "@/assets/cv/en.pdf";
    import cv_it_color from "@/assets/cv/it_color.pdf";
    import cv_en_color from "@/assets/cv/en_color.pdf";

    const { t } = useI18n({ messages: {
        "en": {
            "cv_link": cv_en,
            "cv_link_color": cv_en_color,
            "with_colors": "but colored"
        },
        "it": {
            "cv_link": cv_it,
            "cv_link_color": cv_it_color,
            "with_colors": "ma colorato"
        }
    } });
</script>