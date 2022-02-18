module.exports = {
    productionSourceMap: false,
    pages: {
        'main': {
            entry: 'src/pages/main/index.js',
            template: 'public/index.html',
            title: 'Main Page',
            chunks: ['chunk-main-common']
        },
        'tip': {
            entry: 'src/pages/tip/index.js',
            template: 'public/index.html',
            title: 'Tip Page',
            chunks: ['chunk-tip-common']
        }
    },
    chainWebpack: config => {
        // 删除默认的splitChunk
        config.optimization.delete('splitChunks')
    },
    configureWebpack: config => {
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    main: {
                        // 抽取所有入口页面都需要的公共chunk
                        name: 'chunk-main-common',
                        chunks: 'initial',
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 1,
                        reuseExistingChunk: true,
                        enforce: true
                    },
                    tip: {
                        // 抽取所有入口页面都需要的公共chunk
                        name: 'chunk-tip-common',
                        chunks: 'initial',
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 1,
                        reuseExistingChunk: true,
                        enforce: true
                    }
                }
            }
        }
    }
}
