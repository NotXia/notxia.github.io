<template>
    <Navbar />

    <main>
        <h1 class="text-5xl font-bold text-center mb-5">{{ $t("projects") }}</h1>
        
        <h2 class="text-3xl text-center mt-10 mb-3">{{ $t("wip") }}</h2>
        <div class="[&>*]:my-14 first:[&>*]:mt-8">
            <BScThesis />
            <NotXiaGithubio />
        </div>


        <h2 class="text-3xl text-center mt-10 mb-3">{{ $t("completed") }}</h2>
        <div class="[&>*]:my-14 first:[&>*]:mt-8">
            <WaveMap />
            <Wirefilter />
            <TweetAnalysis />
            <AnimalHouse />
            <PandOSplus />
            <Imaging />
            <MNKGame />
            <Platform />
            <PathfindingVisualizer />
            <SortingVisualizer />
        </div>
    </main>
</template>

<script setup lang="ts">
    const { t } = useI18n();
    useHead({ title: t("title_projects") });
</script>