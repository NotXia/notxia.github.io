<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 px-2 sm:px-4 py-2.5 ">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        <div></div>

        <button class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden dark:text-gray-400"
                data-collapse-toggle="navbar-main" type="button" aria-controls="navbar-main" aria-expanded="false">
            <span class="sr-only">Apri menù navigazione</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
        </button>
        
        <div class="hidden w-full md:block md:w-auto" id="navbar-main">
            <ul class="flex flex-col pt-4 pr-4 mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium bg-transparent">
                <NavLink to="/" label="Home"/>
            </ul>
        </div>
    </div>
    </nav>
</template>


<script setup lang="ts">
    import NavLink from "./NavLink.vue";
    import "flowbite";
</script>
