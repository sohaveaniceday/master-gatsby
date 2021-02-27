import calculatePizzaPrice from './calculatePizzaPrice';

const calculateOrderTotal = (order, pizzas) =>
  order.reduce((acc, currentOrder) => {
    const foundPizza = pizzas.find((pizza) => pizza.id === currentOrder.id);
    return acc + calculatePizzaPrice(foundPizza.price, currentOrder.size);
  }, 0);

export default calculateOrderTotal;
