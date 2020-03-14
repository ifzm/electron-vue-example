module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                // options placed here will be merged with default configuration and passed to electron-builder
                publish: [
                    {
                        provider: 'generic',
                        url: 'https://ifzm.cn/apps/test/',
                    },
                    'github',
                ],
                appId: 'com.example.app',
                productName: 'electron-vue',
                win: {
                    icon: './public/app.ico',
                    // eslint-disable-next-line no-template-curly-in-string
                    artifactName: '${productName}_Setup_${version}.${ext}',
                },
            },
        },
    },
}
