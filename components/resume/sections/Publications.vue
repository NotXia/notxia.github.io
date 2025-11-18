<template>
    <div>
        <h2 class="text-4xl font-bold tracking-wide">{{ $t("publications") }}</h2>



        <ConferenceReference 
            title = "UnitMath: Unit-Aware Numerical Reasoning and Dimensional Consistency for Scientific Table Claims"
            :authors = "['AI Scientist', 'Ho, Xanh', 'Xia, Tian Cheng', 'Duong, Khoa', 'Wu, Yun-Ang', 'Nguyen, Ha-Thanh', 'Aizawa, Akiko' ]"
            :highlight_author = "highlight_author"
            year = "2025"
            conference = "Open Conference of AI Agents for Science 2025"
            openreview = "cK8YYMc65B" />

        <ConferenceReference 
            title = "Decontextualization, Everywhere: A Systematic Audit on PeerQA"
            :authors = "['AI Scientist', 'Ho, Xanh', 'Xia, Tian Cheng', 'Duong, Khoa', 'Wu, Yun-Ang', 'Nguyen, Ha-Thanh', 'Aizawa, Akiko' ]"
            :highlight_author = "highlight_author"
            year = "2025"
            conference = "Open Conference of AI Agents for Science 2025"
            openreview = "OG8sFxeNHv" />
            

        <JournalReference 
            title = "Large Language Models Evaluation for PubMed Extractive Summarisation"
            :authors = "['Xia, Tian Cheng', 'Bertini, Flavio', 'Montesi, Danilo']"
            :highlight_author = "highlight_author"
            year = "2025"
            journal = "ACM Transactions on Computing for Healthcare"
            doi = "10.1145/3766905" />

        <JournalReference 
            title = "The Design and Realization of a Self-Hosted and Open-Source Agile Internal Development Platform"
            :authors = "['Ciancarini, Paolo', 'Giancarlo, Raffaele', 'Grimaudo, Gennaro', 'Missiroli, Marcello', 'Xia, Tian Cheng']"
            :highlight_author = "highlight_author"
            year = "2025"
            journal = "IEEE Access"
            doi = "10.1109/ACCESS.2025.3564141" />


    </div>
</template>

<script setup lang="ts">
    const highlight_author = "Xia, Tian Cheng";
</script>