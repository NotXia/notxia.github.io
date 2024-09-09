<template>
    <Navbar />

    <main>
        <h1 class="text-5xl font-bold text-center mb-5">{{ $t("projects") }}</h1>

        <div class="flex justify-center items-start">
            <div>
                <a href="https://github.com/NotXia" class="rounded-full p-1 mx-1 md:inline block text-center">
                    <img src="~/assets/images/icons/github.svg" alt="Github" class="h-5 dark:invert inline" /> github.com/NotXia
                </a>
    
                <a href="https://huggingface.co/NotXia" class="rounded-full p-1 mx-1 md:inline block text-center">
                    <img src="~/assets/images/icons/huggingface.svg" alt="Github" class="h-7 inline" /> huggingface.co/NotXia
                </a>
            </div>
        </div>

        
        <div class="grid grid-flow-row-dense grid-cols-12 m-auto justify-center [&>*]:px-5 [&>*]:py-5">
            <NotXiaGithubio             class="lg:col-span-8 row-span-1 col-span-12" />
            <NNFromScratch              class="lg:col-span-4 row-span-1 col-span-12" />
            <TablutPlayer               class="lg:col-span-4 row-span-1 col-span-12" />
            <BScThesis                  class="lg:col-span-8 row-span-1 col-span-12" />
            <WaveMap                    class="lg:col-span-4 lg:row-span-2 col-span-12" />
            <Wirefilter                 class="lg:col-span-4 row-span-1 col-span-12" />
            <TweetAnalysis              class="lg:col-span-8 row-span-1 col-span-12" />
            <AnimalHouse                class="lg:col-span-6 row-span-1 col-span-12" />
            <PandOSplus                 class="lg:col-span-4 row-span-1 col-span-12" />
            <Imaging                    class="lg:col-span-6 row-span-1 col-span-12" />
            <MNKGame                    class="lg:col-span-4 row-span-1 col-span-12" />
            <Platform                   class="lg:col-span-8 row-span-1 col-span-12" />
            <PathfindingVisualizer      class="lg:col-span-6 row-span-1 col-span-12" />
            <SortingVisualizer          class="lg:col-span-6 row-span-1 col-span-12" />
        </div>
    </main>
</template>

<script setup lang="ts">
    const { t } = useI18n();
    useHead({ title: t("title_projects") });
</script>