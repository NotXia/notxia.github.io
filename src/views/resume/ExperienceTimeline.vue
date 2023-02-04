<template>
    <div class="flex h-full justify-center">
        <div class="w-full timeline-height">
            <Timeline 
                :right="[
                    { 
                        title: t('diploma'), time_label: '2015 - 2020',
                        description: t('diploma description'), 
                        start: new Date(2015, september, 1), end: new Date(2020, june, 1)
                    },
                    { 
                        title: t('bachelor'), time_label: '2020 - 2023',
                        description: t('bachelor description'), 
                        start: new Date(2020, september, 1), end: new Date(), current: true
                    }
                ]"
                :left="[
                    { 
                        title: t('it/is pcto toyota'), time_label: `${t('december')} 2019 | ${t('july')} 2019 | ${t('february')} 2022`,
                        description: 'Toyota Material Handling Manufacturing Italy',
                        start: new Date(2019, february, 1), end: new Date(2019, november, 1)
                    },
                    { 
                        title: 'CS50’s Introduction to AI with Python', time_label: '2022',
                        description: 'HarvardX', 
                        start: new Date(2022, september, 1), end: new Date(2022, september, 1)
                    },
                    { 
                        title: 'CISCO: IT Essentials', time_label: '2018',
                        description: 'CISCO Networking Academy', 
                        start: new Date(2018, september, 1), end: new Date(2018, september, 1)
                    }
                ]" />
        </div>
    </div>
    <p class="text-center text-xs text-gray-400 dark:text-slate-600">{{ t("like timelines") }}</p>
</template>


<script setup lang="ts">
    import Timeline from "@/components/timeline/Timeline.vue";
    import { useI18n } from "vue-i18n";

    const { t } = useI18n({ messages: {
        "en": {
            "january": "January", "february": "February", "march": "March", "april": "April", "may": "May", "june": "June", 
            "july": "July", "august": "August", "september": "September", "october": "October", "november": "November", "december": "December",
            "like timelines": "I like timelines",

            "diploma": "Secondary school diploma in IT",
            "diploma description": "Aldini Valeriani, Bologna, Italy",
            "bachelor": "Bachelor's degree in Computer Science",
            "bachelor description": "Alma Mater Studiorum, University of Bologna",

            "it/is pcto toyota": "IT/IS office, Internship"
        },
        "it": {
            "january": "Gennaio", "february": "Febbraio", "march": "Marzo", "april": "Aprile", "may": "Maggio", "june": "Giugno", 
            "july": "Luglio", "august": "Agosto", "september": "Settembre", "october": "Ottobre", "november": "Novembre", "december": "Dicembre",
            "like timelines": "Mi piacciono le linee del tempo",

            "diploma": "Diploma di perito informatico",
            "diploma description": "I.T.I Aldini Valeriani, Bologna",
            "bachelor": "Laurea triennale in Informatica",
            "bachelor description": "Alma Mater Studiorum, Università di Bologna",

            "it/is pcto toyota": "Ufficio IT/IS, Stage"
        }
    } });

    const january = 0, february = 1, march = 2, april = 3, may = 4, june = 5, july = 6, august = 7, september = 8, october = 9, november = 10, december = 11;
</script>

<style scoped>
    /* Extra small devices */
    @media only screen and (max-width: 600px) {
        .timeline-height { min-height: 90rem; }
    }

    /* Small devices */
    @media only screen and (min-width: 600px) {
        .timeline-height { min-height: 80rem; }
    }

    /* Medium devices */
    @media only screen and (min-width: 768px) {
        .timeline-height { min-height: 70rem; }
    }

    /* Large devices */
    @media only screen and (min-width: 992px) {
        .timeline-height { min-height: 60rem; }
    }

    /* Extra large devices */
    @media only screen and (min-width: 1200px) {
        .timeline-height { min-height: 60rem; }
    } 
</style>