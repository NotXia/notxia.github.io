<template>
    <span v-if="doi === '' && openreview === ''">{{ $t("under_review") }}</span>
    <span v-if="doi !== ''"><span class="font-mono">DOI</span>: <a :href="`https://doi.org/${props.doi}`" class="font-mono hover:underline">{{ props.doi }}</a>.</span>
    <span v-if="openreview !== ''"><span class="font-mono">OpenReview</span>: <a :href="`https://openreview.net/forum?id=${props.openreview}`" class="font-mono hover:underline">{{ props.openreview }}</a>.</span>
</template>


<script setup lang="ts">
    const props = defineProps({
        doi: { type: String, default: '' },
        openreview: { type: String, default: '' }
    });
</script>