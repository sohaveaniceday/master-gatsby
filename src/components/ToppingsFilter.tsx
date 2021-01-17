import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    padding: 5px;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    background: var(--grey);
    align-items: center;
    border-radius: 2px;
    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: var(--yellow);
    }
  }
`;
const countPizzaInToppings = (pizzas) => {
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, currentTopping) => {
      const existingTopping = acc[currentTopping.id];
      if (existingTopping) {
        existingTopping.count += 1;
      } else {
        acc[currentTopping.id] = {
          id: currentTopping.id,
          name: currentTopping.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  const sortedToppings = Object.values(counts).sort(
    (a: any, b: any) => b.count - a.count
  );
  return sortedToppings;
};
const ToppingsFilter = ({ activeTopping }) => {
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);

  const toppingsWithCounts = countPizzaInToppings(pizzas.nodes);
  console.log('sortedToppings', toppingsWithCounts);

  return (
    <ToppingsStyles>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
      </Link>
      {toppingsWithCounts.map((topping: any) => (
        <Link key={topping.id} to={`/topping/${topping.name}`}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingsStyles>
  );
};
export default ToppingsFilter;
