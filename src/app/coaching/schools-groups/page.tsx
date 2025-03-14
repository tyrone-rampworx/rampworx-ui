// src/app/coaching/schools-groups/page.tsx

import React from 'react';

const SchoolsAndGroupsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Schools & Groups Coaching Programs
        </h1>
        <p className="text-lg text-gray-600">
          Our coaching programs for schools and groups are designed to promote teamwork, confidence, and physical fitness through skateboarding. 
          Whether you're looking for a fun after-school activity or a team-building event, our coaches are here to help!
        </p>
      </header>

      {/* Benefits Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Benefits for Schools & Groups
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Team Building</h3>
            <p className="text-gray-600 text-center">
              Our programs focus on building collaboration and teamwork among students or group members. It’s the perfect opportunity for individuals to support each other while learning a new skill.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Confidence Boost</h3>
            <p className="text-gray-600 text-center">
              Skateboarding helps participants gain confidence as they learn new tricks, challenge themselves, and improve their skills in a supportive environment.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Physical Fitness</h3>
            <p className="text-gray-600 text-center">
              Our programs encourage physical activity, improve balance, and enhance coordination, all while having fun on a skateboard!
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Fun & Engaging</h3>
            <p className="text-gray-600 text-center">
              We create a fun, exciting atmosphere that keeps everyone engaged. Our coaching sessions are designed to keep your group entertained while learning.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">How It Works</h2>
        <p className="text-lg text-gray-600 mb-6">
          Whether you're a school looking to organize an event or a group of friends wanting a private session, we tailor our coaching to fit your needs. Here’s how it works:
        </p>
        <ol className="space-y-6 list-decimal pl-6 text-gray-600">
          <li>
            <span className="font-semibold">Step 1:</span> Choose the type of session (group coaching, after-school program, etc.).
          </li>
          <li>
            <span className="font-semibold">Step 2:</span> Select your desired dates and times.
          </li>
          <li>
            <span className="font-semibold">Step 3:</span> We'll provide all the necessary equipment and materials for your session.
          </li>
          <li>
            <span className="font-semibold">Step 4:</span> Enjoy the session while we help your group learn and grow together.
          </li>
        </ol>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-6">
          Ready to bring skateboarding to your school or group? Contact us to schedule a coaching session or ask any questions about our programs.
        </p>
        <a
          href="mailto:info@rampworx.com"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default SchoolsAndGroupsPage;
