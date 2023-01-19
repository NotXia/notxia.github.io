<template>
    <nav class="bg-transparent border-gray-200 py-2.5">
    <div class="container flex flex-wrap items-center justify-end md:justify-start mx-auto">
        <div class="block md:flex w-full">
            <div class="flex justify-end items-center order-2 md:w-1/2">
                <a href="https://github.com/NotXia" class="rounded-full p-1 mx-1 hover:bg-slate-200 dark:hover:bg-slate-700">
                    <img :src="github_icon" alt="Github" class="h-5 dark:invert" /> 
                </a>
                <ThemeSwitch class="mx-1" />
                <LanguageSelector class="mx-1" />

                <button class="inline-flex items-center mx-3 text-sm text-gray-500 md:hidden dark:text-gray-400"
                    data-collapse-toggle="navbar-main" type="button" aria-controls="navbar-main" aria-expanded="false">
                    <span class="sr-only">{{ t("open nav") }}</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>

            <div class="flex items-center order-1 md:w-1/2">
                <div class="hidden w-full md:block md:w-auto" id="navbar-main">
                    <ul class="flex flex-col py-4 pr-4 mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium bg-transparent">
                        <NavLink to="/" :label="t('home')"/>
                        <NavLink to="/about" :label="t('about')"/>
                        <NavLink to="/projects" :label="t('projects')"/>
                        <NavLink to="/resume" :label="t('resume')"/>
                        <NavLink to="/contacts" :label="t('contacts')"/>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </nav>
</template>


<script setup lang="ts">
    import NavLink from "./NavLink.vue";
    import ThemeSwitch from "../theme-switch/ThemeSwitch.vue";
    import LanguageSelector from "../language-selector/LanguageSelector.vue";
    import { initCollapses } from "flowbite";
    import { useI18n } from "vue-i18n";
    import locale from "./locale.json";
    import { onMounted } from "vue";

    import github_icon from "@/assets/icons/github.svg";

    const { t } = useI18n({ messages: locale });

    onMounted(() => {
        initCollapses();
    }) 
</script>
