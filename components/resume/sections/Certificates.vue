<template>
    <div>
        <h2 class="text-4xl font-bold tracking-wide">{{ $t("certificates") }}</h2>

        <ActivityParagraph title="CS50’s Introduction to AI with Python" subtitle="HarvardX" right_text="2022">
            <a class="font-mono hover:underline" href="https://certificates.cs50.io/bb09e788-f9da-4055-8645-aba7ef163683.pdf?size=a4">{{ $t("link to certificate") }}</a>
            <p>{{ $t("cs50 ai description") }}</p>
        </ActivityParagraph>

        <ActivityParagraph title="CISCO: IT Essentials" subtitle="CISCO Networking Academy" right_text="2018">
            {{ $t("cisco it essentials description") }}
        </ActivityParagraph>
    </div>
</template>