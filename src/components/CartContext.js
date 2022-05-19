import { createContext } from "react";
import { useState } from "react";

export const cartContext = createContext();

const { Provider } = cartContext;

export const CustomProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const addItem = (producto, quantity) => {
    if (isInCart(producto.id)) {
      const newCart = [...cart];
      for (const element of newCart) {
        if (element.item.id === producto.id) {
          element.quantity = quantity;
        }
      }
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          item: producto,
          quantity: quantity,
        },
      ]);
    }
  };

  const isInCart = (id) => {
    console.log('esta en el cart', cart.some((e) => e.item.id === id))
    return cart.some((e) => e.item.id === id);
  };

  const removeItem = (id) => {
    const newCart = [...cart].map((element) => element.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Provider value={{ cart, addItem, clearCart, removeItem }}>
      {children}
    </Provider>
  );
};

export default cartContext;