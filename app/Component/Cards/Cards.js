"use client";
import "./Cards.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="card">
          <img src="/Images/animationone.svg" width="446px" height="443px" />
        </div>
        <div className="card-one">
          <img src="/Images/animationtwo.svg" width="446px" height="443px" />
        </div>
        <div className="card-two">
          <img src="/Images/animationthree.svg" width="446px" height="443px" />
        </div>
      </div>
    </>
  );
}
