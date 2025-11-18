<template>
    <div class="md:ml-2 mt-4">
        <span v-for="(author, i) in props.authors">
            <span :class="`${props.highlight_author == author ? 'font-bold' : ''}`">{{ author }}</span><span v-if="i < props.authors.length-1">; </span>
        </span>. 
        ({{ props.year }}). "{{ props.title }}". 
        <span class="italic">{{ journal }}</span>. 
        <ReferenceLink :doi="doi" :openreview="openreview" />
    </div>
</template>


<script setup lang="ts">
    const props = defineProps({
        title: String,
        authors: { type: Array<String>, default: [] },
        highlight_author: String,
        year: String,
        journal: String,
        doi: { type: String, default: '' },
        openreview: { type: String, default: '' }
    });
</script>