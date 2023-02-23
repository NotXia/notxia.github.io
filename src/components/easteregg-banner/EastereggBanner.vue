<template>
    <div class="fixed top-0 left-0 w-full pointer-events-none">

        <div :class="`border rounded-sm p-3 px-5 my-2 mx-auto w-fit max-w-xs md:max-w-md pointer-events-auto 
                    bg-slate-200/90 border-slate-700 dark:bg-slate-800/90 dark:border-slate-400
                      transition-opacity ${show_banner ? 'opacity-100 duration-300' : 'opacity-0 duration-200'}`"
            @click="dismiss">
            
            <div class="flex text-sm">
                <div class="flex-1">
                    <CookieEgg v-if="easteregg === 'cookie'" />
                    <FutureEgg v-if="easteregg === 'future'" />
                    
                    <div class="mt-1 text-center">
                        <p v-if="found_eastereggs != total_eastereggs">{{ found_eastereggs }}/{{ total_eastereggs }} {{ t("easter eggs found") }}</p>
                        <p v-if="found_eastereggs === total_eastereggs">{{ t("all easter eggs found") }}</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { useI18n } from "vue-i18n";
    import { getFoundEasterEggsCount, getTotalEasterEggsCount } from "@/utilities/easteregg_handler";
    import CookieEgg from "./eggs/Cookie.vue";
    import FutureEgg from "./eggs/Future.vue";

    const show_banner = ref(false);
    const easteregg = ref("");

    const total_eastereggs = ref(getTotalEasterEggsCount());
    const found_eastereggs = ref(getFoundEasterEggsCount());

    const { t } = useI18n({ messages: {
        "en": {
            "easter eggs found": "easter eggs found",
            "all easter eggs found": "You found all the easter eggs 🥚"
        },
        "it": {
            "easter eggs found": "easter egg trovati",
            "all easter eggs found": "Hai trovato tutti gli easter egg 🥚"
        }
    } });


    function show(easteregg_name:string) {
        easteregg.value = easteregg_name;
        found_eastereggs.value = getFoundEasterEggsCount();
        console.log(getFoundEasterEggsCount())
        show_banner.value = true;

        setTimeout(() => {
            dismiss();
        }, 8000);
    }

    function dismiss() {
        show_banner.value = false;
    }


    defineExpose({
        show
    })
</script>