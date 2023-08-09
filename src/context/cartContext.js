import { useReducer, createContext, useContext, useState } from "react";

export const cardActionType = {
  ADD_TO_CART: "addToCart",
  UPDATE_CARDS: "updateCards",
  SET_TOTAL_PRICE: "setTotalPrice",
  SET_TOTAL_COUNT: "setTotalCount",
};

// initial state
const initialState = {
  cards: [],
  totalPrice: 0,
  totalCount: 1,
};

const CartContext = createContext();

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case cardActionType.ADD_TO_CART:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    case cardActionType.UPDATE_CARDS:
      return {
        ...state,
        cards: action.payload,
      };

    case cardActionType.SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };

    case cardActionType.SET_TOTAL_COUNT:
    return {
      ...state,
      totalCount: action.payload,
    };

    default:
      return state;
  }
}

// context provider
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const state = useContext(CartContext);
  if (state === undefined) {
    throw new Error("useCartContext must be used in CartProvider");
  }
  return state;
};

export { CartContext, CartProvider, useCartContext };


// import { createContext, useReducer, useContext } from 'react';
// import cartReducer, { initialState } from './cartReducer';

// const CartContext = createContext(initialState);

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   const addToCart = (product) => {
//     const updatedCart = state.products.concat({ ...product, quantity: 1 });
//     updatePrice(updatedCart);

//     dispatch({
//       type: 'ADD_TO_CART',
//       payload: {
//         products: updatedCart,
//       },
//     });
//   };

//   const removeFromCart = (product) => {
//     const updatedCart = state.products.filter(
//       (currentProduct) => currentProduct.name !== product.name
//     );
//     updatePrice(updatedCart);

//     dispatch({
//       type: 'REMOVE_FROM_CART',
//       payload: {
//         products: updatedCart,
//       },
//     });
//   };

//   const increaseQuantity = (productIndex) => {
//     const updatedProducts = state.products.map((product, index) =>
//       index === productIndex ? { ...product, quantity: product.quantity + 1 } : product
//     );
//     updatePrice(updatedProducts);

//     dispatch({
//       type: 'UPDATE_QUANTITY',
//       payload: {
//         products: updatedProducts,
//       },
//     });
//   };

//   const decreaseQuantity = (productIndex) => {
//     const updatedProducts = state.products.map((product, index) =>
//       index === productIndex ? { ...product, quantity: product.quantity - 1 } : product
//     );
//     updatePrice(updatedProducts);

//     dispatch({
//       type: 'UPDATE_QUANTITY',
//       payload: {
//         products: updatedProducts,
//       },
//     });
//   };

//   const updatePrice = (products) => {
//     let total = 0;
//     products.forEach((product) => (total += product.price * product.quantity));

//     dispatch({
//       type: 'UPDATE_PRICE',
//       payload: {
//         total,
//       },
//     });
//   };

//   const value = {
//     total: state.total,
//     products: state.products,
//     addToCart,
//     removeFromCart,
//     increaseQuantity,
//     decreaseQuantity,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// const useCart = () => {
//       const context = useContext(CartContext)
    
//       if (context === undefined) {
//         throw new Error("useC must be used within CartContext")
//       }
    
//       return context
// }
    
// export default useCart;





