<template>
    <ProjectCard 
        title="Tablut" :image="image"
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/tablut-player' }
        ]">
        
        <p class="text-center">{{ $t("unibo_23-24") }}</p>
        <p>{{ $t('tablut.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import image from "@/assets/images/projects/tablut.png";
</script>