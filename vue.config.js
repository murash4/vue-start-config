const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@core': path.resolve(__dirname, 'src/core')
      }
    }
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      scss: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        prependData: `
          @import "~@/assets/scss/variables.scss";
          @import "~@/assets/scss/mixins.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
}
