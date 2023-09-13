<template>
    <Navbar />

    <main>
        <div class="flex justify-center items-start mt-2 mb-6">
            <div class="w-20 mx-5">
                <a :href="$t('cv_link')" target="_blank">
                    <img src="~/assets/images/icons/pdf.svg" alt="Download" class="h-10 mx-auto dark:invert">
                    <p class="text-sm text-center mt-1">CV</p>
                </a>
            </div>

            <div class="w-20 mx-5">
                <a :href="$t('cv_link_color')" target="_blank">
                    <img src="~/assets/images/icons/pdf.svg" alt="Download" class="h-10 mx-auto dark:invert">
                    <p class="text-sm text-center mt-1">CV<span class="text-xs">, {{ $t("with_colors") }}</span></p>
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

            <div class="w-full md:w-1/3 mt-20 md:mt-0 order-2 md:order-1">
                <ExperienceTimeline />
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
    const { t } = useI18n();
    useHead({ title: t("title_resume") });
</script>