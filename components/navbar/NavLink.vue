<template>
    <li>
        <NuxtLink :to="localePath(props.to)" :aria-current="is_active_page ? 'page' : null"
                    :class="`block py-2 md:p-0 text-right md:text-center 
                             ${is_active_page ? 'font-bold text-zinc-900 dark:text-zinc-400' : 'font-normal hover:underline text-gray-700 dark:text-slate-50'}`">
            {{ props.label }}
        </NuxtLink>
    </li>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    const localePath = useLocalePath()
    const router = useRouter();

    const props = defineProps({
        to: { type: String, required: true },
        label: String
    })

    let current_path = router.currentRoute.value.fullPath.replace(/\/$/, "");
    if (current_path === "") { current_path = "/"; }
    
    const is_active_page = ref(current_path === localePath(props.to) || current_path === props.to);
</script>
