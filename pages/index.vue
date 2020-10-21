<template>
    <section class="component-page">
        <div class="index-heading">
            <h1 class="title is-2">
                Solving problems,<br>
                <vue-typed-js :strings="['one line of code at a time']">
                    <code class="title is-4">
                        <span class="typing"></span>
                    </code>
                </vue-typed-js>
            </h1>
            
            <NuxtContent :document="mainContent" />
        </div>

        <div>
            <h1 class="title">My Technical Skillset</h1>
            <div class="skills">
                <SkillBar v-for="(skill, i) in skills" :key="i" :skill="skill" />
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
.index-heading .typed-element {
    display: inline;
}

code.title {
    display: inline-block;
    color: var(--primary);
    margin-top: 0.5rem;
    border-radius: 10px;
    background: none;
    padding: 0;
}

code.title * {
    font-family: "Fira Code", monospace !important;
}
</style>