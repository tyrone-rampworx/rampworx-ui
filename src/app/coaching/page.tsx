'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CoachingPage() {
  return (
    <div className="container mx-auto py-16 px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-black">Rampworx Coaching</h1>
        <p className="mt-4 text-xl text-gray-700">Learn new tricks and improve your skills with expert coaches in skateboarding, BMX, scootering, and more!</p>
      </motion.div>

      {/* Grid Layout with Image and Coaching Info */}
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/coaching/coaching1.jpg" // Replace with actual image path
            alt="Rampworx Coaching"
            width={700}
            height={500}
            className="rounded-xl shadow-xl"
          />
        </motion.div>

        {/* Right Column - Coaching Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">What We Offer</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg">
                <li>Private one-on-one coaching sessions</li>
                <li>Group coaching for all skill levels</li>
                <li>Coaching for skateboarding, BMX, scootering, and more</li>
                <li>Personalized lesson plans for maximum progression</li>
                <li>Fun and professional coaching with experienced trainers</li>
              </ul>
              <Button className="mt-6 w-full bg-black text-white hover:bg-gray-800">Book a Coaching Session</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Coach Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-black">Meet Our Coaches</h2>
        <p className="mt-4 text-xl text-gray-700">Get to know the professionals who will guide you to your next level.</p>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Example Coach Card */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/coaching/coaches/tyler.jpg" // Replace with actual coach image
              alt="Coach-Tyler"
              width={250}
              height={250}
              className="rounded-full border-4 border-gray-300 shadow-xl"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Tyler</h3>
            <p className="mt-2 text-gray-600">Expert Scooter</p>
          </div>

          {/* Add more coach cards as needed */}
        </div>
      </div>
    </div>
  );
}
