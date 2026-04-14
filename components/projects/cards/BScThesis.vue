<template>
    <ProjectCard 
        :title="$t('bsc_thesis.thesis_title')"
        :subtitle="$t('bsc_thesis.title')"
        :image="image"
        :links="[ 
            { label: 'Repository1', url: 'https://github.com/NotXia/biomed-ext-summ' },
            { label: 'Repository2', url: 'https://github.com/NotXia/pubmed-summ' },
            { label: $t('thesis'), url: 'https://amslaurea.unibo.it/id/eprint/29686' },
            { label: $t('paper'), url: 'https://doi.org/10.1145/3766905' }
        ]">
        
        <!-- <p class="text-center">{{ $t("unibo_22-23") }}</p> -->
        <p>{{ $t("bsc_thesis.description") }}</p>
    </ProjectCard>
</template>

<script setup lang="ts">
    import image from "@/assets/images/projects/bsc-thesis.png";
</script>