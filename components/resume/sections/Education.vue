<template>
    <div>
        <h2 class="text-4xl font-bold tracking-wide">{{ $t("education") }}</h2>

        <ActivityParagraph :title="$t('ms in ai')" :subtitle="$t('unibo')" :right_text="`2023 - ${$t('present')}`">
        </ActivityParagraph>
        
        <ActivityParagraph :title="$t('bs in cs')" :subtitle="$t('unibo')" :right_text="`2020 - 2023`">
            <div>{{ $t("thesis title") }}: Subtopic-oriented biomedical summarization using pretrained language models</div>
            <div>{{ $t("graduation grade") }}: 110/110 {{ $t("with honors") }}</div>
        </ActivityParagraph>

        <ActivityParagraph :title="$t('diploma')" :subtitle="$t('aldini')" right_text="2015 - 2020">
            <div>{{ $t('diploma desc') }}</div>
            <div>{{ $t("graduation grade") }}: 100/100 {{ $t("with honors") }}</div>
        </ActivityParagraph>
    </div>
</template>