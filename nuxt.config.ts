// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/i18n"
    ],

    i18n: {
        locales: [
            {
                code: "en",
                iso: "en-US",
                name: "English",
                files: ["en-US/general.ts", "en-US/projects.ts", "en-US/resume.ts"]
            },
            {
                code: "it",
                iso: "it-IT",
                name: "Italiano",
                files: ["it-IT/general.ts", "it-IT/projects.ts", "it-IT/resume.ts"]
            },
        ],
        lazy: true,
        langDir: "locales",
        defaultLocale: "en",
        strategy: "prefix_and_default",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "locale",
            redirectOn: "root",
            alwaysRedirect: true
        }
    },

    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],

    css: ["~/assets/css/main.css"],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    nitro: {
        prerender: {
            failOnError: false,
        },
    },
})