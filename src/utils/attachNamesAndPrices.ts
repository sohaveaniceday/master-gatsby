import calculatePizzaPrice from './calculatePizzaPrice';
import formatMoney from './formatMoney';

const attachNamesAndPrices = (order, pizzas) =>
  order.map((item) => {
    const foundPizza = pizzas.find((pizza) => pizza.id === item.id);
    return {
      ...item,
      name: foundPizza.name,
      thumbnail: foundPizza.image.asset.fluid.src,
      price: formatMoney(calculatePizzaPrice(foundPizza.price, item.size)),
    };
  });

export default attachNamesAndPrices;
