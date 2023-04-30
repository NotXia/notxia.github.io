<template>
<ClientOnly>
    <div v-if="show_banner" class="fixed top-0 left-0 w-full pointer-events-none z-50">

        <div :class="`border rounded-sm mx-auto w-fit max-w-xs md:max-w-md pointer-events-auto
                    bg-slate-200/90 border-slate-700 dark:bg-slate-800/90 dark:border-slate-400
                      transition-opacity ${show_banner ? 'opacity-100 duration-300 p-3 px-5 my-2' : 'opacity-0 duration-200'}`"
            @click="dismiss">
            
            <div class="flex text-sm">
                <div class="flex-1">
                    <CookieEgg v-if="easteregg === 'cookie'" />
                    <FutureEgg v-if="easteregg === 'future'" />
                    <SomethingEgg v-if="easteregg === 'change-something'" />
                    <PictureBrightEgg v-if="easteregg === 'picture-bright'" />
                    <PictureNoLightEgg v-if="easteregg === 'picture-nolights'" />
                    
                    <div class="mt-1 text-center">
                        <p v-if="found_eastereggs != total_eastereggs">{{ found_eastereggs }}/{{ total_eastereggs }} {{ $t("easter eggs found") }}</p>
                        <p v-if="found_eastereggs === total_eastereggs">{{ $t("all easter eggs found") }}</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</ClientOnly>
</template>

<script setup lang="ts">
    const show_banner = ref(false);
    const easteregg = ref("");
    const total_eastereggs = ref(getTotalEasterEggsCount());
    const found_eastereggs = ref(0);


    onMounted(() => {
        found_eastereggs.value = getFoundEasterEggsCount();
    })


    let current_dismiss_timeout:NodeJS.Timeout|null = null;

    function show(easteregg_name:string) {
        easteregg.value = easteregg_name;
        found_eastereggs.value = getFoundEasterEggsCount();
        show_banner.value = true;
        
        if (current_dismiss_timeout) { clearTimeout(current_dismiss_timeout) }
        current_dismiss_timeout = setTimeout(() => {
            dismiss();
        }, 7000);
    }

    function dismiss() {
        show_banner.value = false;
    }


    defineExpose({
        show
    })
</script>