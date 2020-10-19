<template>
    <main>
        <Navbar />
        <Nuxt />
    </main>
</template>

<style>
html, body, main {
    background-color: var(--dark) !important;
    height: 100vh;
    overflow-y: hidden !important;
}

#__layout {
    text-align: center;
}

main {
    max-width: 65rem;
    display: inline-flex;
}

@media screen and (max-width: 800px) {
    main {
        flex-direction: column;
    }
}

.component-page {
    text-align: left;
    flex: 1;
    margin: 2rem;
    padding-right: 2rem;
    overflow-y: scroll;
}

@media screen and (max-width: 500px) {
    .component-page {
        margin: 0;
        margin-top: 1rem;
        padding: 0 1.5rem;
    }
}
</style>