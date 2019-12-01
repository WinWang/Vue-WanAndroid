// 最新写法
module.exports = {
    presets: ['@vue/app'],
    plugins: [
        [
            'import',
            {libraryName: 'vant', libraryDirectory: 'es', style: true},
            'vant'
        ]
    ]


}

