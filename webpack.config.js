const
    path                        = require('path'),
    webpack                     = require('webpack'),
    HtmlWebpackPlugin           = require('html-webpack-plugin'),
    ExtractTextPlugin           = require('extract-text-webpack-plugin'),
    OptimizeCssAssetsPlugin     = require('optimize-css-assets-webpack-plugin'),
    CopyWebpackPlugin           = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/app/Main.tsx', 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test:/\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader'],
                })
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {name: '[path][name].[ext]'},
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'app', 'index.html') }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({filename:'main.css'}),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new CopyWebpackPlugin([{
            from: './src/app/images/',
            to: './images/'
        }]),
    ]
};