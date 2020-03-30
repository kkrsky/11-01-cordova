const MODE = 'development'
const entry = ['src/js/index.js', 'src/vendors/iziToast/iziToast.min.js']

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === 'development'

const config = {
  mode: MODE,
  entry: entry,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/, // 対象となるファイルの拡張子(scss)
        use: [
          // Sassファイルの読み込みとコンパイル
          'style-loader', // linkタグに出力する機能
          {
            loader: 'css-loader', //css-loader
            options: {
              url: true, // オプションでCSS内のurl()メソッドの取り込まない
              sourceMap: enabledSourceMap, // ソースマップの利用有無
              importLoaders: 2, // Sass+PostCSSの場合は2を指定
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
}

module.exports = config
