<template>
    <section class="component-page">
        <h1 class="title is-2">Recent Blog Posts</h1>

        <div class="posts">
            <div class="post-link" v-for="post of posts" :key="post.slug">
                <header>
                    <NuxtLink :to="`/posts/${post.slug}`">{{ post.title }}</NuxtLink>
                    <b-tag type="is-warning">{{ formatDate(post.slug) }}</b-tag>
                </header>

                <div class="post-content">
                    <NuxtContent :document="post" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const posts = await $content("blog").fetch();
        return { posts };
    },

    methods: {
        formatDate(rawString) {
            const [ year, month, day ] = rawString.split("-");
            return [year, month, day].join("/");
        },
        trimBody(postBody) {
            return postBody.substring(0, Math.min(50, postBody.length));
        }
    }
};
</script>

<style scoped>
.posts {
    background: var(--info);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 0px 20px var(--darkest);
}

.post-link {
    padding: 1rem 2rem;
    transition: background 0.25s ease-in-out;
}

.post-link:hover {
    background: var(--darkest);
}

.post-link header {
    display: flex;
    align-items: center;
}

.post-link header .tag {
    font-size: 1rem;
    margin-left: auto;
}

.post-link header > a {
    font-size: 1.75rem;
}
</style>