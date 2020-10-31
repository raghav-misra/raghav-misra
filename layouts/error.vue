<template>
    <div v-if="showPage" class="component-page bounce-enter-active">
        <div>
            <b class="error-text">404</b>
        </div>

        <h1 class="title is-1">
            You've hit a roadblock 🚧
        </h1>

        <div>
            <b-button tag="nuxt-link" to="/" class="redirect subtitle is-3" type="is-danger">Let's go home.</b-button>
            <NuxtLink :to="reportMissingPage" class="subtitle is-5">Report a broken link.</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.component-page {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center
}

.error-text {
    font-size: 6rem;
    color: var(--danger);
    border-bottom: 5px solid var(--danger);
    margin-bottom: 2rem;
    text-shadow: 0.25rem 0.25rem var(--warning);
}

.redirect {
    border-top: 5px solid var(--danger);
    color: var(--warning);
    padding-top: 1rem;
}

a.subtitle:not(.redirect) {
    color: var(--primary);
}

.error-text, .redirect {
    display: block;
    width: 20rem;
}
</style>

<script>
import qs from "qs";

export default {
    data() {
        return {
            showPage: false
        }
    },

    computed: {
        reportMissingPage() {
            return `/contact/?${qs.stringify({
                subject: "Missing page.",
                body: `The page ${this.$route.path} does not exist.`
            })}`;
        }
    },

    mounted() {
        setTimeout(() => this.showPage = true, 750);
    }
}
</script>