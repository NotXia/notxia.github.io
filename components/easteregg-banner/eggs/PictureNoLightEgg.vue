<template>
<ClientOnly>
    <div class="flex text-sm">
        <div class="flex items-center justify-center">
            <div class="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img src="~/assets/images/moon.png" alt="" class="h-full w-full" />
            </div>
        </div>

        <div class="flex-1 ml-2">
            <p class="font-bold text-base">{{ $t("dark.title") }}</p>
            <p v-if="!light_unlocked">{{ $t("dark.description") }}</p>
            <p v-if="light_unlocked">{{ $t("dark_either.description") }}</p>
        </div>
    </div>
</ClientOnly>
</template>

<script setup lang="ts">
    const light_unlocked = ref(false);

    onMounted(() => {
        light_unlocked.value = getFoundEasterEggs().includes("picture-bright");
    });
</script>