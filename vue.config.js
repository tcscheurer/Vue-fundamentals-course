module.exports = {
  /*
  When using the Vue cli this is how you do custom Webpack config
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.coffee$/,
          use: ['coffee-loader'],
        }
      ]
    }
  }

  // OR.. (Rule overwriting)

  configureWebpack: (config) => {
    config.module.rules.push(
       {
          test: /\.coffee$/,
          use: ['coffee-loader'],
        }
    );
      const newRule = someNewLoaderRule

      //Find rule, splice it, replace it
      // Can also use webpack chain
  }
  */
  devServer: {
    proxy: {
      '/api' : {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
}
