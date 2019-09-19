export default {

    srcDir: 'src/',
    mode: 'universal',

    env: {},
    head: {
        title: "Welcome!",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { "http-equiv": "X-UA-Compatible", content: "IE=edge"} 
        ]
    },
    plugins: [{ src: "~/plugins/google-maps.js"}],

    modules: ['vue-scrollto/nuxt'],
    buildModules: ['@nuxt/typescript-build']
}
