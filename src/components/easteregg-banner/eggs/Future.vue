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
    import image from "@/assets/images/future.png";

    const { t } = useI18n({ messages: {
        "en": {
            "title": "Wonderful future",
            "description": "What will happen?"
        },
        "it": {
            "title": "Che bello il futuro",
            "description": "Cosa ci riserverà?"
        }
    } });
</script>