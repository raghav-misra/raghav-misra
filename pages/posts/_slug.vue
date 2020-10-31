<template>
    <section class="component-page">
        <NuxtContent :document="post" />
    </section>
</template>

<script>
export default {
    async asyncData({ params, $content }) {
        const post = await $content("blog", params.slug).fetch();
        return { post };
    }
};
</script>

<style scoped>

</style>