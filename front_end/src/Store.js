import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  machine_list: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'MACHINES_LISTS':
      return { ...state, machine_list: action.payload };
    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}> {props.children} </Store.Provider>;
}
