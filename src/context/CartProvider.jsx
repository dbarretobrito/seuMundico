// src/context/CartProvider.jsx
import React, { useState, useEffect } from 'react';
import { CartContext } from './CartContext';

const CART_EXPIRATION_TIME = 10 * 60 * 1000; // 10 minutos

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    const cartTimestamp = localStorage.getItem('cartTimestamp');

    if (storedCartItems && cartTimestamp) {
      const timeSinceLastAccess = Date.now() - parseInt(cartTimestamp, 10);
      if (timeSinceLastAccess < CART_EXPIRATION_TIME) {
        return JSON.parse(storedCartItems);
      } else {
        localStorage.removeItem('cartItems');
        localStorage.removeItem('cartTimestamp');
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartTimestamp', Date.now().toString());
  }, [cartItems]);

  const addToCart = (item) => {
    const index = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id && cartItem.size === item.size
    );
    if (index >= 0) {
      const updated = [...cartItems];
      updated[index].quantity += item.quantity;
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (id, size) => {
    setCartItems(cartItems.filter(item => !(item.id === id && item.size === size)));
  };

  const clearCart = () => setCartItems([]);

  const updateQuantity = (id, size, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.size === size ? { ...item, quantity } : item
    ));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
