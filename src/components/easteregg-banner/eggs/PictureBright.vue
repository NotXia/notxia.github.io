<template>

    <div class="flex text-sm">
        <div class="flex items-center justify-center">
            <div class="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img :src="image" alt="" class="h-full w-full" />
            </div>
        </div>

        <div class="flex-1 ml-2">
            <p class="font-bold text-base">{{ t("title") }}</p>
            <p>{{ t("description") }}</p>
        </div>
    </div>
    
</template>

<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import image from "@/assets/images/sun.png";
    import { getFoundEasterEggs } from "@/utilities/easteregg_handler";

    let locale = {
        "en": {
            "title": "It's bright",
            "description": "I don't like the light"
        },
        "it": {
            "title": "È luminoso",
            "description": "Non mi piace la luce"
        }
    };

    if (getFoundEasterEggs().includes("picture-nolights")) {
        locale["en"]["description"] = "I don't like the light either"
        locale["it"]["description"] = "Non mi piace nemmeno la luce"
    }

    const { t } = useI18n({ messages: locale });
</script>