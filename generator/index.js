const package = require("./package.json");

module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    ...package
  })

  // vue-router
  if(options.router) {
    api.extendPackage({
      dependencies: {
        "vue-router": "^3.0.7"
      }
    });
    api.render({
      "./src/router/index.js": "../template/router/index.js"
    });

  }

  // vuex
  if(options.vuex) {
    api.extendPackage({
      dependencies: {
        vuex: "^3.0.1"
      }
    });
    api.render({
      "./src/store/index.js": "../template/store/index.js"
    });
  }


  // 复制并用 ejs 渲染 
  api.render('../template/base')
  api.render('../template/config')
  api.render('../template/env')

}
