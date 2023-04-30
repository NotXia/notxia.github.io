<template>
    <ProjectCard 
        title="Image deblur" :image="image"
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/imaging' }
        ]">
        
        <p class="text-center">{{ $t("unibo_21-22") }}</p>
        <p>{{ $t('imaging.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import image from "@/assets/images/projects/imaging.png";
</script>