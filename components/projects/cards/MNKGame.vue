<template>
    <ProjectCard 
        title="MNK Game" :image="image"
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/MNKGame' }
        ]">
        
        <p class="text-center">{{ $t("unibo_20-21") }}</p>
        <p>{{ $t('mnk.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import image from "@/assets/images/projects/mnkgame.png";
</script>