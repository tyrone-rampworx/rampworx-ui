'use client';

import * as Accordion from '@radix-ui/react-accordion';

export default function SkateparkEtiquettePage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold">Skatepark Etiquette</h1>
        <p className="text-lg text-gray-600 mt-2">
          It's important to know what good and bad skatepark etiquette is before you visit Rampworx. We want everyone to enjoy their time at our skatepark, so please take note of the following guidelines to prevent annoying or potentially injuring other skatepark users.
        </p>
      </section>

      {/* Accordion Section */}
      <Accordion.Root type="multiple" className="space-y-4">
        {/* Snaking */}
        <Accordion.Item value="snaking" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              Snaking
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              Snaking occurs when you drop in before another rider who was waiting before you, essentially queue jumping. At the top of a busy ramp, it's crucial to wait your turn and let those who were waiting before you take their run. If you accidentally snake another user, move out of their way to a safe spot promptly. This practice ensures safety and fairness for everyone in the skatepark.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Dropping In */}
        <Accordion.Item value="dropping-in" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              Dropping In
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              The metal pole at the top of most quarter pipes is called the coping, used for grinding and stalling. Avoid hanging your equipment over the coping while waiting your turn, as it obstructs others. Ensure your gear is clear of the coping to allow others to use it effectively. If someone is occupying the ramp you wish to use, politely ask them to move.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Awareness */}
        <Accordion.Item value="awareness" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              Awareness
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              Standing on ramps is hazardous. Skateparks like Rampworx have a flow between ramps, jump-boxes, and rails; standing in the middle can cause accidents. If you fall or lack speed to ascend a ramp, exit the course safely or move aside to let others pass. Before crossing the park, check both ways to ensure it's clear. In case of a collision, apologize to maintain a friendly atmosphere.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Monster Runs */}
        <Accordion.Item value="monster-runs" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              Monster Runs
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              Avoid lengthy runs during busy times, as they can prevent others from using the park. Perform a few tricks and then wait your turn, allowing everyone a chance to participate. This approach keeps the park safe and enjoyable for all users.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Respect */}
        <Accordion.Item value="respect" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              Respect
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              Regardless of whether someone is on a BMX, scooter, skateboard, or blades, everyone has an equal right to use the park. Treat others with respect, including beginners. Remember, everyone starts as a beginner. If you encounter a novice, guide them on how to use the park safely instead of showing frustration. Mutual respect enhances the experience for all.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* When Not Riding */}
        <Accordion.Item value="when-not-riding" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              When Not Riding
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              During breaks, avoid standing or sitting on any part of the skatepark course, as it can obstruct others and lead to accidents. Utilize designated spectator areas, such as those under the gantry in the main section or by the café area, to watch safely without interfering with active riders.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Ride Within Your Capabilities */}
        <Accordion.Item value="ride-within-capabilities" className="border rounded-lg shadow-md">
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 font-semibold text-lg bg-gray-100 hover:bg-gray-200 rounded-lg">
              Ride Within Your Capabilities
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            <p>
              Recognize your skill level and ride accordingly. Attempting tricks beyond your ability can result in injuries. Progress gradually, ensuring you have mastered fundamental skills before advancing to more complex maneuvers. This approach minimizes risks and promotes a safer environment for all.
            </p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
