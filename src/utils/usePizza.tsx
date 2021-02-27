import { useContext } from 'react';
import OrderContext from '../components/OrderContext';

const usePizza = ({ pizzas, inputs }: any) => {
  const [order, setOrder] = useContext(OrderContext);
  const addToOrder = (orderedPizza) => {
    setOrder([...order, orderedPizza]);
  };

  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }

  return { order, addToOrder, removeFromOrder };
};

export default usePizza;
