<template>
    <section id="projects" class="component-page">
        <h1 class="title is-2">My Projects</h1>
        <div class="toggle-row">
            <span>Actual</span>
            <Toggle 
                on="success" 
                off="warning" 
                v-model="showFunProjects" 
            />
            <span>Fun</span>
        </div>

        <ProjectCard
            v-for="(project, i) in filteredProjects"
            :key="i"
            :project="project"
        />

        <div class="end-card" v-if="filteredProjects.length > 0">
            <h1 class="subtitle is-4">You've reached the beginning...</h1>
            <b-button type="is-warning" @click="scrollToTop">
				<b>Go back up?</b>
			</b-button>
        </div>

        <div class="end-card" v-if="filteredProjects.length === 0">
            <br>
            <h1 class="subtitle is-4">Toggle a switch at the top to see my projects.</h1>
            <b-button type="is-success" @click="resetView">
				<b>Reset View</b>
			</b-button>
        </div>
    </section>
</template>

<style scoped>
.toggle-row {
    display: flex;
    align-items: center;
}

.toggle-row > * {
    margin: 0 0.25rem;
}
</style>

<script>
export default {
    async asyncData({ $content }) {
        const projects = await $content("projects")
            .sortBy("date", "desc")
            .fetch();

        return { projects };
    },
    data() {
        return {
            showFunProjects: false
        }
    },
    methods: {
        scrollToTop() {
            document.querySelector(".component-page").scrollTop = 0;
        },
        resetView() {
            this.showActualProjects = true;
            this.showFunProjects = false;
        }
    },
    computed: {
        filteredProjects() {
            return this.projects.filter(project => !!project.fun === this.showFunProjects);
        }
    },
    head() {
        return {
            title: "Raghav Misra — Projects"
        };
    }
};
</script>
