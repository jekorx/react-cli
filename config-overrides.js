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
        minChunks: 2 // 三方库在逻辑代码中被调用两次(数字可以自定义)，将公共的代码提取出来
      })
    )
  }

  /* stylus config start */
  // 生产环境和开发环境共通部分
  const cssUse = [
    {
      loader: require.resolve('css-loader'),
      options: {
        modules: true, // 增加modules支持
        importLoaders: 1,
        minimize: true,
        localIdentName: '_[local]_[hash:base64:5]',
        sourceMap: process.env.GENERATE_SOURCEMAP !== 'false'
      }
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        sourceMap: process.env.GENERATE_SOURCEMAP !== 'false',
        plugins: [
          require('postcss-flexbugs-fixes'),
          require('autoprefixer')({
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
    },
    {
      loader: require.resolve('stylus-loader') // stylus-loader
    }
  ]
  // import时可省略stylus文件后缀.styl
  config.resolve.extensions.push('.styl')
  // 获取loader添加oneOf处
  const oneOf = config.module.rules[1].oneOf
  // 增加stylus文件，file loader exclude
  oneOf[oneOf.length - 1].exclude.push(/\.styl$/)
  // 添加到最后一个(file loader)之前，css loader之后
  oneOf.splice(oneOf.length - 1, 0, Object.assign({
    test: /\.styl$/,
    include: /src/
  }, env === 'production' ? {
      loader: require('extract-text-webpack-plugin').extract({
        fallback: {
          loader: require.resolve('style-loader'),
          options: { hmr: false }
        }, use: cssUse
      })
    } : {
      use: [require.resolve('style-loader')].concat(cssUse)
    }
  ))
  /* stylus config end */

  return compose(
    // mobx
    rewireMobx,
    // hot-loader
    rewireReactHotLoader
  )(config, env)
}
