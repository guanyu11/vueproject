const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const CopyWebpackPlugin=require("copy-webpack-plugin");
const VueLoaderPlugin=require("vue-loader/lib/plugin");

const PATH={
    app:path.join(__dirname,"../src/main.js"),
    build:path.join(__dirname,"../dist")
}

module.exports={
    entry:{
        app:PATH.app,
    },
    output:{
        path:PATH.build,
        filename:process.env.NODE_ENV=="development"?"[name].[hash:8].js":"[name].js"
    },
    resolve:{
        extensions:[".vue",".js"],
        alias:{}
    },
    //插件在去找模板文件时基于根目录，不需要../
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"index.html"
        }),
        new CopyWebpackPlugin([{
            context:path.join(__dirname,"../public"),
            from:"**/*",
            to:path.join(__dirname,"../dist"),
            ignore:["index.html"]
        }]),
        new VueLoaderPlugin(),


    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },{
                test:/\.js$/,
                loader:"babel-loader"
            },{
                test:/\.(jpg|png|gif|svg)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        limit:2048,
                        name:"img/[name].[ext]"
                    }
                }
                
            },{
                test:/\.(svg|woff|woff2|ttf|eot)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        name:"font/[name].[ext]"
                    }
                }
            }

        ]
    }

}