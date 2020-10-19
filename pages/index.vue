<template>
    <section class="component-page">
        <NuxtContent :document="introContent" />
    </section>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const introContent = await $content("articles", "index").fetch();
        return { introContent };
    }
};
</script>

<style scoped>
</style>