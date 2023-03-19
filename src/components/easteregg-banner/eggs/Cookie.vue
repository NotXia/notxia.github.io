<template>

    <div class="flex justify-center text-sm">
        <div class="flex items-center justify-center">
            <div class="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img :src="image" alt="" class="h-full w-full" />
            </div>
        </div>

        <div class="flex-1 ml-2">
            <p class="font-bold text-base">{{ t("cookie.title") }}</p>
            <p>{{ t("cookie.description") }}</p>
        </div>
    </div>

</template>

<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import image from "@/assets/images/cookie.png";
    import locale from "@/locales/easteregg";
    
    const { t } = useI18n({ messages: locale });
</script>