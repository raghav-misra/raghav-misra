export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: "static",
    analyze: true,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "Raghav Misra — Portfolio",
        meta: [{
            charset: "utf-8"
        },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        },
        {
            hid: "description",
            name: "description",
            content: "High-schooler, full-stack web developer, intern @ Hack+"
        }
        ],
        link: [{
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico"
        },
        {
            rel: "preload",
            href: "https://fonts.googleapis.com/css2?family=DM+Sans&family=Fira+Code:wght@300&display=swap",
            as: "style"
        },
        {
            rel: "preload",
            href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/css/all.min.css",
            as: "style"
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=DM+Sans&family=Fira+Code:wght@300&display=swap"
        },
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/css/all.min.css",
            media: "print",
            onload: "this.media = 'all';"
        }
        ],
        script: [{
            src: "https://www.google.com/recaptcha/api.js?render=explicit",
            async: "async",
            defer: "defer"
        }]
    },

    http2: {
        push: true
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        "@/assets/style/layout.css",
        "@/assets/style/global.css",
        "@/assets/style/content.css"
    ],

    pageTransition: "bounce",

    transpile: ["buefy"],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        "@/plugins/buefy.js",
        "@/plugins/vue-typed.js",
        "@/plugins/vue-global-events.js",
        "@/plugins/portal-vue.js"
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    generate: {
        fallback: "404.html"
    },

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        "@nuxt/content"
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    env: {
        RECAPTCHA_SITE_KEY: "6Le-g9oZAAAAAL7VhS32qldaZf5onhKWkW2N6Z02"
    },
};