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
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          leaflet: {
            name: 'leaflet',
            test: /[\\/]node_modules[\\/]leaflet[\\/]/,
            reuseExistingChunk: true,
          },
          mdi: {
            name: 'mdi',
            test: /[\\/]node_modules[\\/]@mdi/,
            reuseExistingChunk: true,
          },
          vue: {
            name: 'vue',
            test: /[\\/]node_modules[\\/]vue[\\/]/,
            reuseExistingChunk: true,
          },
          vue18n: {
            name: 'vue18n',
            test: /[\\/]node_modules[\\/]vue-i18n/,
            reuseExistingChunk: true,
          },
          vue2leaflet: {
            name: 'vue2leaflet',
            test: /[\\/]node_modules[\\/]vue2-leaflet/,
            reuseExistingChunk: true,
          },
          vueRouter: {
            name: 'vueRouter',
            test: /[\\/]node_modules[\\/]vue-router[\\/]/,
            reuseExistingChunk: true,
          },
          vuetify: {
            name: 'vuetify',
            test: /[\\/]node_modules[\\/]vuetify/,
            reuseExistingChunk: true,
          },
          vuex: {
            name: 'vuex',
            test: /[\\/]node_modules[\\/]vuex[\\/]/,
            reuseExistingChunk: true,
          },
        },
      },
    },
  },
});
