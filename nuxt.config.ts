// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
    css: ['~/assets/styles/index.css'],
});
