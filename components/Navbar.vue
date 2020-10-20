<template>
    <aside class="component-navbar">
        <nav>
           <header>
                <img class="logo" src="@/assets/logo.png" />
                <h1 class="subtitle is-3">Raghav Misra</h1>
           </header>

            <section class="vertical-nav">
                <NuxtLink class="nav-item" v-for="(link, i) in links" :to="link.href" :key="i" v-text="link.title" />
            </section>

            <section class="float-bottom vertical-nav social-bar">
                <a class="nav-item" target="_blank" v-for="(social, i) in socials" :key="i" :href="social.href">
                    <b-icon :pack="social.generic ? 'fas' : 'fab'" :icon="social.icon" />
                </a>
            </section>
        </nav>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { title: "About Me", href: "/" },
                { title: "My Projects", href: "/projects" },
                { title: "Get in Touch", href: "/contact" }
            ],
            socials: [
                { icon: "github", href: "https://github.com/raghav-misra" },
                { icon: "linkedin", href: "https://linkedin.com/in/raghav--misra" },
                { icon: "gitlab", href: "https://gitlab.com/raghav-misra" },
                { icon: "envelope", href: "mailto:raghav.m2014@gmail.com", generic: true }
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
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--darkest);
}

nav {
    overflow: hidden;
    height: 100%;
    background: var(--info);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 0px 0px 20px var(--darkest);
}

nav > * {
    padding: 1rem 2rem;
}

.vertical-nav {
    display: flex;
    flex-direction: column;
}

.social-bar {
    margin: 1rem;    
}

.social-bar .nav-item {
    margin: 1rem;
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

.float-bottom {
    margin-top: auto;
}

.logo {
    width: 5rem;
}

@media screen and (max-width: 800px) {
    .vertical-nav {
        display: block;
        text-align: center;
    }

    .nav-item {
        margin: 0 1rem;
    }

    aside {
        padding-bottom: 0;
    }

    header {
        flex-direction: row;
    }

    .logo {
        margin-right: 1rem;
        width: 3.75rem;
    }

    header h1 {
        font-size: 1.75rem !important;
    }
}

@media screen and (max-width: 500px) {
    .component-navbar {
        margin: 0;
        padding: 0;
    }

    .vertical-nav:not(.social-bar) .nav-item {
        display: block;
    }

    nav {
        border-radius: 0 0 30px 30px;
    }
}
</style>