export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Raghav Misra - Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans&family=Fira+Code:wght@300&display=swap" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/css/all.min.css" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/style/global.css",
    "@/assets/style/content.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@/plugins/buefy.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxt/content"
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
