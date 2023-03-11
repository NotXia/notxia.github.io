<template>
    <div class="[&_li]:mr-4">
        <h2 class="text-4xl font-bold tracking-wide">{{ t("skills") }}</h2>

        <ActivityParagraph :title="t('data analysis')">
            <ul class="flex flex-wrap items-center">
                <li><ProgrammingLogo :logo="python_logo" language="Python" /></li>
                <li><ProgrammingLogo :logo="database_logo" language="SQL" needInvert /></li>
                <li><ProgrammingLogo :logo="mongo_logo" language="MongoDB" /></li>
            </ul>

            <ul class="flex flex-wrap items-center">
                <li><ProgrammingLogo :logo="numpy_logo" language="Numpy" /></li>
                <li><ProgrammingLogo :logo="pandas_logo" language="Pandas" /></li>
            </ul>
            <ul class="flex flex-wrap items-center">
                <li><ProgrammingLogo :logo="matplotlib_logo" language="Matplotlib" /></li>
                <li><ProgrammingLogo :logo="seaborn_logo" language="Seaborn" /></li>
            </ul>
            <ul class="flex flex-wrap items-center">
                <li><ProgrammingLogo :logo="scikitlearn_logo" language="Scikit-learn" /></li>
                <li><ProgrammingLogo :logo="tensorflow_logo" language="Tensorflow" /></li>
                <li><ProgrammingLogo :logo="keras_logo" language="Keras" /></li>
            </ul>
            <!-- <ul class="flex flex-wrap items-center">
                <li><ProgrammingLogo :logo="knime_logo" language="KNIME" /></li>
            </ul> -->
        </ActivityParagraph>
        
        <ActivityParagraph :title="t('devops')">
            <ul class="flex flex-wrap items-center">
                <li><ProgrammingLogo :logo="docker_logo" language="Docker" /></li>
            </ul>
            <ul class="flex flex-wrap items-center">
                <li><ProgrammingLogo :logo="ansible_logo" language="Ansible" /></li>
            </ul>
            <ul class="flex flex-wrap items-center">
                <li><ProgrammingLogo :logo="jenkins_logo" language="Jenkins" /></li>
                <li><ProgrammingLogo :logo="gitlab_runners_logo" language="Gitlab Runner" /></li>
                <li><ProgrammingLogo :logo="github_actions_logo" language="Github Actions" /></li>
            </ul>
        </ActivityParagraph>
        
        <ActivityParagraph :title="t('web development')">
            <ul class="flex flex-wrap items-center">
                <li><ProgrammingLogo :logo="nodejs_logo" language="NodeJS" /></li>
                <li><ProgrammingLogo :logo="php_logo" language="PHP" /></li>
                <!-- <li><ProgrammingLogo :logo="nginx_logo" language="Nginx" /></li> -->
            </ul>
            <ul class="flex flex-wrap items-center">
                <li><ProgrammingLogo :logo="react_logo" language="React" /></li>
                <li><ProgrammingLogo :logo="vue_logo" language="Vue" /></li>
            </ul>
            <!-- <ul class="flex flex-wrap items-center">
                <li><ProgrammingLogo :logo="html_logo" language="HTML" /></li>
                <li><ProgrammingLogo :logo="css_logo" language="CSS" /></li>
                <li><ProgrammingLogo :logo="js_logo" language="Javascript" /></li>
            </ul> -->
            <!-- <p>Bootstrap Tailwind</p> -->
        </ActivityParagraph>

        <ActivityParagraph :title="t('other programming languages')">
            <ul class="flex flex-wrap items-center">
                <li><ProgrammingLogo :logo="c_logo" language="C" /></li>
                <li><ProgrammingLogo :logo="cpp_logo" language="C++" /></li>
                <li><ProgrammingLogo :logo="java_logo" language="Java" /></li>
                <li><ProgrammingLogo :logo="cpu_logo" language="Assembly x86" needInvert /></li>
            </ul>
        </ActivityParagraph>
    </div>
</template>


<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import ActivityParagraph from "../components/ActivityParagraph.vue";
    import ProgrammingLogo from "../components/ProgrammingLogo.vue";
    import locale from "../locale.js";

    import nodejs_logo from "@/assets/images/icons/nodejs.svg";
    import php_logo from "@/assets/images/icons/php.svg";
    import nginx_logo from "@/assets/images/icons/nginx.svg";
    import html_logo from "@/assets/images/icons/html.svg";
    import css_logo from "@/assets/images/icons/css.svg";
    import js_logo from "@/assets/images/icons/js.svg";
    import react_logo from "@/assets/images/icons/react.svg";
    import vue_logo from "@/assets/images/icons/vue.svg";

    import docker_logo from "@/assets/images/icons/docker.svg";
    import ansible_logo from "@/assets/images/icons/ansible.svg";
    import jenkins_logo from "@/assets/images/icons/jenkins.svg";
    import gitlab_runners_logo from "@/assets/images/icons/gitlab.svg";
    import github_actions_logo from "@/assets/images/icons/github-actions.svg";

    import numpy_logo from "@/assets/images/icons/numpy.svg";
    import pandas_logo from "@/assets/images/icons/pandas.svg";
    import matplotlib_logo from "@/assets/images/icons/matplotlib.svg";
    import seaborn_logo from "@/assets/images/icons/seaborn.svg";
    import scikitlearn_logo from "@/assets/images/icons/scikitlearn.svg";
    import tensorflow_logo from "@/assets/images/icons/tensorflow.svg";
    import keras_logo from "@/assets/images/icons/keras.svg";
    import knime_logo from "@/assets/images/icons/knime.svg";
    import database_logo from "@/assets/images/icons/database.svg";
    import mongo_logo from "@/assets/images/icons/mongo.svg";
    
    import c_logo from "@/assets/images/icons/c.svg";
    import cpp_logo from "@/assets/images/icons/cpp.svg";
    import java_logo from "@/assets/images/icons/java.svg";
    import python_logo from "@/assets/images/icons/python.svg";
    import cpu_logo from "@/assets/images/icons/cpu.svg";

    // @ts-ignore
    const { t } = useI18n({ messages: locale });
</script>