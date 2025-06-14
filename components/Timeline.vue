<template>
    <div v-if="loading" class="flex w-full justify-center">
        <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-slate-800 dark:bg-slate-200 opacity-75"></span>
    </div>

    <div class="w-full h-full" ref="container_timeline">
        <div class="flex justify-center w-full h-full" v-if="month_offset > 0 && min_date && max_date">
            
            <!-- Left side -->
            <ol class="relative border-r text-right w-1/2 border-zinc-300 dark:border-zinc-700">                  
                <li class="mr-4 absolute right-0" v-for="event in left_events" :key="props.left[event.index].title" :style="`top: ${event.offset*month_offset}px`">
                    <div class="relative">
                        <!-- Start point -->
                        <div class="absolute w-3 h-3 z-10 bg-gray-400 rounded-full border border-white dark:border-gray-900 dark:bg-gray-500" style="right: -1.43rem; bottom: 0"></div>
                        <div v-if="monthDifference(props.left[event.index].start, props.left[event.index].end) > 0" >
                            <!-- End point -->
                            <div v-if="props.left[event.index].end <= new Date()" class="absolute w-3 h-3 z-10 bg-gray-400 rounded-full border border-white dark:border-gray-900 dark:bg-gray-500" style="right: -1.43rem"></div>
                            <!-- Interval line -->
                            <div class="absolute rounded-full border-l-2 border-gray-400 dark:border-gray-500" style="height: 100%; top: 0; right: -1.12rem"></div>
                        </div>
                        
                        <div class="flex items-center" :style="`height: ${monthDifference(props.left[event.index].start, props.left[event.index].end)*month_offset}px`">
                            <div>
                                <span class="text-xs mb-0 font-normal leading-5 whitespace-pre-wrap text-gray-500 dark:text-gray-400">{{ props.left[event.index].time_label }}</span>
                                <h3 class="text-base mb-0 font-semibold leading-5 whitespace-pre-wrap text-gray-900 dark:text-white">{{ props.left[event.index].title }}</h3>
                                <p class="text-sm mb-0 font-normal leading-5 whitespace-pre-wrap text-gray-500 dark:text-gray-400">{{ props.left[event.index].description }}</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>

            <div class="w-4"></div>

            <!-- Right side -->
            <ol class="relative w-1/2 border-l border-zinc-300 dark:border-zinc-700">                  
                <li class="ml-4 absolute left-0" v-for="event in right_events" :key="props.right[event.index].title" :style="`top: ${event.offset*month_offset}px`">
                    <div class="relative">
                        <!-- Start point -->
                        <div class="absolute w-3 h-3 z-10 bg-gray-400 rounded-full border border-white dark:border-gray-900 dark:bg-gray-500" style="left: -1.43rem; bottom: 0"></div>
                        <div v-if="monthDifference(props.right[event.index].start, props.right[event.index].end) > 0">
                            <!-- End point -->
                            <div v-if="props.right[event.index].end <= new Date()" class="absolute w-3 h-3 z-10 bg-gray-400 rounded-full border border-white dark:border-gray-900 dark:bg-gray-500" style="left: -1.43rem"></div>
                            <!-- Interval line -->
                            <div class="absolute rounded-full border-l-2 border-we border-gray-400 dark:border-gray-500" style="height: 100%; top: 0; left: -1.12rem"></div>
                        </div>
                        
                        <div class="flex items-center" :style="`height: ${monthDifference(props.right[event.index].start, props.right[event.index].end)*month_offset}px`">
                            <div>
                                <span class="mb-0 text-xs font-normal leading-5 whitespace-pre-wrap text-gray-500 dark:text-gray-400">{{ props.right[event.index].time_label }}</span>
                                <h3 class="mb-0 text-base font-semibold leading-5 whitespace-pre-wrap text-gray-900 dark:text-white">{{ props.right[event.index].title }}</h3>
                                <p class="mb-0 text-sm font-normal leading-5 whitespace-pre-wrap text-gray-500 dark:text-gray-400">{{ props.right[event.index].description }}</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>

        </div>
    </div>

</template>

<script setup lang="ts">
    interface Event {
        title: string, description: string, time_label: string,
        start: Date, end: Date
    };
    
    const props = defineProps({
        right: {
            type: Array<Event>,
            default: []
        },
        left: {
            type: Array<Event>,
            default: []
        },
    });

    const loading = ref(true);
    const container_timeline = ref();
    const month_offset = ref(-1);
    const right_events:Ref<{ index: number, offset: number }[]> = ref([]);
    const left_events:Ref<{ index: number, offset: number }[]> = ref([]);
    const min_date:Ref<Date> = ref(new Date());
    const max_date:Ref<Date> = ref(new Date());


    // Return the number of months between the start and the end of the interval
    function monthDifference(start_date:Date, end_date:Date):number {
        return end_date.getMonth() - start_date.getMonth() + (12 * (end_date.getFullYear() - start_date.getFullYear()));
    }

    function dateClip(date: Date): Date {
        return date > new Date() ? new Date() : date
    }

    function updateTimelineSize():void {
        const available_space:number = container_timeline.value?.clientHeight ?? 0;
        let events_min_date:Date = new Date(), 
            events_max_date:Date = new Date(0);

        // Searches for the start and the end of the time interval
        [...props.right, ...props.left]?.forEach((event) => {
            if (!events_min_date || event.start < events_min_date) { events_min_date = event.start; }
            if (!events_max_date || event.end > events_max_date) { events_max_date = event.end; }
        });

        min_date.value = events_min_date;
        max_date.value = dateClip(events_max_date);
        month_offset.value = Math.floor( available_space / (monthDifference(events_min_date, events_max_date)) );
    }

    onMounted(() => {
        loading.value = false;
        updateTimelineSize();

        // Computes the offset w.r.t. the end of the time interval
        right_events.value = props.right
            .map((event, index) => ({
                offset: monthDifference(dateClip(event.end), max_date.value),
                index: index,
            }))
            .filter((event) => (
                props.right[event.index].start <= new Date()
            ));

        left_events.value = props.left
            .map((event, index) => ({
                offset: monthDifference(dateClip(event.end), max_date.value),
                index: index,
            }))
            .filter((event) => (
                props.left[event.index].start <= new Date()
            ));

        new ResizeObserver(updateTimelineSize).observe(document.querySelector("html") as Element)
    })
</script>
