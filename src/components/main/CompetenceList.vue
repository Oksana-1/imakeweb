<template>
    <section class="vh-100" id="skills">
        <div class="flex-row full-height border-bg">
            <div class="flex-33 competency-column-angle">
                <div class="dark-bg full-height competency-column-inner">
                    <div class="im-common-title relative-parent white">Core Skills</div>
                </div>
            </div>
            <div class="flex-66 competency-column-chart">
                <div class="competency-column-inner full-height">
                    <div class="im-skills-container">
                        <ul class="im-skills-chart">
                            <li class="im-skills-row"
                                v-for="(skill, i) in skills"
                                :key="`basicSkills-${i}`">
                                <span class="im-skills-cell">{{skill.name}}</span>
                                <span class="im-line-cell" :data-level="skill.level"></span>
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

<script>
    export default {
        name: "CompetenceList",
        data() {
            return {
                skills: [
                    { name: 'HTML', level: 85 },
                    { name: 'CSS', level: 90 },
                    { name: 'JavaScript', level: 70 },
                    { name: 'TypeScript', level: 40 },
                    { name: 'Vue', level: 70 },
                    { name: 'React', level: 20 },
                    { name: 'Jest', level: 50 }
                ],
                skillsLegend: [
                    { title: 'Novice' },
                    { title: 'Beginner' },
                    { title: 'Intermediate' },
                    { title: 'Advanced' },
                    { title: 'Expert' }
                ]
            }
        }
    }
</script>