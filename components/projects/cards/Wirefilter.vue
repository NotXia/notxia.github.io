<template>
    <ProjectCard 
        title="Wirefilter" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/vdeplug_wirefilter' },
            { label: 'VirtualSquare', url: 'http://wiki.virtualsquare.org/#!index.md' }
        ]">
        
        <p class="text-center">{{ $t("unibo_22-23") }}</p>
        <p>{{ $t("wirefilter.description") }}</p>
    </ProjectCard>
</template>