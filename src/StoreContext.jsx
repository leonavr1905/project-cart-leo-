import React, { createContext, useReducer, useContext } from 'react';

const StoreContext = createContext();

// State awal sesuai Requirement
const initialState = {
  user: null,
  isAuthenticated: false,
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

function storeReducer(state, action) {
  switch (action.type) {
    case 'LOGIN': //
      return { ...state, isAuthenticated: true, user: action.payload };
    case 'LOGOUT': //
      return { ...initialState };
    case 'ADD_TO_CART': //
      const updatedCart = [...state.cart, action.payload];
      return {
        ...state,
        cart: updatedCart,
        totalItems: updatedCart.length,
        totalPrice: updatedCart.reduce((sum, item) => sum + item.price, 0),
      };
    case 'CLEAR_CART': //
      return { ...state, cart: [], totalItems: 0, totalPrice: 0 };
    default:
      return state;
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);