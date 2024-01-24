<template>
    <ProjectCard 
        :title="$t('bsc_thesis.title')"
        :subtitle="$t('bsc_thesis.thesis_title')"
        :image="image"
        :links="[ 
            { label: 'Repository1', url: 'https://github.com/NotXia/biomed-ext-summ' },
            { label: 'Repository2', url: 'https://github.com/NotXia/pubmed-summ' },
            { label: $t('thesis'), url: 'https://amslaurea.unibo.it/id/eprint/29686' }
        ]">
        
        <p class="text-center">{{ $t("unibo_22-23") }}</p>
        <p>{{ $t("bsc_thesis.description") }}</p>
    </ProjectCard>
</template>

<script setup lang="ts">
    import image from "@/assets/images/projects/bsc-thesis.png";
</script>