<template>
    <ProjectCard 
        title="Tweet Analysis" :image="image"
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/tweet-analysis' }
        ]">
        
        <p class="text-center">{{ $t("unibo_22-23") }}</p>
        <p>{{ $t('tweet_analysis.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import image from "@/assets/images/projects/tweet-analysis.png";
</script>