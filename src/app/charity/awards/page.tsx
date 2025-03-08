import React from 'react';

const awards = [
  {
    title: 'Ride UK Reader Awards – Skatepark of the Year',
    years: [2013, 2015],
    description: 'Rampworx was voted Skatepark of the Year by the readers of Ride UK Magazine, a prestigious recognition in the skatepark community.',
  },
  {
    title: 'Active Club Award',
    year: 2010,
    description: 'Rampworx achieved Active Club Award status, an accreditation ensuring clubs meet standards for better quality provision.',
  },
  {
    title: 'Merseyside Young Persons Project of the Year',
    year: 2009,
    description: 'Awarded for significant contributions to the lives of young people attending the project.',
  },
  {
    title: 'Social Enterprise Network Growth Award',
    year: 2012,
    description: 'Recognized as the Merseyside Social Enterprise of the Year for providing excellent service to its users.',
  },
  {
    title: 'Skatepark of the Year',
    years: [2009, 2010, 2011, 2013],
    description: 'Awarded Skatepark of the Year multiple times, judged by industry professionals.',
  },
  {
    title: 'Merseyside Young Transformer Award Runner Up',
    year: 2008,
    description: 'Nominated as one of four finalists for significant contributions to young people\'s lives.',
  },
];

export default function AwardsPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Our Awards and Recognitions</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {awards.map((award, index) => (
          <li key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <h2>{award.title}</h2>
            <p><strong>Year{award.years && award.years.length > 1 ? 's' : ''}:</strong> {award.years ? award.years.join(', ') : award.year}</p>
            <p>{award.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
