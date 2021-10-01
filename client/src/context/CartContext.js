import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [localCart, setLocalCart] = useState([]);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const getLocalCart = async () => {
      try {
        const { fetchedCart } = localStorage.getItem('cart');
        if (fetchedCart === null) {
          console.log('\nNo existing cart from Local');
          return;
        } else {
          const { cart } = JSON.parse(localStorage.getItem('cart'));
          console.log('\nCart context from Local:', cart);
          setLocalCart(cart);
        }
      } catch (err) {
        console.log('\nCart get ERROR: ', err);
      }
    };
    getLocalCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart: localCart,
        setCart: setLocalCart,
        count,
        setCount,
        done,
        setDone,
      }}>
      {children}
    </CartContext.Provider>
  );
};
