<template>
    <div class="bg-gray-100 text-gray-900 min-h-screen h-full
                dark:bg-gray-900 dark:text-slate-50"
         style="font-family: 'Comfortaa'; overflow-x: hidden; ">
        
        <!-- Prevents scrollbar shift -->
         <div style="margin-right: calc(-1 * (100vw - 100%));">
            <div class="container mx-auto pb-8 px-3 md:px-8 min-h-screen w-screen flex flex-col">
                <RouterView />
            </div>
        </div>

        <Cookie />
        <EastereggBanner ref="easteregg" />
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref, watch } from "vue";
    import { RouterView } from "vue-router";
    import { applyTheme } from "./utilities/theme_handler";
    import Cookie from "@/components/cookie/Cookie.vue";
    import EastereggBanner from "@/components/easteregg-banner/EastereggBanner.vue";
    import { useRoute } from 'vue-router'
    import { useI18n } from "vue-i18n";

    const { t, locale } = useI18n({ messages: {
        "en": {
            "title_home": "Hello",
            "title_about": "About",
            "title_projects": "Projects",
            "title_resume": "Résumé",
            "title_contacts": "Say hello",

            "log_hello": "Hello 🐡"
        },
        "it": {
            "title_home": "Ciao",
            "title_about": "Chi sono",
            "title_projects": "Progetti",
            "title_resume": "CV",
            "title_contacts": "Salutami",

            "log_hello": "Ciao 🐡"
        }
    } });

    const route = useRoute()
    const easteregg = ref();

    onMounted(() => {
        applyTheme();

        document.addEventListener("easteregg", (e) => {
            // @ts-ignore
            easteregg.value.show(e.detail);
        });

        console.log(t("log_hello"));
    });

    // Title handling
    watch([ () => route.params, locale ], () => {
        document.title = t(`title_${route.name as string}`);
    });
</script>