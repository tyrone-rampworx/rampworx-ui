// src/app/first-time/page.tsx

import React from "react";

const FirstTimePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-center p-8">
      <h1 className="text-4xl font-bold text-[var(--foreground)] mb-6">
        Your First Visit to the Skatepark
      </h1>

      {/* Embedded Video */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">
          Watch Our Skatepark Etiquette Video
        </h2>
        <iframe
          className="w-full max-w-2xl h-64"
          src="https://www.youtube.com/embed/IwXRhszZ_Rs?si=-yp1rFnjYZEemaYl" // Replace with your video URL
          title="Skatepark Etiquette Video"
          allowFullScreen
        />
      </div>

      {/* Membership Info */}
      <div className="bg-[var(--foreground)] text-[var(--background)] p-6 rounded-md shadow-lg w-full max-w-3xl mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-3">Become a Member</h2>
        <p className="mb-4">
          First-time visitors must register for a free membership. Fill out the online form, and you'll receive a Rampworx Membership Card on your first visit. This card gives you access to offers and events.
        </p>
        <p className="font-semibold mb-3">
          IMPORTANT: Bring your membership card to avoid a £1 fee if forgotten. If you lose it, there's a £2 replacement fee.
        </p>
        <a
          href="/register"
          className="inline-block px-6 py-3 bg-[var(--background)] text-[var(--foreground)] rounded-md hover:bg-opacity-80 transition-all"
        >
          Register Free
        </a>
      </div>

      {/* Safety Gear */}
      <div className="mb-6 w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-3">Safety Gear</h2>
        <p className="text-lg text-[var(--foreground)] mb-3">
          We take safety seriously! While helmets are mandatory for some users, we highly recommend all riders wear one. Knee and elbow pads are also advisable for beginners to prevent injury.
        </p>
        <p className="text-sm text-[var(--foreground)]">
          Aggressive skate users and scooter riders under 18 must wear helmets by law. Safety gear is essential to ensure a safe experience for everyone.
        </p>
      </div>

      {/* Skatepark Rules */}
      <div className="bg-[var(--foreground)] text-[var(--background)] p-6 rounded-md shadow-lg w-full max-w-3xl mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-3">Skatepark Rules</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Ensure all equipment is in good condition before use.</li>
          <li>Wear safety equipment at all times.</li>
          <li>Use designated areas for riding.</li>
          <li>No food or drinks on the ramps.</li>
          <li>No smoking, vaping, or alcohol on-site.</li>
        </ul>
        <p>
          For full rules, visit our{" "}
          <a href="/terms-and-conditions" className="text-[var(--foreground)] underline">
            Terms & Conditions.
          </a>
        </p>
      </div>

      {/* Age Restrictions */}
      <div className="mb-6 w-full max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Minimum Age</h2>
        <p className="text-lg text-[var(--foreground)]">
          The minimum age to use the skatepark is 5 years old. Riders aged 5-9 must be accompanied by a parent or guardian. Children under 5 can spectate only.
        </p>
      </div>

      {/* Parent's Guide */}
      <div className="mb-6 w-full max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Parent's Guide</h2>
        <p className="text-lg text-[var(--foreground)] mb-3">
          Parents of riders aged 5-9 must accompany their child at all times. Spectators can enjoy the warm seating areas and café while keeping an eye on their children.
        </p>
      </div>

      {/* Call to Action */}
      <a
        href="/register"
        className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-md hover:bg-opacity-80 transition-all"
      >
        Register Free & Get Started
      </a>
    </div>
  );
};

export default FirstTimePage;
