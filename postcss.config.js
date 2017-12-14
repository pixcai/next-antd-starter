module.exports = {
  plugins: [
    require('postcss-easy-import')({
      extensions: ['.css', '.less', '.scss']
    })
  ]
}
