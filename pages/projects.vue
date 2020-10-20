<template>
	<section class="component-page">
		<h1 class="title is-2">My Projects</h1>

		<ProjectCard 
			v-for="project in projects"
			:key="Number(project.date.split('/').join(''))"
			:project="project"
		/>
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
};
</script>