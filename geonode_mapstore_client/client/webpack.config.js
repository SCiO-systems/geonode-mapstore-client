const path = require('path');
const assign = require('object-assign');

const themeEntries = {
    'themes/default': path.join(__dirname, 'themes', 'default', 'theme.less'),
    'themes/preview': path.join(__dirname, 'themes', 'preview', 'theme.less')
};
const extractThemesPlugin = require('./MapStore2/build/themes.js').extractThemesPlugin;

const DEV_SERVER_HOST = 'ERROR:INSERT_DEV_SERVER_HOST_IN_WEBPACK_CONFIG! eg: my-geonode-host.org';

module.exports = assign({}, require('./MapStore2/build/buildConfig')(
    {
        'ms2-geonode-api': path.join(__dirname, 'js', 'api')
    },
    themeEntries,
    {
        base: __dirname,
        dist: path.join(__dirname, 'dist'),
        framework: path.join(__dirname, 'MapStore2', 'web', 'client'),
        code: [path.join(__dirname, 'js'), path.join(__dirname, 'MapStore2', 'web', 'client')]
    },
    extractThemesPlugin,
    false,
    '/static/mapstore/dist/',
    '.msgapi'
), {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        contentBase: [
            path.join(__dirname),
            path.join(__dirname, '..', 'static')
        ],
        setup: function(app) {
            const hashRegex = /\.[a-zA-Z0-9]{1,}\.js/;
            app.use(function(req, res, next) {
                // remove hash from requests to use the local js
                if (req.url.indexOf('/static/geonode/js/ms2/utils/') !== -1
                || req.url.indexOf('/ms2-geonode-api') !== -1) {
                    req.url = req.url.replace(hashRegex, '.js');
                    req.path = req.path.replace(hashRegex, '.js');
                    req.originalUrl = req.originalUrl.replace(hashRegex, '.js');
                }
                next();
            });
        },
        proxy: [
            {
                context: [
                    '**',
                    '!**/static/mapstore/**',
                    '!**/static/geonode/js/ms2/utils/**',
                    '!**/geonode/js/ms2/utils/**',
                    '!**/MapStore2/**',
                    '!**/node_modules/**'
                ],
                target: `https://${DEV_SERVER_HOST}`,
                secure: false,
                changeOrigin: true,
                headers: {
                    host: DEV_SERVER_HOST
                }
            },
            {
                context: [
                    '/static/mapstore/MapStore2/web/client/translations/**',
                    '/static/geonode/js/ms2/utils/**'
                ],
                target: 'http://localhost:8081',
                pathRewrite: {
                    '/static/mapstore/MapStore2/web/client/translations/': '/MapStore2/web/client/translations/',
                    '/static/geonode/js/ms2/utils/': '/geonode/js/ms2/utils/'
                }
            }
        ]
    }
});
