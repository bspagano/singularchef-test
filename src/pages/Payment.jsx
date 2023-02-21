import React, { useContext, useEffect } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import '../sass/Payment.scss';
import ThemeContext from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(ThemeContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if(state.cart.length === 0){
      navigate('/');
    }
  }, [state.cart])
  const paypalOtions = {
    clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      history.push('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity);
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.name}</h4>
              <span>
                $
                {' '}
                {item.price * item.quantity}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-item">
            <div className="Payment-element">
              <h4>Total a cobrar:</h4>
              <span>
                $
                {' '}
                {handleSumTotal()}
              </span>
            </div>
          </div>
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOtions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment;