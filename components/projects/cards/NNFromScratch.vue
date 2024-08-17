<template>
    <ProjectCard 
        :title="$t('nn_scratch.title')" :image="image" image_classes="dark:invert"
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/nn-from-scratch' }
        ]">
        
        <p>{{ $t('nn_scratch.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import image from "@/assets/images/projects/neural_network.png";
</script>