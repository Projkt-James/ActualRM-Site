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
    // vue-svg-loader
    build: {
        extend: (config) => {
          const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
    
          svgRule.test = /\.(png|jpe?g|gif|webp)$/;
    
          config.module.rules.push({
            test: /\.svg$/,
            loader: 'vue-svg-loader',
            options: {
                svgo: {
                    plugins: [
                        { cleanupIDs: false, mergePaths: false }
                    ]
                }
            }
          });
          config.resolve.alias["@assets"] = "~/assets";
          config.resolve.alias["@scss"] = "~/scss/";
        }
    },

    plugins: [{ src: "~/plugins/google-maps.js"}],
    modules: ['vue-scrollto/nuxt'],
    buildModules: ['@nuxt/typescript-build']
}
