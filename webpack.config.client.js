// 
// Webpack -> bundles client code
// 
const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()


// Config Guide
//
// mode -> uses built in webpack optimizations, and sets value to production by default
// devtool -> specifies how source maps are generated
// entry -> specifies entry file for webpack to start bundling we will have main.js in our client folder
// output -> specifies output path for bundle code, we have it dist/bundle.js
// publicPath -> specify base path
// module -> sets regex rule for the file extension for transpilation

// Plugins
// HotModuleReplacementPlugin -> react-hot-reloader replacement
// NoEmitOnErrorsPlugin -> skipping emitting where are compile errors
//

const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    },  plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoEmitOnErrorsPlugin()
      ]
}

module.exports = config
