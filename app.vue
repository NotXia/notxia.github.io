<template>

    <div v-if="init" 
        class="min-h-screen h-full"
         style="font-family: 'Comfortaa'; overflow-x: hidden; ">
        
        <!-- Prevents scrollbar shift -->
         <div style="margin-right: calc(-1 * (100vw - 100%));">
            <div class="container mx-auto pb-8 px-3 md:px-8 min-h-screen w-screen flex flex-col">
                <NuxtLayout>
                    <NuxtPage/>
                </NuxtLayout>
            </div>
        </div>
        
        <Cookie />
        <EastereggBanner ref="easteregg" />
    </div>
    
</template>

<script setup>
    const { locale } = useI18n();
    const easteregg = ref();
    const init = ref(false);

    onMounted(() => {
        applyTheme();

        document.addEventListener("easteregg", (e) => {
            // @ts-ignore
            easteregg.value.show(e.detail);
        });

        init.value = true;
    });

    useHead({ 
        htmlAttrs: { lang: locale.value },
        bodyAttrs: { class: "dark:bg-gray-900 dark:text-slate-50 bg-gray-100 text-gray-900"}
    });
    watch(locale, (new_locale) => {
        useHead({ htmlAttrs: { lang: new_locale } });
    })
</script>