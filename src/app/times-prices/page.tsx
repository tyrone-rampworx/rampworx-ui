"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

const TimesPricesPage = () => {
  const termTimeHours = [
    { day: "Monday", hours: "CLOSED" },
    { day: "Tuesday", hours: "CLOSED" },
    { day: "Wednesday", hours: "4 PM - 10 PM" },
    { day: "Thursday", hours: "4 PM - 10 PM" },
    { day: "Friday", hours: "4 PM - 10 PM" },
    { day: "Saturday", hours: "12 PM - 6:15 PM" },
    { day: "Sunday", hours: "12 PM - 6:15 PM" },
  ];

  const holidayTimeHours = [
    { day: "Monday", hours: "CLOSED" },
    { day: "Tuesday", hours: "12 PM - 9:30 PM" },
    { day: "Wednesday", hours: "12 PM - 9:30 PM" },
    { day: "Thursday", hours: "12 PM - 9:30 PM" },
    { day: "Friday", hours: "12 PM - 9:30 PM" },
    { day: "Saturday", hours: "12 PM - 6:15 PM" },
    { day: "Sunday", hours: "12 PM - 6:15 PM" },
  ];

  const pricingData = [
    { activity: "Skateboarding", price: 7 },
    { activity: "Scooter", price: 7 },
    { activity: "BMX", price: 7 },
    { activity: "Rollerblading", price: 7 },
  ];

  const [showTermTime, setShowTermTime] = useState(true);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");

  const sortData = (data, key) => {
    return [...data].sort((a, b) => {
      if (a[key] < b[key]) return sortOrder === "asc" ? -1 : 1;
      if (a[key] > b[key]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  };

  const handleSort = (key) => {
    setSortOrder(sortKey === key && sortOrder === "asc" ? "desc" : "asc");
    setSortKey(key);
  };

  const filteredHours = sortKey
    ? sortData(showTermTime ? termTimeHours : holidayTimeHours, sortKey)
    : showTermTime
    ? termTimeHours
    : holidayTimeHours;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
        Opening Hours & Pricing
      </h1>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-6 mb-8">
        <button
          className={`text-xl px-8 py-4 font-bold rounded-lg transition ${
            showTermTime ? "bg-[#fe0600] text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setShowTermTime(true)}
        >
          Term Time
        </button>
        <button
          className={`text-xl px-8 py-4 font-bold rounded-lg transition ${
            !showTermTime ? "bg-[#fe0600] text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setShowTermTime(false)}
        >
          Holiday Time
        </button>
      </div>

      {/* Opening Hours Table */}
      <section className="mb-12">
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
            {showTermTime ? "Term Time Opening Hours" : "Holiday Time Opening Hours"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-[#fe0600] text-white">
                  <th
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => handleSort("day")}
                  >
                    Day <ArrowUpDown size={16} className="inline ml-1 text-white" />
                  </th>
                  <th className="px-6 py-3">Hours</th>
                </tr>
              </thead>
              <tbody>
                {filteredHours
                  .filter((entry) => entry.day.toLowerCase().includes(searchQuery))
                  .map((entry, index) => (
                    <tr key={index} className="border-b transition hover:bg-[#fe0600] hover:text-white">
                      <td className="px-6 py-3 hover:text-white">{entry.day}</td>
                      <td className="px-6 py-3 hover:text-white">{entry.hours}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section>
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
            Hire Equipment Pricing
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-[#fe0600] text-white">
                  <th
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => handleSort("activity")}
                  >
                    Activity <ArrowUpDown size={16} className="inline ml-1 text-white" />
                  </th>
                  <th
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => handleSort("price")}
                  >
                    Price (£) <ArrowUpDown size={16} className="inline ml-1 text-white" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingData
                  .filter((pricing) => pricing.activity.toLowerCase().includes(searchQuery))
                  .map((pricing, index) => (
                    <tr key={index} className="border-b transition hover:bg-[#fe0600] hover:text-white">
                      <td className="px-6 py-3 hover:text-white">{pricing.activity}</td>
                      <td className="px-6 py-3 hover:text-white">£{pricing.price}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimesPricesPage;
