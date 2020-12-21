// const merge = require('webpack-merge')
const path = require("path");
// const pxtorem = require("postcss-pxtorem");
// const config  = require('./src/config')
// console.log(config)
// const proxy = require('./src/config/proxy')
const { VUE_APP_PAGENAME, NODE_ENV } = process.env;

const isPro = NODE_ENV === "production";
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  // 打包静态资源的文件夹
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: VUE_APP_PAGENAME,
  publicPath: "./",
  productionSourceMap: false,
  // 构建时是否开启多进程处理babel编译
  parallel: false,
  devServer: {
    disableHostCheck: true
    // proxy: proxy
  },
  chainWebpack: config => {
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.resolve.alias.set("@", resolve("./src"));
    config.resolve.alias.set("js", resolve("./src/assets/js"));

    // 基础库走第三方cdn
    // if(isPro) {
    // config.externals({
    //   vue: "Vue",
    //   axios: "axios",
    //   "vue-router": "VueRouter",
    //   vuex: "Vuex",
    //   "weixin-js-sdk": "wx"
    // });
    // }

    config.plugin("html").tap(args => {
      // 如果是生产环境打包,把index.html改成appHotel.html
      // args[0].filename = isPro ? `${VUE_APP_PAGENAME}.html` : "index.html";
      args[0].minify = {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false,
        //压缩html中的js
        minifyJS: false,
        //压缩html中的css
        minifyCSS: false
      };
      return args;
    });
  },
  configureWebpack: config => {
    // 打包环境去掉log
    if (isPro) {
      let compress =
        config.optimization.minimizer[0].options.terserOptions.compress;
      //压缩警告 默认为false
      compress.warnings = false;
      // 打包替换页面中alert ddd
      compress.global_defs = {
        "@alert": "console.log"
      };
      // 打包去除项目中的 debugger
      compress.drop_debugger = true;
      // 打包去除项目中的 conosle.log
      compress.pure_funcs = ["console.log"];
    }

    // config.optimization.splitChunks.cacheGroups.jssign = {
    //   name: 'jssign',
    //   minChunks: 2,
    //   test: /[\\/]lib[\\/]/,
    //   priority: 0,
    // }

    // core-js库在项目中每个文件都会加载到，所有code-js的代码提出到chunk-vendors-xxx.js中
    config.optimization.splitChunks.cacheGroups.vendors = {
      name: "chunk-vendors",
      test: /[\\/]node_modules[\\/]/,
      priority: -10,
      chunks: "all"
    };
  }
  // css: {
  //   loaderOptions: {
  //     less: {
  //       // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
  //       lessOptions: {
  //         modifyVars: {
  //           // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
  //           hack: `true; @import "${resolve("./src/assets/css/var.less")}";`
  //         }
  //       }
  //     },
  //     postcss: {
  //       plugins: [
  //         // 把px单位换算成rem单位
  //         pxtorem({
  //           rootValue: 100, // 换算的基数(设计图750的根字体为32)
  //           selectorBlackList: [".ig-"] // 要忽略的选择器并保留为px。
  //         })
  //       ]
  //     }
  //   }
  // }
};
