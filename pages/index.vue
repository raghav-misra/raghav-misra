<template>
    <section class="component-page">
        <div>
            <h1 class="title">solving problems, one line of code at a time.</h1>
            <NuxtContent :document="mainContent" />
        </div>

        <div>
            <h1 class="title">my technical skill set</h1>
            <SkillBar v-for="(skill, i) in skills" :key="i" :skill="skill" />
        </div>
    </section>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const mainContent = await $content("about", "main").fetch();
        return { mainContent };
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
</style>