<template>
    <div v-if="show_banner" class="w-full h-full">

        <div ref="container_cookie" class="absolute top-0 left-0 h-full w-full pointer-events-none z-40">
            <canvas ref="canvas_cookie" :width="canvas_width" :height="canvas_height"></canvas>
        </div>
        
        <div ref="banner" class="fixed bottom-0 left-0 z-50 bg-slate-200/90 border-slate-700 dark:bg-slate-800/90 dark:border-slate-400 
                                 border rounded w-fit lg:w-1/2 p-3 px-5 m-5">
            <p class="text-sm">{{ t("cookie policy title") }}</p>
            <div class="text-xs">
                <span>{{ t("cookie policy") }} <button :onclick="throwCookie" class="underline">{{ t("cookie policy link") }}</button></span>
            </div>
            <div class="flex justify-end mt-2 text-sm">
                <button :onclick="refuseCookieBanner" class="mx-1 hover:text-slate-500 dark:hover:text-slate-300">{{ t("reject") }}</button>
                <button :onclick="acceptCookieBanner" class="rounded p-2 mx-1 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600">{{ t("accept") }}</button>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    // @ts-ignore
    import { Engine, Render, Bodies, Composite, Body, Runner } from "matter-js";
    import cookie_image from "@/assets/images/cookie.png";
    import { randomInt, random } from "@/utilities/random";
    import { shouldShowCookie, acceptCookie, refuseCookie } from "@/utilities/cookie_handler";
    import { useI18n } from "vue-i18n";
    import { addFoundEasterEgg } from "@/utilities/easteregg_handler";
    import locale from "@/locales/cookie";

    const { t } = useI18n({ messages: locale });

    const container_cookie = ref();
    const canvas_cookie = ref();

    const show_banner = ref(shouldShowCookie());
    const canvas_width = ref(getWidth());
    const canvas_height = ref(getHeight());

    let engine:any = null;


    onMounted(() => {
        if (shouldShowCookie()) { 
            initCanvas();

            new ResizeObserver(() => {
                resizeCanvas();
            }).observe(document.body);
        }
    });

    
    function acceptCookieBanner() {
        acceptCookie();
        show_banner.value = false;
    }

    function refuseCookieBanner() {
        refuseCookie();
        show_banner.value = false;
    }


    function getWidth() { return document.body.clientWidth; }
    function getHeight() { return document.body.scrollHeight; }

    function resizeCanvas() {
        canvas_width.value = getWidth();
        canvas_height.value = getHeight();
    }

    /* Inits cookie throwing area */
    function initCanvas() {
        if (!engine) {
            engine = Engine.create();
            let renderer = Render.create({
                element: container_cookie.value,
                canvas: canvas_cookie.value,
                engine: engine,
                options: {
                    width: getWidth(),
                    height: getHeight(),
                    wireframes: false,
                    background: "#00000000"
                }
            });
            Render.run(renderer);
            Runner.run(Runner.create(), engine);
        }

        resizeCanvas();
    }

    function throwCookie() {
        addFoundEasterEgg("cookie");
        if (!engine) { return; }

        // Creates a cookie at the bottom of visible screen
        let cookie = Bodies.circle(randomInt(0, getWidth()), (document.documentElement.scrollTop + window.screen.height), 30, {
            render: {
                sprite: {
                    texture: cookie_image,
                    xScale: 0.08, yScale: 0.08
                }
            }
        });

        // Adds cookie to world
        Composite.add(engine.world, [cookie]);

        // Launches cookie
        const force = 0.02 * cookie.mass;
        Body.applyForce(cookie, cookie.position, 
        {
            x: force * (cookie.position.x > getWidth()/2 ? -1 : 1),
            y: -force * random(3, 6)
        });

        clearCookie(cookie);
    }
    
    /* Clears a cookie when out of the screen */
    function clearCookie(cookie:any) {
        const tollerance_offset = 1000;

        if (cookie.position.y > document.body.scrollHeight + tollerance_offset) { // If out of the screen
            Composite.remove(engine.world, cookie);
        }
        else {
            setTimeout(() => {
                clearCookie(cookie);
            }, 5000);
        }
    }

</script>