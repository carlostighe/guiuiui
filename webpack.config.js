/* eslint-disable indent */
/* eslint-disable arrow-body-style */
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
    return {

        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].bundle.css',
                chunkFilename: '[id].css'
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        entry: path.resolve(__dirname, 'src', 'index.js'),
        mode: 'development',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            open: true,
            client: {
                logging: "info",
                // Can be used only for `errors`/`warnings`
                //
                // overlay: {
                //   errors: true,
                //   warnings: true,
                // }
                overlay: true,
                progress: true,
            },
            port: 9000,
            historyApiFallback: true,
            hot: true
        },
        module: {
            rules: [
                {
                    test: /\.(jsx|js)$/,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    "targets": "defaults"
                                }],
                                '@babel/preset-react',
                            ]
                        }
                    }]
                },
                {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
},
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                    ],
                },
                {
                    test: /\.(csv)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: './csv',
                            },
                        },
                    ],
                },
                
            ]
        }
    }
}
