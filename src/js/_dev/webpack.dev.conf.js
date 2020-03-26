const path = require('path')
const internalIp = require('internal-ip')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = 'development'

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === 'development'

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される(webpack)
  mode: MODE,
  //entry: './webpack_test/bootstrap_add_test_src/src_practical/index.js',
  entry: [
    //`${__dirname}/src/js/index.js`,

    `${__dirname}/index_dev.js`, //webpack.dev.conf.jsファイルから見た相対パス
    `${__dirname}/dev_depend.js`,
    // `${__dirname}/src/js/bluetooth.js`,
  ],
  output: {
    //path: `${__dirname}/webpack_test/bootstrap_add_test_src/dist`,
    path: `${__dirname}/www`,
    filename: 'index.js',
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../../../src'),
    },
  },
  module: {
    rules: [
      {
        // 対象となるファイルの拡張子(scss)
        test: /\.(scss|css)$/,
        // Sassファイルの読み込みとコンパイル
        use: [
          // linkタグに出力する機能
          'style-loader',
          //css-loader
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込まない
              url: true,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,
              // Sass+PostCSSの場合は2を指定
              importLoaders: 2,
            },
          },

          // Sassをバンドルするための機能
          {
            loader: 'sass-loader',
            options: {
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        // 画像をBase64として取り込む
        loader: 'url-loader', // 拡張子が.scssのなかでURL参照をしている画像ファイルがあれば、url-loaderが適用
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/p001/p001.html',
      filename: 'p001.html',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],

  // source-map方式でないと、CSSの元ソースが追跡できないため
  devtool: 'inline-source-map',

  // devtool: 'inline-source-map', //ブラウザでのデバッグ用にソースマップを出力する

  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く(webpack-dev-server)
  devServer: {
    //contentBase: '/jQuery_test/dist',
    watchContentBase: true,
    contentBase: path.join(__dirname, 'www'), // HTML等コンテンツのルートディレクトリ
    open: true,
    //host: internalIp.v4.sync(), // <- IPアドレス自動割り当て
    //port: 8080,
  },
}

/* before bootstrap 応用編適応前
rules: [
      // CSSファイルの読み込み
      {
        // 対象となるファイルの拡張子
        test: /\.(scss|css)$/, // .css
        // ローダー名
        use: ExtractTextPlugin.extract([
          // linkタグに出力する機能
          'style-loader',
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: true,
              // ソースマップを有効にする
              sourceMap: enabledSourceMap,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          // PostCSSのための設定
          {
            loader: 'postcss-loader',
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: true,
              // ベンダープレフィックスを自動付与する
              plugins: () => [require('autoprefixer')],
            },
          },
          {
            loader: 'sass-loader', //sassファイルをcssに変換する
            options: {
              sourceMap: enabledSourceMap,
            },
          },
          //拡張子が.scssのファイルに対して、use配列で指定したLoaderが後ろから順番に適用
        ]),
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        // 画像をBase64として取り込む
        loader: 'url-loader', // 拡張子が.scssのなかでURL参照をしている画像ファイルがあれば、url-loaderが適用
      },
    ]
*/

/* add　bootstrap 応用編適応
 rules: [
      {
        // 対象となるファイルの拡張子(scss)
        test: /\.(scss|css)$/,
        // Sassファイルの読み込みとコンパイル
        use: ExtractTextPlugin.extract([
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込まない
              url: false,
              // ソースマップの利用有無
              sourceMap: true,
              // Sass+PostCSSの場合は2を指定
              importLoaders: 2,
            },
          },
          // PostCSSのための設定
          {
            loader: 'postcss-loader',
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: true,
              // ベンダープレフィックスを自動付与する
              plugins: () => [require('autoprefixer')],
            },
          },
          // Sassをバンドルするための機能
          {
            loader: 'sass-loader',
            options: {
              // ソースマップの利用有無
              sourceMap: true,
            },
          },
        ]),
      },
    ]
*/
