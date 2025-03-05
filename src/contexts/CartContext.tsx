// src/contexts/CartContext.tsx

'use client';  // Add this line at the top to mark this file as a client component

import { createContext, useContext, useState, ReactNode } from 'react';

// Define the session type
interface Session {
  id: number;
  startTime: string;
  endTime: string;
  available: boolean; // Added availability status
}

// Define the context state
interface CartContextType {
  cart: Session[];
  addToCart: (session: Session) => void;
  removeFromCart: (sessionId: number) => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component that supplies the cart context to other components
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Session[]>([]);

  const addToCart = (session: Session) => {
    setCart((prevCart) => [...prevCart, session]);
  };

  const removeFromCart = (sessionId: number) => {
    setCart((prevCart) => prevCart.filter((session) => session.id !== sessionId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
