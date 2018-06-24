const path = require('path')

module.exports = {
    entry: './src/test.js',

    output: {
        filename: 'compare.js',
        path: path.resolve(__dirname, 'build')
    },
};
