//@flow
const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'source-map', // for prod 'source-map',
    entry: [
        // activate HMR for React
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        path.join(__dirname, './src/main.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, './src'),
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                include: path.join(__dirname, './src'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:5]'
                        }
                    }
                    //{ loader: 'postcss-loader', options: { ident: 'postcss', plugins: () => [require('autoprefixer')] } }
                ]
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        // eslint-loader seem to try to access this.options which was removed.
        // As workaround use 
        new webpack.LoaderOptionsPlugin({ options: {} }),
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),
        // do not emit compiled assets that include errors
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
