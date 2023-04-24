import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  machine_list: localStorage.getItem('machineLists')
    ? JSON.parse(localStorage.getItem('machineLists'))
    : [],
  userDetails: localStorage.getItem('userDetails')
    ? JSON.parse(localStorage.getItem('userDetails'))
    : null,
  shipping_address: localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : null,
  payment_method: localStorage.getItem('paymentMethod')
    ? JSON.parse(localStorage.getItem('paymentMethod'))
    : null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'MACHINES_LISTS':
      return { ...state, machine_list: action.payload };
    case 'SIGN_UP':
      return { ...state, userDetails: action.payload };
    case 'SIGN_IN':
      return { ...state, userDetails: action.payload };
    case 'SET_ADDRESS':
      return { ...state, userDetails: action.payload };
    case 'SIGN_OUT':
      return { ...state, userDetails: null };
    case 'ADD_TO_CART':
      return { ...state, cartItems: action.payload };
    case 'REMOVE_FROM_CART':
      return { ...state, cartItems: action.payload };
    case 'SHIPPING_ADDRESS':
      return { ...state, shipping_address: action.payload };
    case 'PAYMENT_METHOD':
      return { ...state, payment_method: action.payload };
    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}> {props.children} </Store.Provider>;
}
