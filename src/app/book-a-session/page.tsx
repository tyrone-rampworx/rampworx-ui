'use client';  // Ensure this is a client-side component

import { useCart } from '../../contexts/CartContext';  // Import the useCart hook
import Link from 'next/link';
import { useState } from 'react';

// Update the sessions array to include startTime and endTime
const sessions = [
  {
    id: 1,
    title: "Coaching Session",
    description: "A 1-hour coaching session with an experienced instructor to improve your skills.",
    price: 50,
    available: true,
    startTime: "10:00 AM",
    endTime: "11:00 AM",
  },
  {
    id: 2,
    title: "Party Booking",
    description: "Book a party at Rampworx Skatepark for your special event!",
    price: 200,
    available: true,
    startTime: "1:00 PM",
    endTime: "3:00 PM",
  },
  {
    id: 3,
    title: "Event Session",
    description: "Join an event at Rampworx Skatepark and compete with others.",
    price: 30,
    available: true,
    startTime: "5:00 PM",
    endTime: "6:00 PM",
  },
  // Add more sessions as needed
];

const BookASessionPage = () => {
  const { addToCart } = useCart();  // Access the addToCart function to add sessions to the cart
  const [selectedSession, setSelectedSession] = useState<number | null>(null); // Track the selected session
  
  const handleAddToCart = (sessionId: number) => {
    // Find the selected session based on the ID
    const selectedSession = sessions.find(session => session.id === sessionId);
    if (selectedSession) {
      addToCart(selectedSession);  // Add session to the cart context
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Book a Session</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sessions.map((session) => (
          <div
            key={session.id}
            className={`bg-white p-6 rounded-lg shadow-lg ${session.available ? '' : 'opacity-50'}`}
          >
            <h3 className="text-2xl font-semibold mb-2">{session.title}</h3>
            <p className="text-gray-600 mb-4">{session.description}</p>
            <p className="font-bold text-lg mb-4">${session.price}</p>

            {/* Availability Status */}
            <p className={`${session.available ? 'text-green-500' : 'text-red-500'} mb-4`}>
              {session.available ? "Available" : "Not Available"}
            </p>

            {/* Start and End Time */}
            <p className="text-gray-600 mb-4">
              Time: {session.startTime} - {session.endTime}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(session.id)}
              className={`px-6 py-3 bg-[#fe0600] text-white rounded-full hover:bg-red-700 transition ${session.available ? '' : 'cursor-not-allowed'}`}
              disabled={!session.available}  // Disable the button if the session is not available
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/cart"
          className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default BookASessionPage;
