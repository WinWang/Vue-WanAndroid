module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            "/api": {
                target: "https://www.wanandroid.com",   // 要请求的后台地址
                changeOrigin: true,    // 是否跨域
                pathRewrite: {
                    "^/api": ""          // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
                }
            },
        }
    }
}