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
    import image from "@/assets/images/moon.png";
    import { getFoundEasterEggs } from "@/utilities/easteregg_handler";

    let locale = {
        "en": {
            "title": "It's dark",
            "description": "I don't like the dark"
        },
        "it": {
            "title": "È buio",
            "description": "Non mi piace il buio"
        }
    };

    if (getFoundEasterEggs().includes("picture-bright")) {
        locale["en"]["description"] = "I don't like the dark either"
        locale["it"]["description"] = "Non mi piace nemmeno il buio"
    }

    const { t } = useI18n({ messages: locale });
</script>