const path = require('path')

// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = 'development'

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === 'development'

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される(webpack)
  mode: MODE,
  entry: './webpack_test/index.js', //'./src/index.js',
  output: {
    path: `${__dirname}/www`,
    //publicPath: '/www/src', //ブラウザからバンドルにアクセスする際のパス
    //path: `${__dirname}/www`,
    filename: 'index.js',
  },
  module: {
    rules: [
      // CSSファイルの読み込み
      {
        // 対象となるファイルの拡張子
        test: /\.scss/, // .css
        // ローダー名
        use: [
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
          {
            loader: 'sass-loader', //sassファイルをcssに変換する
            options: {
              sourceMap: enabledSourceMap,
            },
          },
          //拡張子が.scssのファイルに対して、use配列で指定したLoaderが後ろから順番に適用
        ],
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        // 画像をBase64として取り込む
        loader: 'url-loader', // 拡張子が.scssのなかでURL参照をしている画像ファイルがあれば、url-loaderが適用
      },
    ],
  },

  // devtool: 'inline-source-map', //ブラウザでのデバッグ用にソースマップを出力する

  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く(webpack-dev-server)
  devServer: {
    contentBase: 'www',
    watchContentBase: true,
    contentBase: path.join(__dirname, 'www'), // HTML等コンテンツのルートディレクトリ
    open: true,
  },
}
