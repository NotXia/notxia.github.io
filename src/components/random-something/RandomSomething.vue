<template>
    <div class="w-52">
        <img :src="current_image" alt="" class="h-40 max-w-xs max-w- mx-auto" :onclick="userChangeThing">
        <p class="text-center text-sm mt-2 select-none">{{ t(current_name) }}</p>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { randomOfArray } from "@/utilities/random";
    import { useI18n } from "vue-i18n";
    import { addFoundEasterEgg } from "@/utilities/easteregg_handler";
    import penguin_image from "@/assets/images/penguin.png";
    import llama_image from "@/assets/images/llama.png";

    const { t } = useI18n({ messages: {
        "en": {
            "penguin": "This is a penguin",
            "llama": "This is a llama"
        },
        "it": {
            "penguin": "Questo è un pinguino",
            "llama": "Questo è un lama"
        }
    } });

    const things = [
        { name: "penguin", image: penguin_image },
        { name: "llama", image: llama_image }
    ];

    const current_name = ref("");
    const current_image = ref("");
    
    changeThing();


    function changeThing() {
        const to_show_thing = randomOfArray(things.filter((thing) => thing.name !== current_name.value));
        
        current_name.value = to_show_thing.name;
        current_image.value = to_show_thing.image;
    }

    function userChangeThing() {
        addFoundEasterEgg("change-something");
        changeThing();
    }
</script>