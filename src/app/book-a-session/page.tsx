'use client';  // Ensure this is a client-side component

import { useCart } from '../../contexts/CartContext';  // Import the useCart hook
import Link from 'next/link';
import { useState } from 'react';
import DatePicker from 'react-datepicker';  // Import the DatePicker component
import "react-datepicker/dist/react-datepicker.css";  // Import the DatePicker CSS

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
    availableDates: [
      new Date(2025, 2, 12),
      new Date(2025, 2, 13),
      new Date(2025, 2, 14),
    ],
  },
  {
    id: 2,
    title: "WEEKEND 12-3PM",
    description: "The Weekends here, First Session at Rampworx Skatepark",
    price: 12,
    available: true,
    startTime: "12:00 PM",
    endTime: "3:00 PM",
    image: "/images/weekend-12-3-2.png",
    availableDates: [
      new Date(2025, 2, 17),
      new Date(2025, 2, 18),
    ],
  },
  {
    id: 3,
    title: "WEEKEND 3:15-6:15PM",
    description: "The Weekends here, First Session at Rampworx Skatepark",
    price: 12,
    available: true,
    startTime: "3:15 PM",
    endTime: "6:15 PM",
    image: "/images/weekend-315-1.png",
    availableDates: [
      new Date(2025, 2, 19),
      new Date(2025, 2, 20),
    ],
  },
];

const BookASessionPage = () => {
  const { addToCart } = useCart();
  const [selectedSession, setSelectedSession] = useState<number | null>(null); // Track selected session
  const [showDatePicker, setShowDatePicker] = useState(false); // Control DatePicker visibility
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Track selected date
  const [availableDates, setAvailableDates] = useState<Date[]>([]); // Available dates for the session
  const [showSessionDetails, setShowSessionDetails] = useState(false); // Show session details modal
  const [cartMessage, setCartMessage] = useState<string | null>(null); // State for the cart confirmation message

  const handleAddToCart = (sessionId: number) => {
    const selectedSession = sessions.find((session) => session.id === sessionId);
    if (selectedSession && selectedDate) {
      addToCart({ ...selectedSession, date: selectedDate });
      setShowDatePicker(false); // Close DatePicker after adding to cart
      setShowSessionDetails(false); // Close the modal after adding to cart

      // Set a success message
      setCartMessage(`${selectedSession.title} has been added to your cart!`);

      // Clear the success message after 3 seconds
      setTimeout(() => setCartMessage(null), 2000);
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSessionSelect = (sessionId: number) => {
    const selectedSession = sessions.find((session) => session.id === sessionId);
    if (selectedSession) {
      setAvailableDates(selectedSession.availableDates);
      setSelectedSession(sessionId);
      setShowSessionDetails(true); // Show the modal with session details and DatePicker
    }
  };

  const isDateAvailable = (date: Date) => {
    return availableDates.some(
      (availableDate) => availableDate.toDateString() === date.toDateString()
    );
  };

  const closeSessionDetails = () => {
    setShowSessionDetails(false); // Close the modal
    setShowDatePicker(false); // Also close the DatePicker
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
            <div className="w-full flex justify-center mb-4">
              <img
                src={session.image}
                alt={session.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{session.title}</h3>
            <p className="text-gray-600 mb-4">{session.description}</p>
            <p className="font-bold text-lg mb-4">${session.price}</p>
            <p className={`${session.available ? 'text-green-500' : 'text-red-500'} mb-4`}>
              {session.available ? "Available" : "Not Available"}
            </p>
            <p className="text-gray-600 mb-4">
              Time: {session.startTime} - {session.endTime}
            </p>

            <button
              onClick={() => handleSessionSelect(session.id)}
              className={`px-6 py-3 bg-[#fe0600] text-white rounded-full hover:bg-red-700 transition ${session.available ? '' : 'cursor-not-allowed'}`}
              disabled={!session.available}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Display Cart Confirmation Message in the center of the screen */}
      {cartMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
            {cartMessage}
          </div>
        </div>
      )}

      {/* Session Details Modal */}
      {showSessionDetails && selectedSession !== null && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Session Details</h2>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold">{sessions[selectedSession - 1].title}</h3>
              <img
                src={sessions[selectedSession - 1].image}
                alt={sessions[selectedSession - 1].title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p>{sessions[selectedSession - 1].description}</p>
              <p className="font-bold text-lg mt-2">${sessions[selectedSession - 1].price}</p>
              <p className="mt-2">Time: {sessions[selectedSession - 1].startTime} - {sessions[selectedSession - 1].endTime}</p>
            </div>

            {/* Date Picker inside the modal */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Select a Date</h4>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                minDate={new Date()} // Prevent past dates
                filterDate={isDateAvailable}
                dateFormat="MMMM d, yyyy"
                className="w-full p-3 border rounded-lg mb-4"
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={closeSessionDetails}
                className="px-4 py-2 bg-gray-400 text-white rounded-full"
              >
                Close
              </button>
              <button
                onClick={() => handleAddToCart(selectedSession)}
                className="px-4 py-2 bg-green-600 text-white rounded-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

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
