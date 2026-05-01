<template>
    <main class="im-main">
        <section class="im-top-section im-svg-bg flex-row" data-aos="fade-up">
            <div class="im-container-1100 centered-child">
                <div class="im-title-wrap centered">
                    <h1 class="im-common-title dark">Professional Frontend Development</h1>
                    <div class="im-common-subtitle">
                        From <span class="im-tag">PSD</span><span class="im-tag">Sketch</span><span class="im-tag">Figma</span>...whatever
                        <br> to live interactive <br><span class="im-tag">HTML</span>
                    </div>
                </div>
            </div>
        </section>
        <CompetenceList/>
        <ProjectList/>
        <AppAbout/>
    </main>
</template>

<script setup>
import ProjectList from './main/ProjectList.vue';
import CompetenceList from "./main/CompetenceList.vue";
import AppAbout from "./main/AppAbout.vue";
</script>
