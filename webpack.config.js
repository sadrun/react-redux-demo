var path = require('path'),
    node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
    // context: __dirname + "/app/src/entry",
    entry: {
       index:"./src/index.js"
    }, //演示单入口文件
    output: {
        path: path.join(__dirname, '/dist'), //打包输出的路径
        filename: '[name].js', //打包后的名字
        publicPath:"/dist/"
    },
    module: {
        loaders: [{
                test: /\.js|\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=react'] //加载使用loader
            }
        ]
    },
    plugins: [
    ],
    watch: true
};