<template>
    <section class="component-page">
        <div>
            <vue-typed-js :showCursor="false" :strings="['solving problems, one line of code at a time.']">
                <h1 class="typing title"></h1>
            </vue-typed-js>
            <NuxtContent :document="mainContent" />
        </div>

        <div>
            <h1 class="title">my technical skill set</h1>
            <div class="skills">
                <SkillBar ref="skills" v-for="(skill, i) in skills" :key="i" :skill="skill" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const mainContent = await $content("about", "main").fetch();
        return { mainContent };
    },
    mounted() {
        const skillDivs = this.$refs.skills.map(s => s.$el);
        
        setTimeout(() => skillDivs.map(d => {
            if ((d.nextSibling && d.nextSibling.dataset.rating !== d.dataset.rating) || !d.nextSibling) {
                const bar = d.querySelector(".skill-display");
                bar.style.borderBottomRightRadius = "20px";
            }
        }), 1000);
    },
    data() {
        return {
            skills: [
                { name: "CSS3 + SASS", rating: 10 },
                { name: "ES6 + TypeScript", rating: 10 },
                { name: "Vue + Nuxt", rating: 10 },
                { name: "NodeJS + Express", rating: 9.5 },
                { name: "MongoDB Atlas", rating: 9.5 },
                { name: "React + Redux", rating: 9.0 },
                { name: "Python3 + Flask", rating: 8.5 }
            ]
        };
    }
};
</script>

<style scoped>
.skills {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 0px 25px var(--darkest);
}
</style>