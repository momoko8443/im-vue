module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    },
    productionSourceMap: false,
    lintOnSave: false,
    runtimeCompiler: true

}