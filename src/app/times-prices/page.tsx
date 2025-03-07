'use client';

import { useState } from 'react';

const TimesPricesPage = () => {
  // Example pricing data
  const pricingData = [
    {
      activity: 'Skateboarding',
      price: '£7',
    },
    {
      activity: 'Scooter',
      price: '£7',
    },
    {
      activity: 'BMX',
      price: '£7',
    },
    {
      activity: 'Rollerblading',
      price: '£7',
    },
  ];

  // Opening hours data
  const openingHours = [
    { day: 'Monday', hours: '10:00 AM - 9:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM - 9:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM - 9:00 PM' },
    { day: 'Thursday', hours: '10:00 AM - 9:00 PM' },
    { day: 'Friday', hours: '10:00 AM - 11:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 6:00 PM' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">Opening Hours & Pricing</h1>

      {/* Opening Hours Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Opening Hours</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Day</th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Hours</th>
              </tr>
            </thead>
            <tbody>
              {openingHours.map((entry, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-3">{entry.day}</td>
                  <td className="px-6 py-3">{entry.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Hire Equipment</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Activity</th>
                <th className="px-6 py-3 text-left font-medium text-gray-600">Price</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((pricing, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-3">{pricing.activity}</td>
                  <td className="px-6 py-3">{pricing.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default TimesPricesPage;
