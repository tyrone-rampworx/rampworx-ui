'use client';

import * as Accordion from '@radix-ui/react-accordion';

export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold">Terms & Conditions</h1>
        <p className="text-lg text-gray-600 mt-2">
          Please read and understand the following terms and conditions before participating in any activities at Rampworx Skatepark.
        </p>
      </section>

      {/* Accordion Section */}
      <Accordion.Root type="multiple" className="space-y-4">
        {/* Our Contract with You */}
        <Accordion.Item value="contract" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              1. Our Contract with You
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>Rampworx provides access to various activities, including but not limited to stunt scootering, BMXing, skateboarding, inline skating, youth programmes, holiday clubs, group coaching, one-to-one tuition, outreach visits, equipment hire, café access, ASD and other special needs sessions, and parties ("Activities").</p>
            <p className="mt-2">These terms and conditions apply when you book to participate in an Activity with Rampworx Skatepark.</p>
            <p className="mt-2">By submitting your booking, you agree that the provision of activities by Rampworx Skatepark and your participation are subject to these terms and conditions.</p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Safety */}
        <Accordion.Item value="safety" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              2. Safety
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>Participation in the Activities carries inherent risks, including the possibility of personal injury or fatality. All participants must register for a membership/waiver before engaging in any activity.</p>
            <p className="mt-2">All users under the age of 16 must wear a helmet at all times whilst taking part in activities.</p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Booking & Payments */}
        <Accordion.Item value="booking-payments" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              3. Booking & Payments
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>Bookings must be made in advance where required. Payment must be made at the time of booking. No refunds will be issued for non-attendance.</p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Code of Conduct */}
        <Accordion.Item value="code-of-conduct" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              4. Code of Conduct
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>All visitors must respect other users and staff. Bullying, aggressive behavior, or intentional rule violations will result in removal from the premises.</p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Liability */}
        <Accordion.Item value="liability" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              5. Liability
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>Rampworx does not accept liability for personal injury or loss of property unless caused by negligence on the part of Rampworx staff.</p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
