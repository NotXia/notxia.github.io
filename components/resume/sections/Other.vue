<template>
    <div>
        <h2 class="text-4xl font-bold tracking-wide">{{ $t("other") }}</h2>

        <ActivityParagraph :title="$t('ois')" :subtitle="$t('aldini')" right_text="2017-18 | 2018-19 | 2019-20">
            {{ $t("ois description") }}
        </ActivityParagraph>

        <ActivityParagraph title="MAST Academy: Expeditions" :subtitle="$t('MAST foundation')" right_text="2018">
            {{ $t("MAST expeditions description") }}
        </ActivityParagraph>
    </div>
</template>