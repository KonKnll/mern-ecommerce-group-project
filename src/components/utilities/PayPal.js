import { useEffect, useState, useRef } from 'react';

const PayPal = ({ fixedTotalPrice }) => {
  console.log(typeof fixedTotalPrice, fixedTotalPrice, 'fixed price paypal');
  const [paid, setPaid] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Your description',
                amount: {
                  currency_code: 'EUR',
                  value: fixedTotalPrice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order, ':: paypal order');
        },
        onError: (err) => {
          console.error(err);
          //   setError(err),
        },
      })
      .render(paypal.current);
  }, [fixedTotalPrice]);

  if (paid) {
    return (
      <div>
        <b>Payment successful!</b>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <b>Error in processing payment! Please try again.</b>
      </div>
    );
  }

  // Default Render
  return (
    <div>
      <div ref={paypal} />
    </div>
  );
};

export default PayPal;
