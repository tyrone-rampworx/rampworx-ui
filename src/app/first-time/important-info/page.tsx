'use client';

import * as Accordion from '@radix-ui/react-accordion';
import Link from 'next/link';

export default function ImportantInfoPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold">First Time Important Information</h1>
        <p className="text-lg text-gray-600 mt-2">
          Essential details to prepare for your visit to Rampworx Skatepark.
        </p>
      </section>

      {/* Accordion Section */}
      <Accordion.Root type="multiple" className="space-y-4">
        {/* Registration Section */}
        <Accordion.Item value="registration" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              Do I need to register?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              All users must register for a free Rampworx membership, which also serves as a waiver. This membership is required for each rider and includes important medical information. You will receive a Rampworx membership card, which you must bring each time you visit.
            </p>
            <p className="mt-2">
              The membership cannot be completed in the parent/guardian's name; it must be for the rider. For example, if you have three children, each child will need their own membership. Please fill out the form thoroughly to include any important medical information. While this can be done upon arrival, completing it before your visit will save time.
            </p>
            <Link href="/register" className="text-blue-600 hover:underline mt-2 inline-block">
              Register for Free
            </Link>
          </Accordion.Content>
        </Accordion.Item>

        {/* Booking Section */}
        <Accordion.Item value="booking" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              Do I need to book?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              Booking online is available and can expedite the sign-in process, but it is not mandatory. You can also arrive and pay by cash or card at the door. Our facility has a large capacity, so you won’t be turned away. However, booking is required for coaching sessions, parties, and certain events.
            </p>
            <Link href="/book-a-session" className="text-blue-600 hover:underline mt-2 inline-block">
              Book a Session
            </Link>
          </Accordion.Content>
        </Accordion.Item>

        {/* Scooter Guidelines */}
        <Accordion.Item value="scooter-guidelines" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              Can I bring a scooter that has 3 wheels, folds, or adjusts?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              No, we only allow "stunt" scooters for use in Rampworx. Here's why:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <strong>Folding/Adjusting Scooters:</strong> Stunt scooters are designed with a one-piece handlebar to withstand impacts from jumps and tricks. Scooters that fold or adjust are not classified as stunt scooters because the folding/adjusting mechanism is a point of weakness and is more likely to break under impact in a skatepark setting. Additionally, the handlebar on a stunt scooter is fixed at one height without an adjustment mechanism to eliminate any weaknesses.
              </li>
            </ul>
            <p className="mt-2">
              We prioritize user safety and aim to minimize the risk of accidents and injuries at Rampworx. A wide range of beginner stunt scooters is available in our shop.
            </p>
            <Link href="/shop" className="text-blue-600 hover:underline mt-2 inline-block">
              Visit Our Shop
            </Link>
          </Accordion.Content>
        </Accordion.Item>

        {/* Bar Ends Policy */}
        <Accordion.Item value="bar-ends-policy" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              Can I ride without bar ends?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              No bar ends, no ride! Bar ends are plugs made of nylon, plastic, or metal that fit into each end of scooter or bike handlebars after the grips are installed. They protect the open metal ends of handlebars, which can be sharp if left uncovered. Without bar ends, there's a risk of the handlebars cutting or impaling the skin during a trick. To minimize this risk, we have a strict no bar ends, no ride policy. Our staff will inspect your scooter or bike upon entry to ensure compliance.
            </p>
            <p className="mt-2">
              If you don't have bar ends, you can purchase them in our on-site shop, and our staff will install them for you.
            </p>
          </Accordion.Content>
        </Accordion.Item>

               {/* On-Site Café */}
               <Accordion.Item value="on-site-cafe" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              Is there a café on site?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              Yes, we have a Rampworx café inside the skatepark serving hot and cold food and drinks, boasting a 
              5-star food hygiene rating. Whether you're looking for a quick snack, a refreshing drink, or a meal 
              to refuel during your session, our café has you covered.
            </p>
            <p className="mt-2">
              The café offers a variety of options, including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Freshly prepared sandwiches and paninis</li>
              <li>Hot meals such as burgers, fries, and chicken nuggets</li>
              <li>Cold beverages including soft drinks and bottled water</li>
              <li>Hot drinks such as tea, coffee, and hot chocolate</li>
              <li>Snacks like crisps, chocolate bars, and fruit</li>
            </ul>
            <p className="mt-2">
              The café is a great place for parents and guardians to relax while keeping an eye on riders.
              We also have a seating area where visitors can enjoy their food comfortably.
            </p>
          </Accordion.Content>
        </Accordion.Item>


        {/* Equipment Hire */}
        <Accordion.Item value="equipment-hire" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              Can I hire equipment?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              Equipment hire is available for riders who do not have their own gear. Our rental options include:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Helmets</li>
              <li>Skateboards</li>
              <li>Scooters</li>
              <li>BMX Bikes</li>
            </ul>
            <p className="mt-2">
              Hire costs are not included in the entry fee. Visit the reception on the day to hire your equipment.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Lost Property */}
        <Accordion.Item value="lost-property" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              What happens if I lose something?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              We have CCTV throughout the skatepark and designated coat hangers and seating areas for personal belongings. While we do our best to provide a safe environment, we are not responsible for lost or damaged belongings.
            </p>
            <p className="mt-2">
              Lockers are available for small valuables and can be hired for £1 at reception.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Minimum Age */}
        <Accordion.Item value="minimum-age" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              What is the minimum age to ride?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              The minimum age for riders is strictly **5 years old**. Children younger than this are not permitted to ride at Rampworx for safety reasons.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Supervision Policy */}
        <Accordion.Item value="supervision-policy" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              Do young riders need supervision?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              Riders aged **5 to 9 years old** must have a **parent or guardian (over 18) present in the building** at all times. While you don’t need to be on the ramps, you can watch from:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>The viewing area</li>
              <li>The parents' room</li>
              <li>The café</li>
            </ul>
            <p className="mt-2">
              Parents do not need to pay for entry if they are not riding.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Prohibited Equipment */}
        <Accordion.Item value="prohibited-equipment" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              What equipment is NOT allowed?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>The following equipment is **not allowed** in Rampworx:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Electric/motorized scooters</li>
              <li>Electric bikes (including Surrons)</li>
              <li>Hoverboards</li>
              <li>Any other motorized vehicles</li>
            </ul>
            <p className="mt-2">
              These items pose safety risks and cannot be used in the skatepark.
            </p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold">Ready to Ride?</h2>
        <p className="text-lg text-gray-600 mt-2">
          Make sure you’re registered and have reviewed all the important information before your visit.
        </p>
        <Link href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6 inline-block hover:bg-blue-700">
          Register Now
        </Link>
      </section>
    </div>
  );
}
