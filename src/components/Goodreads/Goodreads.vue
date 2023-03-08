<template>
    <div class="h-full w-fit">
        <div v-if="is_loading" class="flex h-full w-full items-center justify-center">
            <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-slate-800 dark:bg-slate-200 opacity-75"></span>
        </div>

        <div v-show="!is_loading" id="gr_grid_widget_1673812364" class="h-full"></div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from "vue";

    const is_loading = ref(true);

    onMounted(() => {
        if (document.querySelector("#script-goodreads")) { document.querySelector("#script-goodreads")?.remove() };

        let scriptTag = document.createElement("script");
        scriptTag.src = "https://www.goodreads.com/review/grid_widget/158866642?cover_size=medium&hide_link=true&hide_title=true&num_books=20&order=d&shelf=currently-reading&sort=date_updated&widget_id=1673812364";
        scriptTag.id = "script-goodreads";
        scriptTag.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(scriptTag);

        let observer = new MutationObserver(function(mutations) {
            // @ts-ignore
            // Replaces the book covers with a higher resolution image
            document.querySelectorAll("#gr_grid_widget_1673812364 > * img").forEach((image) => image.src = image.src.replace("_SX98_", "_SY475_"));
            
            observer.disconnect();
            is_loading.value = false;
        });
        observer.observe((document.querySelector("#gr_grid_widget_1673812364") as Node), { childList: true });
    })
</script>

<style>
    .gr_grid_container {
        height: 100%;
    }

    .gr_grid_book_container {
        float: left;
        height: 100%;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        overflow: hidden;
        border-radius: 0.2rem;
        border: 1px solid #424242;
    }

    .gr_grid_book_container > * img {
        height: 100%;
    }
</style>