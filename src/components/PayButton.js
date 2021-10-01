import { useState } from 'react';

import PayPal from '../components/utilities/PayPal';

const PayButton = ({ fixedTotalPrice }) => {
  const [checkout, setCheckout] = useState(false);
  return (
    <>
      {checkout ? (
        <PayPal fixedTotalPrice={fixedTotalPrice} />
      ) : (
        <button className="btn btn-primary" onClick={() => setCheckout(true)}>
          Checkout
        </button>
      )}
      {/* {paid && paid
        ? window.alert('Thank you for purchasing our products')
        : window.alert('Something went wrong please try again')} */}
    </>
  );
};

export default PayButton;
