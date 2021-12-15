import React, { createContext, useState, useEffect } from 'react';
import { products_key } from '../constants/localStorageKeys';

export const defaultValue = {
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
};

const CartContext = createContext(defaultValue);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem(products_key)) || []);
  }, []);

  const saveProducts = items => {
    localStorage.setItem(products_key, JSON.stringify(items));
  };

  const addProduct = (product, amount) => {
    const newProducts = products.concat({ ...product, amount });
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  const removeProduct = id => {
    const newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
