let glob = require('glob')

// 配置pages多页面获取当前文件夹下的html和js
function getEntry (globPath) {
  let vuePath = globPath + '**/*.vue'
  let entries = {}
  let all = glob.sync(vuePath)
  all.forEach(item => {
    // page 的入口
    let key = item.substring(globPath.length, item.length - '.vue'.length)
    // 模板来源
    let entry = item.replace('.vue', '.js')
    // 打包后文件名
    let filename = key + '.html'
    entries[key] = {
      entry,
      template: 'public/index.html',
      filename,
      title: '多页面配置demo',
      chunks: ['chunk-vendors', 'chunk-common', `${key}`]
    }
  })
  return entries
}

// 获取配置的页面
let pages = getEntry('src/pages/')

console.log(pages)

module.exports = {
  productionSourceMap: false,
  pages
}
