const path = require('path')
const webpack = require('webpack')
const { compose } = require('react-app-rewired')
const rewireMobx = require('react-app-rewire-mobx')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const { dependencies } = require('./package.json')

const resolve = function (dir) {
  return path.resolve(__dirname, 'src', dir)
}

module.exports = function (config, env) {
  // 别名
  let alias = config.resolve.alias
  alias["@src"] = resolve('')
  alias["@api"] = resolve('api')
  alias["@store"] = resolve('store')
  alias["@routes"] = resolve('routes')
  alias["@pages"] = resolve('pages')
  alias["@layouts"] = resolve('layouts')
  alias["@components"] = resolve('components')
  alias["@styles"] = resolve('assets/styles')
  alias["@images"] = resolve('assets/images')

  // 提取公共模块
  if (env === 'production') {
    let main = config.entry.slice()
    config.entry = {
      // 尽可能的包含组件中的依赖，例如：antd依赖immutable，需将immutable提取
      vendors: Object.keys(dependencies).concat(['react-router'/* , 'immutable' */]),
      main
    }
    config.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: 'static/js/vendors.[chunkhash:8].js',
        minChunks: 2  // 三方库在逻辑代码中被调用两次(数字可以自定义)，将公共的代码提取出来
      })
    )
  }

  /* css-modules config start */
  let cssUse = [{
    loader: require.resolve('css-loader'),
    options: {
      modules: true,
      importLoaders: 1,
      minimize: true,
      localIdentName: '_[local]_[hash:base64:5]',
      sourceMap: process.env.GENERATE_SOURCEMAP !== 'false'
    }
  },{
    loader: require.resolve('postcss-loader'),
    options: {
      ident: 'postcss',
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        autoprefixer({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9' // React doesn't support IE8 anyway
          ],
          flexbox: 'no-2009'
        })
      ]
    }
  }]
  // 省略后缀
  config.resolve.extensions.push('.modules.css')
  // 在"css" loader之前添加
  config.module.rules[1].oneOf.unshift({
    test: /\.modules.css$/,
    include: /src/,
    loader: env === 'production'
      ? require("extract-text-webpack-plugin").extract({
        fallback: {
          loader: require.resolve('style-loader'),
          options: { hmr: false }
        }, use: cssUse
      })
      : [require.resolve('style-loader')].concat(cssUse)
  })
  /* css-modules config end */

  return compose(
    // mobx
    rewireMobx,
    // hot-loader
    rewireReactHotLoader
  )(config, env)
}
