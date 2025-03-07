'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the session type
interface Session {
  id: number;
  title: string;
  description: string;
  price: number;
  available: boolean;
  startTime: string;
  endTime: string;
  image: string;
  availableDates: Date[];
  date?: Date; // Optional date property for the selected date
}

// Define the context state
interface CartContextType {
  cart: Session[];
  addToCart: (session: Session) => void;
  removeFromCart: (sessionId: number) => void;
  clearCart: () => void; // ✅ Added clearCart function
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component that supplies the cart context to other components
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Session[]>([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Load the cart from localStorage if it exists
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart)); // Store the cart in localStorage
  }, [cart]);

  const addToCart = (session: Session) => {
    setCart((prevCart) => [...prevCart, session]);
  };

  const removeFromCart = (sessionId: number) => {
    setCart((prevCart) => prevCart.filter((session) => session.id !== sessionId));
  };

  const clearCart = () => {
    setCart([]); // ✅ Clears the cart
    localStorage.removeItem('cart'); // ✅ Also remove from localStorage
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
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
