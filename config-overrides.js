const path = require('path')
const { override, adjustStyleLoaders, addWebpackAlias }  = require("customize-cra");

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

/* config-overrides.js */
module.exports = override(
  // ...其他配置...
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: './src/styles/variables.scss'
        }
      });
    }
  }),
  // 配置路径别名
  addWebpackAlias({
    "@": resolve("src"),
  })
  // ...其他配置...
)
