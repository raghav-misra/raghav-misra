<template>
    <section id="projects" class="component-page">
        <h1 class="title is-2">My Projects</h1>
        <b-switch v-model="showActualProjects" type="is-warning">Actual Projects</b-switch>
        <b-switch v-model="showFunProjects" type="is-success">Fun Projects</b-switch>

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
            showActualProjects: true,
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
            return this.projects.filter(project => {
                if (project.fun && this.showFunProjects) return true;
                if (!project.fun && this.showActualProjects) return true;

                return false;
            });
        }
    },
    head() {
        return {
            title: "Raghav Misra — Projects"
        };
    }
};
</script>
