<template>
    <ProjectCard 
        title="Natural example-based XAI" :image="image"
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/natural-examples-xai' }
        ]">
        
        <p>{{ $t('natural_examples.description') }}</p>
    </ProjectCard>
</template>

<script setup lang="ts">
    import image from "@/assets/images/projects/natural_example.png";
</script>