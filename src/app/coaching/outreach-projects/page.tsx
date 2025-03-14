// src/app/coaching/outreach-projects/page.tsx

import React from 'react';

const OutreachProjectsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Outreach Projects
        </h1>
        <p className="text-lg text-gray-600">
          We are passionate about making a positive impact through our outreach programs.
          Discover how we're helping communities and organizations grow through skateboarding.
        </p>
      </header>

      {/* Outreach Programs */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Outreach Programs
        </h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Youth Development Program
              </h3>
              <p className="text-gray-600">
                Our Youth Development Program is designed to help young people learn new skills, build confidence, and have fun in a safe and supportive environment. We provide professional coaching and mentorship through skateboarding.
              </p>
            </div>
            <img
              src="/images/outreach-youth.jpg"
              alt="Youth Development"
              className="w-full md:w-1/3 mt-6 md:mt-0 rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Community Engagement
              </h3>
              <p className="text-gray-600">
                Our Community Engagement initiatives aim to bring people together through skateboarding events, competitions, and workshops. These events promote teamwork, friendship, and a positive lifestyle.
              </p>
            </div>
            <img
              src="/images/outreach-community.jpg"
              alt="Community Engagement"
              className="w-full md:w-1/3 mt-6 md:mt-0 rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Skateboarding for All
              </h3>
              <p className="text-gray-600">
                We believe skateboarding is for everyone. Our inclusive programs ensure that people from all backgrounds, abilities, and ages can enjoy the thrill of skating in a welcoming space.
              </p>
            </div>
            <img
              src="/images/outreach-all.jpg"
              alt="Skateboarding for All"
              className="w-full md:w-1/3 mt-6 md:mt-0 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get Involved</h2>
        <p className="text-lg text-gray-600 mb-6">
          Want to join our outreach programs or support our mission? Get in touch with us to find out how you can help make a difference in the community!
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

export default OutreachProjectsPage;
