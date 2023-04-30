<template>
<ClientOnly>
    <div class="flex text-sm">
        <div class="flex items-center justify-center">
            <div class="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img src="~/assets/images/sun.png" alt="" class="h-full w-full" />
            </div>
        </div>

        <div class="flex-1 ml-2">
            <p class="font-bold text-base">{{ $t("bright.title") }}</p>
            <p v-if="!dark_unlocked">{{ $t("bright.description") }}</p>
            <p v-if="dark_unlocked">{{ $t("bright_either.description") }}</p>
        </div>
    </div>
</ClientOnly>
</template>

<script setup lang="ts">
    const dark_unlocked = ref(false);

    onMounted(() => {
        dark_unlocked.value = getFoundEasterEggs().includes("picture-nolights");
    });
</script>