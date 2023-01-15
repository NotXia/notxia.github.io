<template>
    <div class="w-full">
        <p>{{ t("now reading") }}</p>
        <div id="gr_grid_widget_1673812364" class="h-32"></div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from "vue";
    import { useI18n } from "vue-i18n";

    const { t } = useI18n({ messages: 
        {
            it: {
                "now reading": "Attualmente sto leggendo"
            },
            en: {
                "now reading": "Currently I'm reading"
            }
        } 
    });

    onMounted(() => {
        if (document.getElementById("script-goodreads")) return;

        var scriptTag = document.createElement("script");
        scriptTag.src = "https://www.goodreads.com/review/grid_widget/158866642?cover_size=medium&hide_link=true&hide_title=true&num_books=20&order=d&shelf=currently-reading&sort=date_updated&widget_id=1673812364";
        scriptTag.id = "script-goodreads";
        scriptTag.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(scriptTag);
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
    }
    .gr_grid_book_container:first-child {
        margin-left: 0;
        margin-right: 0.5rem;
    }
    .gr_grid_book_container:last-child {
        margin-left: 0.5rem;
        margin-right: 0;
    }

    .gr_grid_book_container > * img {
        height: 100%;
    }
</style>