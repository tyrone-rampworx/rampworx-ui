import React from "react";

const supporters = [
  { name: "Alice Johnson", contribution: "$50" },
  { name: "Bob Smith", contribution: "$30" },
  { name: "Charlie Lee", contribution: "$100" },
  { name: "Dana White", contribution: "$75" },
];

export default function SupportersPage() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Our Supporters</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {supporters.map((supporter, index) => (
          <li key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <strong>{supporter.name}</strong>
            <p>{supporter.contribution}</p>
          </li>
        ))}
      </ul>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button style={{ padding: "10px 20px", border: "1px solid #000", background: "white", cursor: "pointer" }}>
          Become a Supporter
        </button>
      </div>
    </div>
  );
}
