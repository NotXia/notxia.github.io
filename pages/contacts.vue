<template>
    <div class="relative z-10">
        <Navbar />
    </div>

    <ScreenCenter>
    <main>
        <!-- <h1 class="text-3xl md:text-5xl font-bold text-center mb-5">{{ t("contacts") }}</h1> -->
        
        <div class="md:flex justify-center">
            <div>
                <ContactLink label="tcxia@ik.me" url="mailto:tcxia@ik.me" :icon="mail_icon" alt="E-mail" />
                <ContactLink label="t.me/notxia" url="https://t.me/notxia" :icon="telegram_icon" alt="Telegram" />
                <ContactLink label="notpanda__" :icon="discord_icon" alt="Discord" />
                <ContactLink label="linkedin.com/in/tian-cheng-xia" url="https://www.linkedin.com/in/tian-cheng-xia/" :icon="linkedin_icon" alt="LinkedIn" />
                <ContactLink label="@notxia:matrix.notxia.duckdns.org" url="https://matrix.to/#/@notxia:matrix.notxia.duckdns.org" :icon="matrix_icon" alt="Matrix" />
            </div>
        </div>
    </main>
    </ScreenCenter>
</template>


<script setup lang="ts">
    import mail_icon from "@/assets/images/icons/mail.svg";
    import telegram_icon from "@/assets/images/icons/telegram.svg";
    import linkedin_icon from "@/assets/images/icons/linkedin.svg";
    import discord_icon from "@/assets/images/icons/discord.svg";
    import matrix_icon from "@/assets/images/icons/matrix.svg";

    const { t } = useI18n();
    useHead({ title: t("title_contacts") });
</script>