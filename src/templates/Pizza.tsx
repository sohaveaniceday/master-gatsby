import { graphql } from 'gatsby';
import React from 'react';

const SinglePizzaPage = () => <p>Single pizza</p>;

export default SinglePizzaPage;

// this needs to be dynamic
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 900) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
