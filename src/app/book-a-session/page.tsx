'use client';  // Ensure this is a client-side component

import { useCart } from '../../contexts/CartContext';  // Import the useCart hook
import Link from 'next/link';
import { useState } from 'react';

// Update the sessions array to include image, startTime, and endTime
const sessions = [
  {
    id: 1,
    title: "WEEKDAY 4-10PM",
    description: "A weekday session at Rampworx.",
    price: 12,
    available: true,
    startTime: "04:00 PM",
    endTime: "10:00 PM",
    image: "/images/weekday-300x300.jpg",  // Example image path
  },
  {
    id: 2,
    title: "WEEKEND 12-3PM",
    description: "The Weekends here, First Session at Rampworx Skatepark",
    price: 12,
    available: true,
    startTime: "12:00 PM",
    endTime: "3:00 PM",
    image: "/images/weekend-12-3-2.png",  // Example image path
  },
  {
    id: 3,
    title: "WEEKEND 3:15-6:15PM",
    description: "The Weekends here, First Session at Rampworx Skatepark",
    price: 12,
    available: true,
    startTime: "3:15 PM",
    endTime: "6:15 PM",
    image: "/images/weekend-315-1.png",  // Example image path
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
            {/* Display session image */}
            <div className="w-full flex justify-center mb-4">
              <img
                src={session.image}  // Use the image URL from the session object
                alt={session.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
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
          className="px-6 py-3 bg-[#fe0600] text-white rounded-full hover:bg-green-700 transition"
        >
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default BookASessionPage;
