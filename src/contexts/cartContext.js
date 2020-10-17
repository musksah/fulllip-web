import React, { createContext, useReducer } from 'react';
import { CartReducer, sumItems } from './cartReducer';

export const CartContext = createContext();

const storage = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
const initialState = { cartItems: storage, ...sumItems(storage) };


const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const increase = payload => {
        dispatch({ type: 'INCREASE', payload })
    }

    const decrease = payload => {
        dispatch({ type: 'DECREASE', payload })
    }

    const addProduct = payload => {
        console.log(payload);
        dispatch({ type: 'ADD_ITEM', payload })
    }

    const removeProduct = payload => {
        dispatch({ type: 'REMOVE_ITEM', payload })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR' })
    }

    const addExtra = () => {
        dispatch({ type: 'ADD_EXTRA' })
    }


    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        addExtra,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues} >
            { children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;