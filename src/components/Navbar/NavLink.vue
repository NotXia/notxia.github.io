<template>
    <li>
        <router-link :to="props.to" :aria-current="is_active_page ? 'page' : null"
                    :class="`block py-2 md:p-0 text-right md:text-center 
                             ${is_active_page ? 'font-bold text-zinc-900 dark:text-zinc-400' : 'font-normal hover:underline text-gray-700 dark:text-slate-50'}`">
            {{ props.label }}
        </router-link>
    </li>
</template>

<script setup lang="ts">
    import { ref, watch } from "vue";
    import { useRoute } from "vue-router";
    const route = useRoute();

    const props = defineProps({
        to: { type: String, required: true },
        label: String
    })

    const is_active_page = ref(route.path === props.to);
    watch(() => route.path, () => {
        is_active_page.value = route.path === props.to
    });
</script>
