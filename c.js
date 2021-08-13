const TerserPlugin = require ('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

 // Rules configuration
 const imageFiles = {
    //checks file type
    test: /\.(png|jpg)$/,
    // generates a new file
    type: 'asset',
    parser: {
        dataUrlCondition: {
            maxSize: 3 * 1024 // 3 kilobtyes
        }
    }
}

const miniCssLoader = {
    test: /\.css$/,
    use:[ MiniCssExtractPlugin.loader, 'css-loader']
}

module.export = function webpackConfig(config, options){
    // options.dev = true
   
    config.module.rules.push(imageFiles)
    config.module.rules.push(miniCssLoader)
    
    // Plugins config
    config.plugins.push(new TerserPlugin())
    config.plugins.push(new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    }))

    return config
}