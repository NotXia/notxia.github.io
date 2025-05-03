<template>
    <div class="flex h-full justify-center relative">
        <div class="absolute top-0 left-0 w-full">
            <div data-tooltip-target="tooltip-future" class="relative w-6 h-2 mx-auto z-50" @mouseover="startArchievementTimer" @mouseleave="stopAchievementTimer">
            </div>
            <div id="tooltip-future" role="tooltip" 
                 class="absolute z-10 invisible inline-block px-2 py-1 text-xs font-medium transition-opacity duration-1000 rounded-lg opacity-0 tooltip">
                {{ $t("future") }}
            </div>
        </div>

        <div class="w-full timeline-height">
            <Timeline 
                :right="[
                    { 
                        title: $t('diploma'), time_label: '2015 - 2020',
                        description: $t('aldini'), 
                        start: new Date(2015, september, 15), end: new Date(2020, june, 20)
                    },
                    { 
                        title: $t('bs in cs'), time_label: '2020 - 2023',
                        description: $t('unibo'), 
                        start: new Date(2020, september, 21), end: new Date(2023, october, 11)
                    },
                    { 
                        title: $t('ms in ai'), time_label: '2023 - 2025',
                        description: $t('unibo'), 
                        start: new Date(2023, september, 18), end: current
                    }
                ]"
                :left="[
                    { 
                        title: $t('pcto toyota'), time_label: `${$t('m_12')} 2019 | ${$t('m_7')} 2019 | ${$t('m_2')} 2019`,
                        description: 'Toyota Material Handling Manufacturing Italy',
                        start: new Date(2019, february, 1), end: new Date(2019, december, 1)
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
                    },
                    { 
                        title: $t('research intern'), time_label: `${$t('m_7')} 2025 - ${$t('m_1')} 2026`,
                        description: `National Institute of Informatics, Tokyo, ${$t('japan')}`, 
                        start: new Date(2025, july, 14), end: new Date(2026, january, 9)
                    }
                ]" />
        </div>
    </div>
    <p class="text-center text-xs text-gray-400 dark:text-slate-600">{{ $t("like timelines") }}</p>
</template>


<script setup lang="ts">
    import { initTooltips } from "flowbite";

    const january = 0, february = 1, march = 2, april = 3, may = 4, june = 5, july = 6, august = 7, september = 8, october = 9, november = 10, december = 11;
    const current = new Date(Date.now() + 24*60*60*1000)

    onMounted(() => {
        initTooltips();
    });


    let achievement_timer:NodeJS.Timeout|null = null;
    
    function startArchievementTimer() {
        achievement_timer = setTimeout(() => { 
            addFoundEasterEgg('future');
            achievement_timer = null;
        }, 500);
    }
    
    function stopAchievementTimer() {
        if (achievement_timer) {
            clearTimeout(achievement_timer);
        }
    }
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