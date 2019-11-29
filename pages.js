const glob = require('glob')
const fs = require('fs')
const path = require('path')

/**
 * 获取配置的多页面
 * @param globPath
 */
const getEntry = (globPath) => {
  let vuePath = globPath + '**/*.vue'
  let entries = {}
  let all = glob.sync(vuePath)
  all.forEach(item => {
    // page 的入口
    let key = item.substring(globPath.length, item.length - '.vue'.length)
    // 模板来源
    let entry = getJavascriptEntry(key, item)
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

/**
 * 递归创建目录 同步方法
 * @param dirname 需要创建的目录
 * @returns {boolean}
 */
function mkdirsSync (dirname) {
  if (fs.existsSync(dirname)) {
    return true
  } else if (mkdirsSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname)
    return true
  }
  return false
}

/**
 * 得到模板的入口文件-自动生成
 * @param key
 * @param filePath
 * @returns {string}
 */
function getJavascriptEntry (key, filePath) {
  const baseTempDirectory = '.temp'
  let entry = baseTempDirectory + '/' + key + '.js'
  // 创建目录
  mkdirsSync(baseTempDirectory + '/' + key.substring(0, key.lastIndexOf('/')))
  let tpl = fs.readFileSync('src/index.js', { encoding: 'utf-8' })
  let res = tpl.replace(new RegExp('\\$\\{vuePath\\}', 'g'), filePath.replace('src', '@'))
  // 写入内容
  fs.writeFileSync(entry, res, { encoding: 'utf-8' })
  return entry
}

module.exports = {
  getEntry
}
