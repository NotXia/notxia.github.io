<template>
    <Navbar />

    <ScreenCenter>
    <main>
        
        <div class="flex flex-col md:flex-row md:justify-between items-center h-full">
            <div class="text-xl order-2 md:order-1 [&>*>p]:mb-2">
                <h1 class="text-5xl font-bold mb-5">{{ t("about me") }}</h1>

                <div v-show="current_locale === 'it'">
                    <p>
                        Mi chiamo 
                        <span data-popover-target="popover-name" class="underline decoration-dashed decoration-slate-900/70 dark:decoration-slate-50/70">Xia Tian Cheng</span>, 
                        spesso conosciuto come Xia (cognome) o Riccardo.
                        Studio informatica all'Università di Bologna e al momento i miei interessi sono orientati verso l'analisi dati e l'intelligenza artificiale.
                    </p>
                    <p>
                        Oltre a premere tasti sulla tastiera, 
                        mi piace leggere, 
                        sperimentare in cucina <span class="text-xs">(preferibilmente con un estintore nei paraggi)</span> 
                        e giocare a giochi strategici.
                    </p>
                    <p>
                        Secondo <a class="hover:underline italic" href="https://www.16personalities.com">16Personalities</a> sono un 
                        <a class="font-mono hover:underline" href="https://www.16personalities.com/profiles/6b57f54bf1242">Architetto (INTJ)</a>. 
                        Devo dire che la descrizione è decisamente accurata.
                    </p>
                </div>

                <div v-show="current_locale === 'en'">
                    <p>
                        My name is
                        <span data-popover-target="popover-name" class="underline decoration-dashed decoration-slate-900/70 dark:decoration-slate-50/70">Xia Tian Cheng</span>, 
                        frequently known as Xia (surname) or Richard.
                        I am a computer science student at the University of Bologna and currently my interests are focused on data analysis and artificial intelligence.
                    </p>
                    <p>
                        Aside from pressing keys on a keyboard, 
                        I like reading, 
                        cooking <span class="text-xs">(preferably with a fire extinguisher nearby)</span> 
                        and playing strategic games.
                    </p>
                    <p>
                        According to <a class="hover:underline italic" href="https://www.16personalities.com">16Personalities</a> I'm an 
                        <a class="font-mono hover:underline" href="https://www.16personalities.com/profiles/6b57f54bf1242">Architect (INTJ)</a>. 
                        I must admit that the description is quite accurate.
                    </p>
                </div>

            </div>

            <div class="order-1 mb-3 ml-0 md:order-2 md:mb-0 md:ml-10">
                <ProfilePicture />
            </div>
        </div>
            
        <div class="mt-5">
            <p class="text-center text-xl">{{ t("reading") }}</p>
            <div class="flex justify-center">
                <Goodreads class="h-48"/>
            </div>
        </div>
    </main>
    </ScreenCenter>

    <div data-popover id="popover-name" role="tooltip" class="absolute z-10 invisible inline-block transition-opacity duration-500 opacity-0">
        <div class="text-lg px-3 py-2 bg-slate-200 dark:bg-slate-800 rounded">
            夏天成
        </div>
    </div>

</template>


<script setup lang="ts">
    import Navbar from "@/components/navbar/Navbar.vue";
    import Goodreads from "@/components/goodreads/Goodreads.vue";
    import ScreenCenter from "@/components/screen-center/ScreenCenter.vue";
    import ProfilePicture from "@/components/profile-picture/ProfilePicture.vue";
    import { useI18n } from "vue-i18n";
    import { type ComputedRef, computed, onMounted, watch, ref } from "vue";
    import { initPopovers } from "flowbite";

    const { t, locale } = useI18n({ messages: {
        "en": {
            "about me": "About me",
            "reading": "Currently I'm reading",

            "that's bright": "That's bright",
            "thanks": "Thanks"
        },
        "it": {
            "about me": "Su di me",
            "reading": "Attualmente sto leggendo",

            "that's bright": "È luminoso",
            "thanks": "Grazie"
        }
    } });

    const current_locale = ref(locale.value);


    const my_age: ComputedRef<number> = computed((): number => {
        const today = new Date();
        const birthDate = new Date(2001, 8, 29);
        const month_diff = today.getMonth() - birthDate.getMonth();
        let age = today.getFullYear() - birthDate.getFullYear();
        if (month_diff < 0 || 
           (month_diff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    });

    onMounted(() => {
        initPopovers();
    });

    watch(locale, () => {
        current_locale.value = locale.value;
    });
</script>