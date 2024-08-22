export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "nuxt-icon"],

  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },

  compatibilityDate: "2024-08-21",
});
