import { useState } from 'react';
import initialState from './initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = payload => {
    const cart = [...state.cart];
    const item = {... payload, quantity: 1};
    const currentCartState = state.cart.find(element => element.id === item.id);
    if(currentCartState){
      item.quantity += currentCartState.quantity;
      const index = cart.findIndex(element => element.id ===payload.id);
      cart[index] = item
    }else{
      cart.push(item);
    }
    setState({
      ...state,
      cart,
    });
  }

  const removeFromCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id),
    });
  };

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialState;