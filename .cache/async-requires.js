// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-tsx": () => import("./../../../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-beers-tsx": () => import("./../../../src/pages/beers.tsx" /* webpackChunkName: "component---src-pages-beers-tsx" */),
  "component---src-pages-index-tsx": () => import("./../../../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-orders-tsx": () => import("./../../../src/pages/orders.tsx" /* webpackChunkName: "component---src-pages-orders-tsx" */),
  "component---src-pages-pizzas-tsx": () => import("./../../../src/pages/pizzas.tsx" /* webpackChunkName: "component---src-pages-pizzas-tsx" */),
  "component---src-pages-slicemasters-tsx": () => import("./../../../src/pages/slicemasters.tsx" /* webpackChunkName: "component---src-pages-slicemasters-tsx" */),
  "component---src-templates-pizza-tsx": () => import("./../../../src/templates/Pizza.tsx" /* webpackChunkName: "component---src-templates-pizza-tsx" */),
  "component---src-templates-slicemaster-tsx": () => import("./../../../src/templates/Slicemaster.tsx" /* webpackChunkName: "component---src-templates-slicemaster-tsx" */)
}

