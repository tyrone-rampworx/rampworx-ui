'use client';

import Link from 'next/link';

export default function EquipmentHirePage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold">Equipment Hire</h1>
        <p className="text-lg text-gray-600 mt-2">
          Don't have any equipment? Forgotten an important piece of kit? No problem, we have a full range of equipment for hire on the day.
        </p>
      </section>

      {/* Equipment Details */}
      <section className="mb-12">
        <p className="text-gray-600">
          We have everything you need in all sizes – Helmets, Pads, BMX's, Skateboards, and Stunt Scooters that you can hire for a one-off fee for however long your session is. Don't worry about sizes either; we have plenty available to ensure that you get the right piece of kit.
        </p>
        <p className="text-gray-600 mt-4">
          It is compulsory for ALL Scooter riders UNDER 16 and ALL Aggressive Skaters to wear a helmet at all times. Any riders under 16 years old must also wear a helmet. We also advise that full protective equipment and appropriate clothing is worn at all times.
        </p>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Helmet Hire: £3</li>
          <li>Pads Hire (Knee, Elbow, Wrist): £3 a Pair</li>
          <li>BMX Hire: £7</li>
          <li>Scooter Hire: £7</li>
          <li>Skateboard Hire: £7</li>
        </ul>
      </section>

      {/* Small Print */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Small Print</h2>
        <p className="text-gray-600">
          Please note that you must watch our skatepark etiquette video before you can hire any equipment from Rampworx Skatepark. All equipment must be returned undamaged 10 minutes before the end of the session. All equipment is signed out and in via your membership.
        </p>
      </section>

      {/* Registration Reminder */}
      <section className="text-center">
        <p className="text-gray-600">
          First-time users MUST register. Minimum age is strictly 5 years old.
        </p>
        <Link href="/register" className="text-blue-600 hover:underline mt-2 inline-block">
          Register for Free
        </Link>
      </section>
    </div>
  );
}
