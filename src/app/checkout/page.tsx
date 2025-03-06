'use client'; // Ensure this is a client-side component

import { useCart } from '../../contexts/CartContext'; // Import the useCart hook
import { useState } from 'react';
import Link from 'next/link';

const CheckoutPage = () => {
  const { cart } = useCart(); // Access the cart from context
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, session) => total + session.price, 0);
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    // In a real-world application, you would send this data to a backend for processing
    setTimeout(() => {
      alert('Your order has been placed!');
      setIsSubmitting(false);
      // Clear the cart or redirect to a confirmation page
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
        <Link href="/" className="mt-4 inline-block px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          Go Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      {/* Cart Items Review */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <div className="space-y-4">
          {cart.map((session) => (
            <div key={session.id} className="flex justify-between items-center border-b pb-4">
              <div className="flex flex-col">
                <span className="font-semibold">{session.title}</span>
                <span className="text-sm text-gray-600">
                  Date: {session.date instanceof Date && !isNaN(session.date.getTime()) ? session.date.toLocaleDateString() : 'N/A'}
                </span>
                <span className="text-sm text-gray-600">Time: {session.startTime} - {session.endTime}</span>
              </div>
              <div className="font-semibold">£{session.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Form for User Details */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Shipping Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={4}
          />
        </div>

        {/* Total Price */}
        <div className="text-right font-semibold text-lg">
          <span>Total: </span>
          <span>£{calculateTotal()}</span>
        </div>

        {/* Submit Button */}
        <div className="mt-4 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Processing...' : 'Place Order'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
