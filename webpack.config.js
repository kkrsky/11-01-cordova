module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される(webpack)
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/www`,
    filename: 'index.js',
  },

  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く(webpack-dev-server)
  devServer: {
    contentBase: 'www',
    open: true,
  },
}
