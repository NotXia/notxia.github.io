<template>
    <ProjectCard 
        title="Street Anomaly Segmentation" :image="image" image_classes=""
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/street-anomaly-segmentation' }
        ]">
        
        <p>{{ $t('street_anomaly.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import image from "@/assets/images/projects/street_anomaly.png";
</script>