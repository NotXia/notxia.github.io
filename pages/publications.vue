<template>
    <Navbar />

    <main>
        <h1 class="text-5xl font-bold text-center mb-5">{{ $t("publications") }}</h1>
        
        <div class="flex justify-center items-start">
            <div>
                <a href="https://orcid.org/0009-0005-5274-7469" class="rounded-full p-1 mx-1 md:inline block text-center">
                    <img src="~/assets/images/icons/orcid.svg" alt="ORCID" class="h-5 inline mb-1" /> 0009-0005-5274-7469
                </a>
    
                <a href="https://scholar.google.com/citations?user=R6SM0nMAAAAJ" class="rounded-full p-1 mx-1 md:inline block text-center">
                    <img src="~/assets/images/icons/scholar.svg" alt="Github" class="h-5 mb-1 inline" /> Google Scholar
                </a>
            </div>
        </div>

        <div class="mx-20">
            <ConferenceReference 
                title = "SciClaimEval: Cross-modal Claim Verification in Scientific Papers"
                :authors = "['Xanh Ho', 'Yun-Ang Wu', 'Sunisth Kumar', 'Tian Cheng Xia', 'Florian Boudin', 'Andre Greiner-Petter', 'Akiko Aizawa']"
                :highlight_author = "highlight_author"
                year = "2026"
                conference = "Language Resources and Evaluation Conference (LREC)"
                arxiv = "2602.07621" />
    
            <ConferenceReference 
                title = "UnitMath: Unit-Aware Numerical Reasoning and Dimensional Consistency for Scientific Table Claims"
                :authors = "['AI Scientist', 'Xanh Ho', 'Tian Cheng Xia', 'Khoa Duong', 'Yun-Ang Wu', 'Ha-Thanh Nguyen', 'Akiko Aizawa']"
                :highlight_author = "highlight_author"
                year = "2025"
                conference = "Open Conference of AI Agents for Science 2025"
                openreview = "cK8YYMc65B" />
    
            <ConferenceReference 
                title = "Decontextualization, Everywhere: A Systematic Audit on PeerQA"
                :authors = "['AI Scientist', 'Xanh Ho', 'Tian Cheng Xia', 'Khoa Duong', 'Yun-Ang Wu', 'Ha-Thanh Nguyen', 'Akiko Aizawa']"
                :highlight_author = "highlight_author"
                year = "2025"
                conference = "Open Conference of AI Agents for Science 2025"
                openreview = "OG8sFxeNHv" />
                
    
            <JournalReference 
                title = "Large Language Models Evaluation for PubMed Extractive Summarisation"
                :authors = "['Tian Cheng Xia', 'Flavio Bertini', 'Danilo Montesi']"
                :highlight_author = "highlight_author"
                year = "2025"
                journal = "ACM Transactions on Computing for Healthcare"
                doi = "10.1145/3766905" />
    
            <JournalReference 
                title = "The Design and Realization of a Self-Hosted and Open-Source Agile Internal Development Platform"
                :authors = "['Paolo Ciancarini', 'Raffaele Giancarlo', 'Gennaro Grimaudo', 'Marcello Missiroli', 'Tian Cheng Xia']"
                :highlight_author = "highlight_author"
                year = "2025"
                journal = "IEEE Access"
                doi = "10.1109/ACCESS.2025.3564141" />
        </div>

    </main>
</template>

<script setup lang="ts">
    const { t } = useI18n();
    useHead({ title: t("title_publications") });
    const highlight_author = "Tian Cheng Xia";
</script>