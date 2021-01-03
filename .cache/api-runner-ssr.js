var plugins = [{
      plugin: require('/Users/richardturner/Development/tutorials/master-gatsby-working/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/richardturner/Development/tutorials/master-gatsby-working/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"ojt6blen","dataset":"production","watchMode":true,"token":"skXBQwiGqz89L9I8AcvJsak8SKIM4goNXObEzhc78Pj5K8jfqOOLhrvx8P7vUUZMYmsKfhkccThcEB7encNQk9zXke0JKVWnMIPzjx6dDrFCCHrx5Jl5E6vcKDmHfLDERHQcfR2lNlxU999hcBWo4hqAr3f307D6Cr4unbCUO3mRodCNaBgR"},
    },{
      plugin: require('/Users/richardturner/Development/tutorials/master-gatsby-working/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
