"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const patrons = [
  { name: "John Doe", amount: "$500", message: "Happy to support this cause!" },
  { name: "Jane Smith", amount: "$300", message: "Keep up the great work!" },
  { name: "Anonymous", amount: "$100", message: "Every bit counts!" },
];

export default function PatronsPage() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.h1
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Generous Patrons
      </motion.h1>

      <div className="grid gap-4">
        {patrons.slice(0, showAll ? patrons.length : 2).map((patron, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border border-gray-200 shadow-md rounded-2xl">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">{patron.name}</h2>
                <p className="text-gray-500">{patron.amount} donated</p>
                <p className="text-gray-700 mt-2">"{patron.message}"</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {patrons.length > 2 && (
        <div className="text-center mt-6">
          <Button onClick={() => setShowAll(!showAll)} className="px-4 py-2">
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
}
