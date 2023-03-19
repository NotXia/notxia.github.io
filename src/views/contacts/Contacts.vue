<template>
    <div class="relative z-10">
        <Navbar />
    </div>

    <ScreenCenter>
    <main>
        <!-- <h1 class="text-3xl md:text-5xl font-bold text-center mb-5">{{ t("contacts") }}</h1> -->
        
        <div class="md:flex justify-center">
            <div>
                <ContactLink label="tcxia2001@gmail.com" url="mailto:tcxia2001@gmail.com" :icon="mail_icon" alt="E-mail" />
                <ContactLink label="t.me/notxia" url="https://t.me/notxia" :icon="telegram_icon" alt="Telegram" />
                <ContactLink label="Panda#9784" url="https://discordapp.com/users/272354672969515009" :icon="discord_icon" alt="Discord" />
                <ContactLink label="linkedin.com/in/tian-cheng-xia" url="https://www.linkedin.com/in/tian-cheng-xia/" :icon="linkedin_icon" alt="LinkedIn" />
            </div>
        </div>
    </main>
    </ScreenCenter>
</template>


<script setup lang="ts">
    import Navbar from "@/components/navbar/Navbar.vue";
    import ScreenCenter from "@/components/screen-center/ScreenCenter.vue";
    import { useI18n } from "vue-i18n";
    import locale from "@/locales/contacts";
    import ContactLink from "./ContactLink.vue";

    import mail_icon from "@/assets/images/icons/mail.svg";
    import telegram_icon from "@/assets/images/icons/telegram.svg";
    import linkedin_icon from "@/assets/images/icons/linkedin.svg";
    import discord_icon from "@/assets/images/icons/discord.svg";

    const { t } = useI18n({ messages: locale });
</script>