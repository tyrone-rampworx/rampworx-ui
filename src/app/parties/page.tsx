'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PartiesPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold">Host Your Birthday Party at Rampworx!</h1>
        <p className="mt-2 text-lg text-gray-600">The ultimate action sports party experience.</p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src="/images/parties/party1.jpg" 
            alt="Birthday Party at Rampworx" 
            width={600} 
            height={400} 
            className="rounded-2xl shadow-lg" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">What’s Included?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Exclusive use of our skatepark for your party</li>
                <li>Free rental equipment (skates, scooters, helmets)</li>
                <li>Dedicated party host</li>
                <li>Food & drink options available</li>
                <li>Private party room</li>
              </ul>
              <Button className="mt-6 w-full">Book Your Party</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
