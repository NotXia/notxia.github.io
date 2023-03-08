<template>

    <div class="relative">
        <div class="flex items-center h-60 w-60">
            <img v-show="picture === 'dark'"      :src="picture_dark"     alt="" class="max-h-full max-w-full">
            <img v-show="picture === 'light'"     :src="picture_light"    alt="" class="max-h-full max-w-full">
            <img v-show="picture === 'bright'"    :src="picture_bright"   alt="" class="max-h-full max-w-full">
            <img v-show="picture === 'no light'"  :src="picture_nolight"  alt="" class="max-h-full max-w-full">
        </div>

        <div v-if="message" class="absolute bottom-0 left-0 w-full">
            <p class="w-fit mx-auto px-2 pt-1 mb-1 bg-gray-200 dark:bg-gray-700">{{ message }}</p>
        </div>
    </div>

</template>


<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import { ref, onMounted, watch } from "vue";
    import { addFoundEasterEgg } from "@/utilities/easteregg_handler";
    import { useRoute } from "vue-router";
    import picture_dark from "@/assets/images/profile/picture-dark.png";
    import picture_light from "@/assets/images/profile/picture-light.png";
    import picture_bright from "@/assets/images/profile/picture-bright.png";
    import picture_nolight from "@/assets/images/profile/picture-nolight.png";

    const { t, locale } = useI18n({ messages: {
        "en": {
            "that's bright": "That's bright",
            "better": "Better",
            "where lights": "Who turned off the lights?",
            "here lights": "Here they are"
        },
        "it": {
            "that's bright": "È luminoso",
            "better": "Meglio",
            "where lights": "Chi ha spento le luci?",
            "here lights": "Eccole"
        }
    } });

    const picture = ref(picture_dark);
    const message = ref("picture_dark");

    const route = useRoute();


    // Finite-state automata to handle theme changes
    interface State {
        image: string;      // Image to display
        message: string;    // Message to display (string to parse with i18n)
        expect: string;     // Expected active theme when this state is applied
        next: string;       // Next state
    }

    let current_state = document.querySelector("html")?.classList.contains("dark") ? "dark1" : "light1";
    let states:Record<string, State> = {
        "dark1":        { image: "dark", message: "",                 expect: "dark",     next: "bright"  },
        "bright":       { image: "bright", message: "that's bright",  expect: "light",    next: "dark2" },
        "dark2":        { image: "dark", message: "better",           expect: "dark",     next: "light_final" },
        
        "light1":       { image: "light", message: "",                expect: "light",    next: "nolights" },
        "nolights":     { image: "no light", message: "where lights", expect: "dark",     next: "light2" },
        "light2":       { image: "light", message: "here lights",     expect: "light",    next: "dark_final" },

        "dark_final":   { image: "dark", message: "",                 expect: "dark",     next: "light_final" },
        "light_final":  { image: "light", message: "",                expect: "light",    next: "dark_final" },
    }


    function applyState() { 
        picture.value = states[current_state]?.image;
        message.value = t(states[current_state]?.message);
    }

    function nextState() { 
        current_state = states[current_state]?.next; 
    }


    onMounted(() => {
        applyState();

        let observer = new MutationObserver(function(mutations) {
            if (route.path !== "/about") { observer.disconnect(); return; } // Disconnect observer if on other routes

            const is_dark_theme = document.querySelector("html")?.classList.contains("dark");

            if ( states[states[current_state].next].expect === (is_dark_theme ? "dark" : "light") ) {
                nextState();
                applyState();

                if (current_state === "bright") { addFoundEasterEgg("picture-bright"); }
                else if (current_state === "nolights") { addFoundEasterEgg("picture-nolights"); }
            }
        });

        // Observes for theme changes
        observer.observe((document.querySelector("html") as Node), { attributes: true, attributeFilter: ['class'] });
    });

    watch(locale, () => {  // To update the language of the displayed message
        applyState(); 
    });

</script>