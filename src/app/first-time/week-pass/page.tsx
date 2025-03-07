'use client';

import Link from 'next/link';

export default function WeekPassPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold">Buy a Rampworx Week Pass!</h1>
        <p className="text-lg text-gray-600 mt-2">
          Enjoy unlimited ride time during our term time opening hours for just £30 and our holiday opening hours for £50.
        </p>
      </section>

      {/* Week Pass Details */}
      <section className="mb-12">
        <p className="text-gray-600">
          The Rampworx Week Pass entitles you to unlimited ride time during our term time opening hours for just £30 and our holiday opening hours for £50. This means you can ride as long as you want, for as many sessions as you like, from the minute we open at the start of the week (Wednesday) until we close on Sunday night. This pass is targeted at our most loyal and local riders who keep skateparks like Rampworx going. It's our way of saying thank you for helping us remain one of the best skateparks in the UK. See you soon!
        </p>
      </section>

      {/* Small Print */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Small Print</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Purchase the pass before the week starts to get the most out of it, as each pass expires the following Sunday at 7 pm.</li>
          <li>Passes are not valid on event days.</li>
          <li>You must bring your receipt to the skatepark as proof of purchase.</li>
          <li>Passes are non-transferable and will be applied to your Rampworx Membership Card.</li>
          <li><Link href="/terms-conditions" className="text-blue-600 hover:underline">Terms and conditions apply</Link>.</li>
        </ul>
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
