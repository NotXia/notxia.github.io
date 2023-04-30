<template>
    <ProjectCard 
        title="Pathfinding visualizer" :image="image"
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/pathfinding-visualizer' },
            { label: 'Demo', url: 'https://notxia.github.io/pathfinding-visualizer/' }
        ]">

        {{ $t('pathfinding_visualizer.description') }}
    </ProjectCard>
</template>


<script setup lang="ts">
    import image from "@/assets/images/projects/pathfinding-visualizer.png";
</script>