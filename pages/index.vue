<template>
    <div class="relative z-10" >
        <Navbar />
    </div>

    <ScreenCenter>
    <main>
        <div class="block md:flex justify-center items-center">
            <div class="text-center md:text-left">
                <p class="text-2xl md:text-3xl font-semibold uppercase">{{ $t("i am a") }}</p>
                <p class="text-4xl md:text-5xl font-semibold uppercase">{{ $t("cs student") }}</p>
                <p class="text-xl lowercase">{{ $t("a very accurate description of me") }}</p>
            </div>

            <div class="w-fit mx-auto mt-5 md:m-0 md:ml-10">
                <RandomSomething />
            </div>
        </div>
    </main>
    </ScreenCenter>
</template>

<script setup lang="ts">
    const { t } = useI18n();
    useHead({ title: t("title_home") });
</script>