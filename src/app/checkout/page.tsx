'use client'; // Ensure this is a client-side component

import { useCart } from '../../contexts/CartContext'; // Import the useCart hook
import { useState } from 'react';
import Link from 'next/link';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart(); // Access the cart from context
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [town, setTown] = useState('');
  const [county, setCounty] = useState('');
  const [postcode, setPostcode] = useState('');
  const [country, setCountry] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, session) => total + session.price, 0).toFixed(2);
  };

  // Validate email format
  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Simulate order processing
    setTimeout(() => {
      alert('Your order has been placed!');
      clearCart(); // Clears the cart
      setIsSubmitting(false);
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
            <div key={session.id} className="flex justify-between items-center border-b pb-4 px-4 py-2 bg-[#fe0600] rounded-lg">
              <div className="flex flex-col text-white">
                <span className="font-semibold text-white">{session.title}</span>
                <span className="text-sm text-white">
                  Date: {session.date ? new Date(session.date).toLocaleDateString() : 'N/A'}
                </span>
                <span className="text-sm text-white">Time: {session.startTime} - {session.endTime}</span>
              </div>
              <div className="font-semibold">£{session.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Form for User Details */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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

        {/* Billing Address Fields */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Billing Address</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Street Number</label>
              <input type="text" value={streetNumber} onChange={(e) => setStreetNumber(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Street Name</label>
              <input type="text" value={streetName} onChange={(e) => setStreetName(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Town</label>
              <input type="text" value={town} onChange={(e) => setTown(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">County</label>
              <input type="text" value={county} onChange={(e) => setCounty(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Postcode</label>
              <input type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
        </div>

        {/* Total Price */}
        <div className="text-right font-semibold text-lg">
          <span>Total: </span>
          <span>£{calculateTotal()}</span>
        </div>
              {/* Pay Now Button */}
        <div className="mt-4 text-center">
          <button
            type="button"
            className="px-6 py-3 bg-[#fe0600] text-white rounded-full hover:bg-[#d40500] transition"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
