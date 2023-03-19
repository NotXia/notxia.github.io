<template>
    <div>
        <h2 class="text-4xl font-bold tracking-wide">{{ t("education") }}</h2>

        <ActivityParagraph :title="t('bs in cs')" :subtitle="t('unibo')" :right_text="`2020 - ${t('present')}`">
        </ActivityParagraph>

        <ActivityParagraph :title="t('diploma')" :subtitle="t('aldini')" right_text="2015 - 2020">
            {{ t("final degree") }}: 100/100 {{ t("with honors") }}
        </ActivityParagraph>
    </div>
</template>


<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import ActivityParagraph from "../components/ActivityParagraph.vue";
    import locale from "@/locales/resume";

    const { t } = useI18n({ messages: locale });
</script>