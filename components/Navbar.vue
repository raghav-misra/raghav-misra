<template>
    <aside>
        <header>
            <img class="logo" src="@/assets/logo.png" />
            <h1 class="subtitle is-3">Raghav Misra</h1>

            <nav class="links">
                <NuxtLink class="nav-item" v-for="(link, i) in links" :to="link.href" :key="i" v-text="link.title" />
            </nav>
        </header>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { title: "Welcome", href: "/" },
                { title: "Projects", href: "/projects" },
                { title: "Get in Touch", href: "/contact" }
            ]
        };
    }
};
</script>

<style scoped>
aside {
    padding: 2rem;
}

header {
    height: 100%;
    background: var(--info);
    padding: 1rem;
    border-radius: 15px;
    text-align: center;
    min-width: 15rem;
}

nav {
    display: flex;
    flex-direction: column;
}

.nav-item {
    margin: 1rem 0;
    font-size: 1.125rem;
    transition: transform 0.25s ease-in-out;
}

.nav-item:hover, .nav-item:focus {
    transform: scale(1.125);
    color: var(--primary);
}

.logo {
    width: 5rem;
}

@media screen and (max-width: 800px) {
    nav {
        flex-direction: row;
        justify-content: center;
    }

    .nav-item {
        margin: 0 1rem;
    }

    aside {
        padding-bottom: 0;
    }
}
</style>