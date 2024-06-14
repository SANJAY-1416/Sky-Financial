// import React from "react";
// import "./Cards.css";

// const Cards = () => {
//   return (
//     <div className="cards-container">
//       <div className="card card1">
//         <h2>Card 1</h2>
//         <p>This is the content of the first card.</p>
//       </div>
//       <div className="card card2">
//         <h2>Card 2</h2>
//         <p>This is the content of the second card.</p>
//       </div>
//       <div className="card card3">
//         <h2>Card 3</h2>
//         <p>This is the content of the third card.</p>
//       </div>
//     </div>
//   );
// };

// export default Cards;
// src/App.js
// const Card = ({ content, className }) => {
//   return (
//     <div className={`card ${className}`}>
//       <p>{content}</p>
//     </div>
//   );
// };
// Card component
"use client";
import "./Cards.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="cardContent">
            <h1>Rotating Card</h1>
            <p>This card rotates infinitely.</p>
          </div>
        </div>
      </div>
    </>
  );
}
