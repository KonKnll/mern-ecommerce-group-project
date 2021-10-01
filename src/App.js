// import {
// 	useState,
// 	useEffect,
// 	useContext
// } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Routing from './components/utilities/Routing';

import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { CustomizeProvider } from './context/CustomizeContext';

// import LazyLoad from 'react-lazyload';
// @lazyload({
//   height: 200,
//   once: true,
//   offset: 100
// })

const App = () => {
  //
  // const { user, setUser } = useContext(UserContext);
  // const { cart, setCart } = useContext(CartContext);

  // const readCookie = () => {
  //   const user = Cookies.get('user');
  //   if (user) {
  //     setUser(user);
  //   }
  //   const cart = Cookies.get('cart');
  //   if (cart) {
  //     setCart(cart);
  //   }
  // };

  // useEffect(() => {
  //   readCookie();
  // }, []);

  return (
    <>
      <Router>
        <CustomizeProvider>
          <CartProvider>
            <UserProvider>
              <ProductsProvider>
                <Routing />
              </ProductsProvider>
            </UserProvider>
          </CartProvider>
        </CustomizeProvider>
      </Router>
    </>
  );
};

export default App;
