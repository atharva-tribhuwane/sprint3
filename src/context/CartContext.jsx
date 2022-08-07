import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart,setCart] = useState([]);
  const handlle =(payLoad)=>{
    setCart(payLoad)
  }
  return <CartContext.Provider value={{cart, handlle}}>{children}</CartContext.Provider>;
};
