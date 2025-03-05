'use client';  // Ensure this is a client-side component

import { useCart } from '../../contexts/CartContext';  // Import the useCart hook
import Link from 'next/link';
import { useState } from 'react';
import DatePicker from 'react-datepicker';  // Import the DatePicker component
import "react-datepicker/dist/react-datepicker.css";  // Import the DatePicker CSS

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
    availableDates: [
      new Date(2025, 2, 12),  // March 12, 2025 (Thursday)
      new Date(2025, 2, 13),  // March 13, 2025 (Friday)
      new Date(2025, 2, 14),  // March 14, 2025 (Saturday)
      // Add more Wednesdays, Thursdays, and Fridays for each week of the year
    ], // Manually specify available dates for this session
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
    availableDates: [
      new Date(2025, 2, 17),  // March 17, 2025
      new Date(2025, 2, 18),  // March 18, 2025
    ],  // Define available dates for this session
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
    availableDates: [
      new Date(2025, 2, 19),  // March 19, 2025
      new Date(2025, 2, 20),  // March 20, 2025
    ],  // Define available dates for this session
  },
  // Add more sessions as needed
];

const BookASessionPage = () => {
  const { addToCart } = useCart();  // Access the addToCart function to add sessions to the cart
  const [selectedSession, setSelectedSession] = useState<number | null>(null); // Track the selected session
  const [showDatePicker, setShowDatePicker] = useState(false); // Control the visibility of the date picker
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);  // Track the selected date for the session
  const [availableDates, setAvailableDates] = useState<Date[]>([]);  // Store available dates for the selected session

  const handleAddToCart = (sessionId: number) => {
    // Find the selected session based on the ID
    const selectedSession = sessions.find((session) => session.id === sessionId);
    if (selectedSession && selectedDate) {
      // Add the session with the selected date to the cart
      addToCart({ ...selectedSession, date: selectedDate }); // You can add the date to the session object
      setShowDatePicker(false); // Close the date picker after adding to cart
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date); // Update the selected date, which can be Date or null
  };

  const handleSessionSelect = (sessionId: number) => {
    const selectedSession = sessions.find((session) => session.id === sessionId);
    if (selectedSession) {
      setAvailableDates(selectedSession.availableDates);  // Set the available dates for the session
      setSelectedSession(sessionId);  // Store the selected session
      setShowDatePicker(true);  // Show the date picker when "Book Now" is clicked
    }
  };

  // Filter out dates that are not available for the selected session
  const isDateAvailable = (date: Date) => {
    return availableDates.some(
      (availableDate) => availableDate.toDateString() === date.toDateString()
    );
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
              onClick={() => handleSessionSelect(session.id)}
              className={`px-6 py-3 bg-[#fe0600] text-white rounded-full hover:bg-red-700 transition ${session.available ? '' : 'cursor-not-allowed'}`}
              disabled={!session.available}  // Disable the button if the session is not available
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Show DatePicker when a session is selected */}
      {showDatePicker && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Select a Date</h2>
            <DatePicker
              selected={selectedDate}  // Pass the selected date to the DatePicker
              onChange={handleDateChange}  // Handle date change, now accepts Date | null
              minDate={new Date()}  // Prevent past dates
              filterDate={isDateAvailable}  // Only allow available dates
              dateFormat="MMMM d, yyyy"  // Format the date display
              className="w-full p-3 border rounded-lg mb-4"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setShowDatePicker(false)}  // Close the date picker without adding
                className="px-4 py-2 bg-gray-400 text-white rounded-full"
              >
                Cancel
              </button>
              <button
                onClick={() => handleAddToCart(selectedSession!)}  // Add to cart with selected date
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
