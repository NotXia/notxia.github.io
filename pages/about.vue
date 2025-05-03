<template>
    <Navbar />

    <ScreenCenter>
    <main>
        
        <div class="flex flex-col md:flex-row md:justify-between items-center h-full">
            <div class="text-xl order-2 md:order-1 [&>*>p]:mb-2">
                <h1 class="text-5xl font-bold mb-5">{{ $t("about me") }}</h1>

                <div v-if="current_locale === 'it'">
                    <p>
                        Mi chiamo 
                        <span data-popover-target="popover-name" class="underline decoration-dashed decoration-slate-900/70 dark:decoration-slate-50/70">Tian Cheng</span>, 
                        spesso conosciuto come 
                        <span data-popover-target="popover-surname" class="underline decoration-dashed decoration-slate-900/70 dark:decoration-slate-50/70">Xia</span> 
                        (cognome) o Riccardo.
                        Studio artificial intelligence all'Università di Bologna e al momento i miei interessi sono orientati verso l'ambito NLP.
                    </p>
                    <p>
                        Oltre a premere tasti sulla tastiera, 
                        mi piace leggere, 
                        sperimentare in cucina <span class="text-xs">(preferibilmente con un estintore nei paraggi)</span>,
                        giocare a giochi strategici
                        e spendere decisamente troppo tempo sul mio home server.
                    </p>
                    <p>
                        Dovrei probabilmente scrivere qualcos'altro, ma sono terribile a scrivere biografie, quindi tieni una ciambella 🍩.
                    </p>
                </div>

                <div v-if="current_locale === 'en'">
                    <p>
                        My name is
                        <span data-popover-target="popover-name" class="underline decoration-dashed decoration-slate-900/70 dark:decoration-slate-50/70">Tian Cheng</span>, 
                        frequently known as 
                        <span data-popover-target="popover-surname" class="underline decoration-dashed decoration-slate-900/70 dark:decoration-slate-50/70">Xia</span> 
                        (surname) or Riccardo.
                        I am an artificial intelligence student at the University of Bologna and currently my interests are focused on natural language processing.
                    </p>
                    <p>
                        Aside from pressing keys on a keyboard, 
                        I like reading, 
                        cooking <span class="text-xs">(preferably with a fire extinguisher nearby)</span>,
                        playing strategic games
                        and spending way too much time on my home server.
                    </p>
                    <p>
                        I should probably write some more about me, but I'm terrible at writing biographies, so here's a donut 🍩.
                    </p>
                </div>

            </div>

            <div class="order-1 mb-3 ml-0 md:order-2 md:mb-0 md:ml-10">
                <ProfilePicture />
            </div>
        </div>
            
        <div class="mt-5">
            <p class="text-center text-xl">{{ $t("reading") }}</p>
            <div class="flex justify-center h-48">
                <Goodreads />
            </div>
        </div>
    </main>
    </ScreenCenter>

    <div data-popover id="popover-name" role="tooltip" class="absolute z-10 invisible inline-block transition-opacity duration-500 opacity-0">
        <div class="text-lg px-3 py-2 bg-slate-200 dark:bg-slate-800 rounded">
            天成
        </div>
    </div>

    <div data-popover id="popover-surname" role="tooltip" class="absolute z-10 invisible inline-block transition-opacity duration-500 opacity-0">
        <div class="text-lg px-3 py-2 bg-slate-200 dark:bg-slate-800 rounded">
            夏
        </div>
    </div>

</template>

<script setup lang="ts">
    import { initPopovers } from "flowbite";
    const { t, locale } = useI18n();
    const current_locale = ref(locale.value);
    useHead({ title: t("title_about") });

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