<template>

    <div class="flex text-sm">
        <div class="flex items-center justify-center">
            <div class="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img src="~/assets/images/sad.svg" alt="" class="h-full w-full dark:invert" />
            </div>
        </div>

        <div class="flex-1 ml-2">
            <p class="font-bold text-base">{{ $t("something.title") }}</p>
            <p>{{ $t("something.description") }}</p>
        </div>
    </div>
    
</template>