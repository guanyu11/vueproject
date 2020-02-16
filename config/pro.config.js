 const path=   require("path");
 const extractTextWebpackPlugin= require("extract-text-webpack-plugin");
 const webpackMerge= require("webpack-merge");
 const baseConfig=  require("./base.config");

 const config=webpackMerge(config,{
     mode:"production",
    //  devtool:"#@cheap-module-source-map"
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use: [
                        "style-loader","css-loader","sass-loader"
                    ]
                })
               
            }
        ]
    },
    plugins:[
        new extractTextWebpackPlugin({
           filename:"css/[name].[hash:8].css" 
        })
    ]

 })
 module.exports=config;