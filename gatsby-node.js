import path from 'path';

const turnPizzasIntoPages = async ({ graphql, actions }) => {
  const pizzaTemplate = path.resolve('./src/templates/Pizza.tsx');
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
};

const turnToppingsIntoPages = async ({ graphql, actions }) => {
  const toppingsTemplate = path.resolve('./src/pages/pizzas.tsx');
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
        }
      }
    }
  `);

  data.toppings.nodes.forEach((topping) => {
    actions.createPage({
      path: `topping/${topping.name}`,
      component: toppingsTemplate,
      context: {
        topping: topping.name,
        // TO DO: reg ex for topping
        toppingRegex: `/${topping.name}/i`,
      },
    });
  });
};

export const createPages = async (params) => {
  // create pages dymanically
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPages(params),
  ]);
};
