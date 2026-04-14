<template>
    <ProjectCard 
        :title="$t('instance_detection.title')" :image="image" image_classes=""
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/opencv-instance-detection' }
        ]">
        
        <p>{{ $t('instance_detection.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import image from "@/assets/images/projects/instance_detection.png";
</script>