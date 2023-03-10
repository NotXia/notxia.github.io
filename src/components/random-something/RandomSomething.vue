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
    import rock_image from "@/assets/images/rock.png";
    import coconut_image from "@/assets/images/coconut.png";
    import red_panda_image from "@/assets/images/red-panda.png";

    const { t } = useI18n({ messages: {
        "en": {
            "penguin": "This is a penguin",
            "llama": "This is a llama",
            "rock": "This is a rock",
            "coconut": "This is a coconut",
            "red panda": "This is a red panda"
        },
        "it": {
            "penguin": "Questo è un pinguino",
            "llama": "Questo è un lama",
            "rock": "Questo è un sasso",
            "coconut": "Questa è una noce di cocco",
            "red panda": "Questo è un panda rosso"
        }
    } });

    const things = [
        { name: "penguin", image: penguin_image },
        { name: "llama", image: llama_image },
        { name: "rock", image: rock_image },
        { name: "coconut", image: coconut_image },
        { name: "red panda", image: red_panda_image }
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