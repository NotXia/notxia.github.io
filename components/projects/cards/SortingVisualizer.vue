<template>
    <ProjectCard 
        title="Sorting visualizer" :image="image"
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/sorting-visualizer' },
            { label: 'Demo', url: 'https://notxia.github.io/sorting-visualizer/' }
        ]">
              
        {{ $t('sort_visualizer.description') }}
    </ProjectCard>
</template>


<script setup lang="ts">
    import image from "@/assets/images/projects/sorting-visualizer.png";
</script>