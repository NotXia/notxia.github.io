<template>

    <div class="flex justify-center text-sm">
        <div class="flex items-center justify-center">
            <div class="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img src="~/assets/images/cookie.png" alt="" class="h-full w-full" />
            </div>
        </div>

        <div class="flex-1 ml-2">
            <p class="font-bold text-base">{{ $t("cookie.title") }}</p>
            <p>{{ $t("cookie.description") }}</p>
        </div>
    </div>

</template>