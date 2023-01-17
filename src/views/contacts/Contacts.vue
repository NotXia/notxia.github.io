<template>
    <div class="relative z-10">
        <Navbar />
    </div>

    <main class="absolute top-0 h-screen w-screen z-0">
        <div class="flex justify-center items-center h-full w-full">
            <div>
                <h1 class="text-5xl font-bold text-center">{{ t("contacts") }}</h1>
                
                <div class="flex justify-center">
                    <div>
                        <ContactLink label="tcxia2001@gmail.com" url="mailto:tcxia2001@gmail.com" :icon="mail_icon" alt="E-mail" />
                        <ContactLink label="t.me/notxia" url="https://t.me/notxia" :icon="telegram_icon" alt="Telegram" />
                        <ContactLink label="linkedin.com/in/tian-cheng-xia" url="https://www.linkedin.com/in/tian-cheng-xia/" :icon="linkedin_icon" alt="LinkedIn" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<script setup lang="ts">
    import Navbar from "@/components/navbar/Navbar.vue";
    import { useI18n } from "vue-i18n";
    import locale from "./locale.json";
    import ContactLink from "./ContactLink.vue";

    import mail_icon from "@/assets/icons/mail.svg";
    import telegram_icon from "@/assets/icons/telegram.svg";
    import linkedin_icon from "@/assets/icons/linkedin.svg";

    const { t } = useI18n({ messages: locale });
</script>