<template>
    <ProjectCard 
        title="Platform game" :image="image"
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/platform-game' }
        ]">
        
        <p class="text-center">{{ $t("unibo_20-21") }}</p>
        <p>{{ $t('platform.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import image from "@/assets/images/projects/platform.png";
</script>