export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],

  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },

  compatibilityDate: "2024-08-21",
});