

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": (preferDefault(require("/Users/richardturner/Development/tutorials/master-gatsby-working/gatsby/src/pages/404.tsx"))),
  "component---src-pages-beers-tsx": (preferDefault(require("/Users/richardturner/Development/tutorials/master-gatsby-working/gatsby/src/pages/beers.tsx"))),
  "component---src-pages-index-tsx": (preferDefault(require("/Users/richardturner/Development/tutorials/master-gatsby-working/gatsby/src/pages/index.tsx"))),
  "component---src-pages-orders-tsx": (preferDefault(require("/Users/richardturner/Development/tutorials/master-gatsby-working/gatsby/src/pages/orders.tsx"))),
  "component---src-pages-pizzas-tsx": (preferDefault(require("/Users/richardturner/Development/tutorials/master-gatsby-working/gatsby/src/pages/pizzas.tsx"))),
  "component---src-pages-slicemasters-tsx": (preferDefault(require("/Users/richardturner/Development/tutorials/master-gatsby-working/gatsby/src/pages/slicemasters.tsx"))),
  "component---src-templates-pizza-tsx": (preferDefault(require("/Users/richardturner/Development/tutorials/master-gatsby-working/gatsby/src/templates/Pizza.tsx"))),
  "component---src-templates-slicemaster-tsx": (preferDefault(require("/Users/richardturner/Development/tutorials/master-gatsby-working/gatsby/src/templates/Slicemaster.tsx")))
}

