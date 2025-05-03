<template>
    <div class="md:ml-2 mt-4">
        <span v-for="(author, i) in props.authors">
            <span :class="`${props.highlight_author == author ? 'font-bold' : ''}`">{{ author }}</span><span v-if="i < props.authors.length-1">; </span>
        </span>. 
        ({{ props.year }}). "{{ props.title }}". 
        <span class="italic">{{ journal }}</span>. 
        <span v-if="doi === ''">{{ $t("under_review") }}</span>
        <span v-if="doi !== ''"><span class="font-mono">DOI</span>: <a :href="`https://doi.org/${props.doi}`" class="font-mono hover:underline">{{ props.doi }}</a></span>.
    </div>
</template>


<script setup lang="ts">
    const props = defineProps({
        title: String,
        authors: { type: Array<String>, default: [] },
        highlight_author: String,
        year: String,
        journal: String,
        doi: { type: String, default: '' }
    });
</script>