const CracoLessPlugin = require('craco-less');
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#cc8c2c' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
