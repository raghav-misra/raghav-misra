<template>
    <div v-if="showPage" class="component-page bounce-enter-active">
        <div>
            <b class="error-text">404</b>
        </div>

        <h1 class="title is-1">
            You've hit a roadblock, my friend.
        </h1>

        <NuxtLink to="/" class="subtitle is-3">Let's go home.</NuxtLink>
    </div>
</template>

<style scoped>
.component-page {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center
}

a {
    color: var(--primary);
}

.error-text {
    display: inline-block;
    font-size: 6rem;
    color: var(--danger);
    border-bottom: 5px solid var(--danger);
    margin-bottom: 1rem;
    text-shadow: 0.25rem 0.25rem var(--warning);
}
</style>

<script>
export default {
    data() {
        return {
            showPage: false
        }
    },

    mounted() {
        console.log(this.$router);
        setTimeout(() => this.showPage = true, 750);
    }
}
</script>