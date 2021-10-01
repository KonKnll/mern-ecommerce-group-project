import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { FaHome } from 'react-icons/fa';

import ProductCard from '../components/ProductCard';

import { CartContext } from '../context/CartContext';

import PayButton from '../components/PayButton';

const CartView = () => {
  const history = useHistory();
  const { cart, setCart, setCount } = useContext(CartContext);

  const emptyCart = () => {
    localStorage.removeItem('cart');
    localStorage.clear();
    setCart([]);
    setCount(0);
    localStorage.setItem('cart', []);
    console.log(localStorage.getItem('cart'), 'cart from local after empting');
  };

  const shippingPrice = 9;

  const totalPrice = cart.reduce(function (accumulator, product) {
    return accumulator + product.price;
  }, 0);

  const fixedTotalPrice = parseFloat(totalPrice.toFixed(2));
  console.log('\t:: TOTAL PRICE: ', fixedTotalPrice, '€');

  // account:
  // sb-gdzi67765557@personal.example.com

  // pass:
  // L(-%8cd7

  return (
    <>
      <div className="container mb-5" id="cart-div">
        <div className="row">
          <h1 className="py-5 text-center">Shopping Cart</h1>
          {/* koumpia home / empty */}
          <div className="col-md-10 col-11 mx-auto">
            <button
              onClick={() => history.push('/')}
              className="btn btn-success m-2">
              <FaHome />
            </button>
            <button onClick={emptyCart} className="btn btn-primary mx-2">
              Empty Cart
            </button>
            <div className="row mt-5 gx-3">
              <div className="col-md-12 col-lg-8 col-11 mx-automb-lg-0 mb-5">
                <div className="p-4 shadow">
                  <h2>Cart ({cart.length} items)</h2>
                  <div className="row">
                    {cart.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                <div className="p-3 shadow bg-white">
                  <h2 className="mb-5">Summary</h2>
                  <div className="d-flex justify-content-between">
                    <p>Product Amount</p>
                    <p>{cart.length}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Shipping Charge</p>
                    <p>{shippingPrice.toFixed(2)} €</p>
                  </div>
                  <hr />
                  <div className="total amt d-flex justify-content-between font-weight-bold">
                    <p>The total amount</p>
                    <p>{fixedTotalPrice} €</p>
                  </div>
                  {
                    <PayButton
                      title={'Checkout'}
                      fixedTotalPrice={fixedTotalPrice}
                    />
                  }
                </div>

                <div className="mt-3 shadow">
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Omnis magni fuga saepe, nulla cupiditate repellendus.
                    </p>
                  </div>
                </div>

                <div className="mt-3 shadow p-3 bg-white">
                  <div className="pt-4">
                    <h5 className="mb-4">Expected delivery date</h5>
                    <p>{`5 to 10 days from today ${new Date().getDay()} - ${new Date().getMonth()} / ${new Date().getFullYear()}`}</p>
                    <p>
                      {`Between ${
                        new Date().getDay() + 5
                      } - ${new Date().getMonth()} / ${new Date().getFullYear()} and ${
                        new Date().getDay() + 10
                      } - ${new Date().getMonth()} / ${new Date().getFullYear()}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartView;
