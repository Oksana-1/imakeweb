<template>
    <section class="vh-100 competency-component" id="skills" data-aos="fade-up">
        <div class="flex-row full-height light-bg">
            <div class="flex-33 competency-column-angle">
                <div class="dark-bg full-height competency-column-inner">
                    <h2 class="im-common-title relative-parent white">Core Skills</h2>
                </div>
            </div>
            <div class="flex-66 competency-column-chart">
                <div class="competency-column-inner full-height">
                    <div class="im-skills-container">
                        <ul class="im-skills-chart" aria-label="Core skills levels">
                            <li class="im-skills-row"
                                v-for="(skill, i) in skills"
                                :key="`basicSkills-${i}`"
                                :aria-label="`${skill.name}: ${skill.level}%`"
                            >
                                <span class="im-skills-cell" aria-hidden="true">{{skill.name}}</span>
                                <span class="im-line-cell" :data-level="skill.level" aria-hidden="true"></span>
                            </li>
                        </ul>
                        <ul class="im-skills-legend">
                            <li class="im-legend"
                                v-for="(legend, i) in skillsLegend"
                                :key="`legend-${i}`">
                                <span class="legend-cell">{{ legend.title }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { skills, skillsLegend } from '@/data/skills';
</script>