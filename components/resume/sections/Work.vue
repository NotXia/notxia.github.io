<template>
    <div>
        <h2 class="text-4xl font-bold tracking-wide">{{ $t("working experience") }}</h2>

        <ActivityParagraph :title="$t('pcto toyota')" subtitle="Toyota Material Handling Manufacturing Italy" 
                           :right_text="`${$t('december')} 2019 | ${$t('july')} 2019 | ${$t('february')} 2019`">
            {{ $t("pcto toyota description") }}
        </ActivityParagraph>
    </div>
</template>