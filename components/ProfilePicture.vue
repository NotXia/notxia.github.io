<template>

    <div class="relative">
        <div class="flex items-center h-80 w-80">
            <!-- <img v-show="picture === 'dark'"      src="~/assets/images/profile/picture-dark.png"     alt="" class="max-h-full max-w-full">
            <img v-show="picture === 'light'"     src="~/assets/images/profile/picture-light.png"    alt="" class="max-h-full max-w-full">
            <img v-show="picture === 'bright'"    src="~/assets/images/profile/picture-bright.png"   alt="" class="max-h-full max-w-full">
            <img v-show="picture === 'no light'"  src="~/assets/images/profile/picture-nolight.png"  alt="" class="max-h-full max-w-full"> -->
            <img src="~/assets/images/profile/me.jpg" alt="Me with an Eevee hat holding an umbrella" class="max-h-full max-w-full rounded-md">
        </div>

        <!-- <div v-if="message" class="absolute bottom-0 left-0 w-full">
            <p class="w-fit mx-auto px-2 pt-1 mb-1 bg-gray-200 dark:bg-gray-700">{{ message }}</p>
        </div> -->
    </div>

</template>


<!-- <script setup lang="ts">
    const { t } = useI18n();

    const picture = ref(getTheme());
    const message = ref("");


    Finite-state automata to handle theme changes
    interface State {
        image: string;      // Image to display
        message: string;    // Message to display (string to parse with i18n)
        expect: string;     // Expected active theme when this state is applied
        next: string;       // Next state
    }


    onMounted(() => {
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
            message.value = states[current_state]?.message !== "" ? t(states[current_state]?.message) : "";
        }

        function nextState() { 
            current_state = states[current_state]?.next; 
        }

        applyState();

        let observer = new MutationObserver(function(mutations) {
            if (!useRoute().name?.toString().startsWith("about")) { observer.disconnect(); return; }
            
            const is_dark_theme = document.querySelector("html")?.classList.contains("dark");

            if ( states[states[current_state].next].expect === (is_dark_theme ? "dark" : "light") ) {
                nextState();
                applyState();

                if (current_state === "bright") { addFoundEasterEgg("picture-bright"); }
                else if (current_state === "nolights") { addFoundEasterEgg("picture-nolights"); }
            }
        });

        Observes for theme changes
        observer.observe((document.querySelector("html") as Node), { attributes: true, attributeFilter: ['class'] });
    });

</script> -->