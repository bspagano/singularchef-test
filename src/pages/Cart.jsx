import React, { useEffect } from 'react'
import ThemeContext from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import Checkout from '../components/Checkout';
export default function Cart() {
  const { state } = React.useContext(ThemeContext);
  const navigate = useNavigate();
  useEffect(() => {
    if(state.cart.length === 0){
      navigate('/');
    }
  }, [state.cart])
  return (
    <>
      <Checkout />
    </>
  )
}
