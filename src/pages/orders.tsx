import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import useForm from '../utils/useForms';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';
import usePizza from '../utils/usePizza';
import PizzaOrder from '../components/PizzaOrder';
import MenuItemStyles from '../styles/MenuItemStyles';
import calculateOrderTotal from '../utils/orderTotal';
import OrderStyles from '../styles/OrderStyles';

const OrderPage = ({ data }) => {
  const { values, updateValues } = useForm({
    name: '',
    email: '',
    maple: '',
  });
  const pizzas = data.pizzas.nodes;
  const {
    order,
    addToOrder,
    removeFromOrder,
    loading,
    error,
    message,
    submitOrder,
  } = usePizza({
    pizzas,
    values,
  });

  if (message) {
    return <p>{message}</p>;
  }
  return (
    <>
      <SEO title="Order pizzs" />
      <OrderStyles onSubmit={submitOrder}>
        <fieldset disabled={loading}>
          <legend>Your Info</legend>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={updateValues}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={updateValues}
          />
          <input
            id="maple"
            type="maple"
            name="maple"
            value={values.maple}
            onChange={updateValues}
            className="maple"
          />
        </fieldset>
        <fieldset disabled={loading}>
          <legend>Menu</legend>
          {pizzas.map((pizza) => (
            <MenuItemStyles key={pizza.id}>
              <Img
                width="50"
                height="50"
                fluid={pizza.image.asset.fluid}
                alt={pizza.name}
              />
              <div>
                <h2>{pizza.name}</h2>
              </div>
              <div>
                {['S', 'M', 'L'].map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => addToOrder({ id: pizza.id, size })}
                  >
                    {size} {formatMoney(calculatePizzaPrice(pizza.price, size))}
                  </button>
                ))}
              </div>
            </MenuItemStyles>
          ))}
        </fieldset>
        <fieldset disabled={loading} className="order">
          <legend>
            <PizzaOrder
              order={order}
              removeFromOrder={removeFromOrder}
              pizzas={pizzas}
            />
          </legend>
        </fieldset>
        <fieldset disabled={loading}>
          <h3>
            Your total is {formatMoney(calculateOrderTotal(order, pizzas))}
          </h3>
          <div>{error ? <p>Error: {error}</p> : ''}</div>
          <button
            type="submit"
            disabled={loading}
            onClick={(e) => submitOrder(e)}
          >
            {loading ? 'Order loading...' : 'Place order'}
          </button>
        </fieldset>
      </OrderStyles>
    </>
  );
};

export default OrderPage;

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        price
        image {
          asset {
            # fixed(width: 200, height: 200) {
            #   ...GatsbySanityImageFixed
            # }
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
