const baseConfig= require("./base.config");
const webpackMerge=require ("webpack-merge");

const config =webpackMerge(baseConfig,{
    mode:"development",
    devtool:"cheap-module-eval-source-map",

    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                use:["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    devServer:{
        port:9008, 
        open:true
    }
})
module.exports=config;