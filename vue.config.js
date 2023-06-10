const path = require('path');

const { defineConfig } = require('@vue/cli-service');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()],
    resolve: {
      alias: {
        '@/': path.resolve(__dirname, 'src'),
      },
    },
  },
});
