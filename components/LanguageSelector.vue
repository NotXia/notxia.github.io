<template>
    <div>
        <button id="button-dropdown-locales" data-dropdown-toggle="dropdown-locales" type="button"
                class="rounded-full p-1 hover:bg-slate-200 dark:hover:bg-slate-700">
            <div class="w-5 h-5 flex items-center justify-center">
                <img src="~/assets/images/icons/globe.svg" alt="Language" class="h-full w-full dark:invert" />
            </div>
        </button>
    
        <div id="dropdown-locales" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="button-dropdown-locales">

                <li v-for="locale in $i18n.locales" :key="`locale-${locale.code}`">
                    <NuxtLink :to="switchLocalePath(locale.code)" class="text-sm font-medium uppercase text-gray-900 rounded dark:text-gray-300">
                        <span class="flex items-center p-2 px-5 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            {{ locale.code }}
                        </span>
                    </NuxtLink>
                </li>
    
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { initDropdowns } from "flowbite";
    const switchLocalePath = useSwitchLocalePath()

    onMounted(() => {
        initDropdowns();
    })
</script>
