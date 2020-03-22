<template>
    <main class="im-main">
        <section class="im-top-section im-svg-bg flex-row">
            <div class="im-container-1100 centered-child">
                <div class="im-title-wrap centered">
                    <div class="im-common-title dark">Professional Frontend Development</div>
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

<script>
    import ProjectList from './main/ProjectList';
    import CompetenceList from "./main/CompetenceList";
    import AppAbout from "./main/AppAbout";
    export default {
        name: "AppMain",
        components: {
            ProjectList,
            CompetenceList,
            AppAbout
        }
    }
</script>
