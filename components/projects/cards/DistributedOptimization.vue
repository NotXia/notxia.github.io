<template>
    <ProjectCard 
        title="Distributed Optimization" :image="image" image_classes="w-1/2"
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/distributed-optimization' }
        ]">
        
        <p>{{ $t('distributed_optimization.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import image from "@/assets/images/projects/distributed_optmization.png";
</script>