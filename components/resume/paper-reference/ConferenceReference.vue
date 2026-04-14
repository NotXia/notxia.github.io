<template>
    <div class="md:ml-2 mt-4">
        ({{ props.year }}). {{ props.title }}.<br/>
        <span v-for="(author, i) in props.authors">
            <span :class="`${props.highlight_author == author ? 'font-bold' : ''}`">{{ author }}</span><span v-if="i < props.authors.length-1">; </span>
        </span>. <br/>
        <span>{{ conference }}</span>.<br/> 
        <ReferenceLink :doi="doi" :openreview="openreview" :arxiv="arxiv" />
    </div>
</template>


<script setup lang="ts">
    const props = defineProps({
        title: String,
        authors: { type: Array<String>, default: [] },
        highlight_author: String,
        year: String,
        conference: String,
        doi: { type: String, default: '' },
        openreview: { type: String, default: '' },
        arxiv: { type: String, default: '' }
    });
</script>