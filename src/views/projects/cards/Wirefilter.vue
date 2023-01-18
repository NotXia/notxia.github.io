<template>
    <ProjectCard 
        title="Wirefilter" 
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/vdeplug_wirefilter' },
            { label: 'VirtualSquare', url: 'http://wiki.virtualsquare.org/#!index.md' }
        ]"/>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";

    const { t } = useI18n({ messages: {
        en: {
            description:
                "Virtual Distributed Ethernet (VDE) is an open source project that allows to create virtual networks through a set of plugins.\n" +
                "Wirefilter is a plugin that allows to manipulate packets flow by changing the parameters of the virtual cable"
        },
        it: {
            description:
                "Virtual Distributed Ethernet (VDE) è un progetto open source che consente di creare reti virtuali tramite l’utilizzo modulare di plugin.\n" +
                "Wirefilter è un plugin che consente di manipolare il flusso dei pacchetti in transito impostando parametri per il cavo virtuale"
        }
    } });
</script>