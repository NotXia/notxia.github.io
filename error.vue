<template>

    <div
        class="bg-gray-100 text-gray-900 min-h-screen h-full
                dark:bg-gray-900 dark:text-slate-50 flex justify-center items-center"
         style="font-family: 'Comfortaa'; overflow-x: hidden; ">
        
        <div>
            <p class="text-2xl md:text-4xl text-center">{{ $t("wrong directions") }}</p>
            
            <img src="~/assets/images/no-turn-street.png" class="mx-auto my-2" alt="">

            <NuxtLink :to="localePath('/')"
                        class="block py-2 text-center text-xl hover:underline border border-slate-700 text-gray-700 dark:text-slate-50 dark:border-slate-200">
                {{ $t("back to home") }}
            </NuxtLink>
        </div>
    </div>

</template>

<script setup lang="ts">
    const localePath = useLocalePath();

    onMounted(() => {
        applyTheme();
    });
</script>