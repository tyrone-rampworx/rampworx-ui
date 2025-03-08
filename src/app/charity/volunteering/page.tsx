import React from 'react';

const volunteeringOpportunities = [
  'Accountancy and Book Keeping',
  'Admin Work',
  'Research & Development',
  'Events',
  'Marketing',
  'Ramp Build & Maintenance',
  'Other Opportunities',
];

export default function VolunteeringPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Volunteering at Rampworx</h1>
      <p>
        Rampworx offers a variety of exciting volunteer opportunities for young people who wish to gain valuable experience in a dynamic working environment. Involvement could include supporting our project or using our project as a starting point to volunteer with an agency within the local community.
      </p>
      <h2>Volunteer Opportunities</h2>
      <ul>
        {volunteeringOpportunities.map((opportunity, index) => (
          <li key={index}>{opportunity}</li>
        ))}
      </ul>
      <p>
        If you're interested in volunteering with Rampworx, please visit our <a href="/contact">contact page</a> to get in touch with us.
      </p>
    </div>
  );
}
