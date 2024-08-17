<template>
    <ProjectCard 
        title="WaveMap" :image="image" image_classes="!max-h-[32rem]"
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/wave-map' },
        ]">
        
        <p class="text-center">{{ $t("unibo_22-23") }}</p>
        <p>{{ $t("wavemap.description") }}</p>
    </ProjectCard>
</template>

<script setup lang="ts">
    import image from "@/assets/images/projects/wavemap.jpg";
</script>