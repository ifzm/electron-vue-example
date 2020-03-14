module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                // options placed here will be merged with default configuration and passed to electron-builder
                publish: ['github'],
                appId: 'com.example.app',
                productName: 'electron-vue-example',
                win: {
                    icon: './public/app.ico',
                },
            },
        },
    },
}
