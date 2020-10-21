<template>
	<section id="projects" class="component-page">
		<h1 class="title is-2">My Projects</h1>

		<ProjectCard
			v-for="project in projects"
			:key="Number(project.date.split('/').join(''))"
			:project="project"
		/>

		<div class="end-card">
			<h1 class="subtitle is-4">You've reached the beginning...</h1>
			<b-button type="is-warning" @click="scrollToTop">Go back up?</b-button>
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
	methods: {
		scrollToTop() {
			document.querySelector(".component-page").scrollTop = 0;
		}
	}
};
</script>