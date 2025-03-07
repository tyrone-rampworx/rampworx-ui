'use client';

import { useCart } from '../../contexts/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';

// Validate Stripe key
const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!stripeKey) {
  console.error("Stripe publishable key is missing");
}

const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateTotal = () => {
    return Number(cart.reduce((total, session) => total + (session.price || 0), 0)).toFixed(2);
  };

  const handlePayment = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, email: formData.email }),
      });

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      const data = await response.json();
      if (data.url) {
        router.push(data.url); // Use Next.js navigation
      } else {
        throw new Error("Payment failed");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Error processing payment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormInvalid = !formData.firstName || !formData.lastName || !formData.email || cart.length === 0;

  if (cart.length === 0) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
        <p className="mt-2 text-gray-600">Looks like you haven't added anything yet.</p>
        <button 
          onClick={() => router.push('/')} 
          className="mt-4 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition"
        >
          Browse Sessions
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      {/* Cart Items */}
      <div className="mb-8">
        {cart.map((session, index) => {
          // Generate a unique key
          const uniqueKey = session.id ? `session-${session.id}` : `index-${index}-${Math.random()}`;

          return (
            <div key={uniqueKey} className="flex justify-between items-center border-b pb-4">
              <div>
                <p className="font-semibold">{session.title}</p>
                <p className="text-sm">
                  Date: {session.date ? new Date(session.date).toLocaleDateString() : "N/A"}
                </p>
                <p className="text-sm">
                  Time: {session.startTime || "N/A"} - {session.endTime || "N/A"}
                </p>
              </div>
              <div className="font-semibold">
                £{session.price ? session.price.toFixed(2) : "0.00"}
              </div>
            </div>
          );
        })}
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">First Name</label>
          <input 
            type="text" 
            name="firstName"
            value={formData.firstName} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Last Name</label>
          <input 
            type="text" 
            name="lastName"
            value={formData.lastName} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-300"
          />
        </div>
      </form>

      {/* Total Price */}
      <div className="text-right font-semibold text-lg">
        <span>Total: £{calculateTotal()}</span>
      </div>

      {/* Pay Now Button */}
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={handlePayment}
          disabled={isSubmitting || isFormInvalid}
          className={`px-6 py-3 ${
            isSubmitting || isFormInvalid ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#fe0600] hover:bg-red-600'
          } text-white rounded-full transition`}
        >
          {isSubmitting ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
