<template>
    <section class="im-projects-section" id="projects" data-aos="fade-up">
        <div class="im-container-1100">
            <div class="im-common-title dark centered">Selected work</div>
        </div>
        <div class="project-grid">
            <template v-for="(project, i) in projects" :key="`project-${i}`">
                <div class="project-item">
                    <div class="project-item-inner img-fix">
                        <a :href="project.link" target="_blank" rel="noopener noreferrer" class="abs-block-link"></a>
                        <img class="fits cover" :src="getImageUrl(project.image)" :alt="project.alt"/>
                        <div class="darker-slide-bg">
                            <div class="abs-centered white text centered"><b>{{ project.name }}</b></div>
                        </div>
                    </div>
                </div>
                <div v-if="i === 4" class="project-item tablete-hide"></div>
                <div v-if="i === 4" class="project-item tablete-hide"></div>
                <div class="project-item"></div>
            </template>
        </div>
    </section>
</template>

<script setup>
import { projects } from '@/data/projects';

const getImageUrl = (name) => {
    return new URL(`../../assets/images/${name}`, import.meta.url).href;
};
</script>
