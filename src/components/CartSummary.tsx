// src/components/CartSummary.tsx
'use client';  // Mark as client-side component

import { useCart } from '../contexts/CartContext';  // Import the useCart hook
import Link from 'next/link';

const CartSummary = () => {
  const { cart } = useCart();  // Get the cart from context

  return (
    <div className="fixed bottom-5 right-5 p-4 bg-[#fe0600] rounded-full shadow-lg text-white cursor-pointer">
      <Link href="/cart">
        <span className="text-xl font-bold">Cart</span>
        <span className="ml-2">{cart.length} session{cart.length !== 1 ? 's' : ''}</span> {/* Display session count */}
        <span className="ml-2">| £{cart.length * 20}</span> {/* Assuming each session costs $20, adjust as needed */}
      </Link>
    </div>
  );
};

export default CartSummary;