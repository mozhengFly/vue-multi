const PageFunction = require('./pages')

// 获取配置的页面
let pages = PageFunction.getEntry('src/pages/')

console.log(pages)

module.exports = {
  productionSourceMap: false,
  pages
}
